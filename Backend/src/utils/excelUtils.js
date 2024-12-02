//Backend/src/utils/excelUtils.js
const XlsxPopulate = require('xlsx-populate');
const fs = require('fs');

// Función para cargar un workbook si el archivo existe
async function loadWorkbook(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`El archivo ${filePath} no existe.`);
    }
    console.log(`Cargando workbook: ${filePath}`);
    return XlsxPopulate.fromFileAsync(filePath);
}

// Función para verificar si una hoja existe en un workbook
function verifySheetExists(workbook, sheetName) {
    const sheet = workbook.sheet(sheetName);
    if (!sheet) {
        throw new Error(`La hoja '${sheetName}' no existe en el workbook.`);
    }
}

// Función para normalizar valores, reemplazando undefined o null con 0
function normalizeValue(value) {
    if (value === undefined || value === null) {
        return 0;
    }
    return value;
}


// Función para convertir letras de columna a índices numéricos
function columnLetterToIndex(column) {
    let index = 0;
    for (let i = 0; i < column.length; i++) {
        index = index * 26 + column.charCodeAt(i) - ('A'.charCodeAt(0) - 1);
    }
    return index;
}

module.exports = {
    loadWorkbook,
    verifySheetExists,
    normalizeValue,
    columnLetterToIndex,
};
