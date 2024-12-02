//Backend/src/utils/dataUtils.js
const { normalizeValue, columnLetterToIndex } = require('./excelUtils');

// Caché para almacenar llaves primarias ya extraídas
const primaryKeyCache = {};

// Función para extraer llaves primarias de un rango específico en una hoja de un workbook
function extractPrimaryKeys(sheet, column, startRow, totalRows) {
    const primaryKeys = [];
    const endRow = startRow + totalRows - 1;
    for (let row = startRow; row <= endRow; row++) {
        const key = sheet.cell(`${column}${row}`).value();
        if (key !== null && key !== undefined && key !== '') {
            primaryKeys.push(String(key).trim());
        }
    }
    return primaryKeys;
}

// Función para obtener llaves primarias utilizando caché
function getPrimaryKeys(sheet, column, startRow, totalRows, cacheKey) {
    if (primaryKeyCache[cacheKey]) {
        return primaryKeyCache[cacheKey];
    }
    const primaryKeys = extractPrimaryKeys(sheet, column, startRow, totalRows);
    primaryKeyCache[cacheKey] = primaryKeys;
    return primaryKeys;
}

// Función para construir el mapeo de llaves primarias a filas
function buildPrimaryKeyToRowMapping(sheet, searchColIndex, dataStartRow, totalRows, fixedRangePKbool, specialRangePK) {
    const primaryKeyToRow = new Map();
    let endRow;

    if (fixedRangePKbool) {
        endRow = specialRangePK ;
    } else {
        endRow = dataStartRow + totalRows - 1;
    }

    for (let row = dataStartRow; row <= endRow; row++) {
        const primaryKeyCell = sheet.cell(row, searchColIndex).value();
        const primaryKey = primaryKeyCell !== null && primaryKeyCell !== undefined ? String(primaryKeyCell).trim() : '';

        if (primaryKey) {
            primaryKeyToRow.set(primaryKey, row);
        }
    }


    return primaryKeyToRow;
}

// Función para extraer datos usando un rango directo
function extractDataUsingDirectRange(sheet, directRangeStart, directRangeEnd, totalRows) {
    const data = [];

    if (!directRangeStart || !directRangeEnd) {
        return Array(totalRows).fill(0);
    }

    const startCell = sheet.cell(directRangeStart);
    const endCell = sheet.cell(directRangeEnd);

    const startRow = startCell.rowNumber();
    const startCol = startCell.columnNumber();
    const endRow = endCell.rowNumber();
    const endCol = endCell.columnNumber();

    // Extraer valores del rango directo
    for (let row = startRow; row <= endRow && data.length < totalRows; row++) {
        for (let col = startCol; col <= endCol && data.length < totalRows; col++) {
            let value = sheet.cell(row, col).value();
            value = normalizeValue(value);
            data.push(value);
            if (data.length >= totalRows) break;
        }
    }
    
    // Rellenar con 0 si no se obtuvieron suficientes datos
    while (data.length < totalRows) {
        data.push(0);
    }

    return data;
}

// Función para obtener la fila a usar basada en condiciones especiales
function getRowToUse(primaryKey, index, primaryKeys, primaryKeyToRow, specialCondition, specialRowIndex, regionIndex, specialRowIndexIncrement) {
    let rowToUse;
    if (specialCondition && index === primaryKeys.length - 1 && specialRowIndex !== null) {
        // Para la llave primaria extra, usar la fila especial ajustada por región
        rowToUse = specialRowIndex + regionIndex * specialRowIndexIncrement;
    } else {
        rowToUse = primaryKeyToRow.get(primaryKey);
    }
    return rowToUse;
}

// Función para extraer datos basado en llaves primarias y un rango dinámico
function extractDataByPrimaryKeys(
    sheet,
    primaryKeys,
    searchColumn,
    extractColumn,
    dataStartRow,
    totalRows,
    specialCondition = false,
    specialRowIndex = null,
    regionIndex = 0,
    specialRowIndexIncrement = 0,
    fixedRangePKbool,
    specialRangePK,
    useDirectRange = false,
    directRangeStart = null,
    directRangeEnd = null
) {
    if (!sheet) {
        console.log('La hoja fuente no existe.');
        return Array(totalRows).fill(0);
    }

    if (useDirectRange) {
        return extractDataUsingDirectRange(sheet, directRangeStart, directRangeEnd, totalRows);
    }

    const searchColIndex = columnLetterToIndex(searchColumn);
    const extractColIndex = columnLetterToIndex(extractColumn);

    const primaryKeyToRow = buildPrimaryKeyToRowMapping(sheet, searchColIndex, dataStartRow, totalRows, fixedRangePKbool, specialRangePK);

    const data = [];

    for (let i = 0; i < primaryKeys.length; i++) {
        const primaryKey = primaryKeys[i];
        const rowToUse = getRowToUse(primaryKey, i, primaryKeys, primaryKeyToRow, specialCondition, specialRowIndex, regionIndex, specialRowIndexIncrement);

        if (rowToUse !== undefined) {
            let extractedValue = sheet.cell(rowToUse, extractColIndex).value();
            extractedValue = normalizeValue(extractedValue); // Normalizar el valor
            data.push(extractedValue);
        } else {
            data.push(0); // Reemplazar undefined con 0
        }
    }

    return data;
}

// Funciones para convertir entre letras y números de columnas
function columnLetterToNumber(columnLetter) {
    let columnNumber = 0;
    for (let i = 0; i < columnLetter.length; i++) {
        columnNumber *= 26;
        columnNumber += columnLetter.charCodeAt(i) - ('A'.charCodeAt(0) - 1);
    }
    return columnNumber;
}

function columnNumberToLetter(columnNumber) {
    let columnLetter = '';
    while (columnNumber > 0) {
        let modulo = (columnNumber - 1) % 26;
        columnLetter = String.fromCharCode(65 + modulo) + columnLetter;
        columnNumber = Math.floor((columnNumber - modulo) / 26);
    }
    return columnLetter;
}

function adjustColumnLetter(columnLetter, yearDiff) {
    const columnNumber = columnLetterToNumber(columnLetter);
    const newColumnNumber = columnNumber + yearDiff;
    return columnNumberToLetter(newColumnNumber);
}

module.exports = {
    extractPrimaryKeys,
    getPrimaryKeys,
    buildPrimaryKeyToRowMapping,
    extractDataUsingDirectRange,
    getRowToUse,
    extractDataByPrimaryKeys,
    columnLetterToNumber,
    columnNumberToLetter,
    adjustColumnLetter
};