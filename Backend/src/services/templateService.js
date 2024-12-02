//Backend/src/services/templateService.js
const path = require('path');
const fs = require('fs');
const { loadWorkbook, verifySheetExists, normalizeValue } = require('../utils/excelUtils');
const { getPrimaryKeys, extractDataByPrimaryKeys, adjustColumnLetter } = require('../utils/dataUtils');
const { createOperations, generateRegiones } = require('../utils/patternUtils');
const { generateTemplatePais } = require('./pais_bfe');
const { loadSectionPatterns } = require('../services/sectionPatternLoader');

// Función para procesar una región
function processRegion(region, outputSheet, BDA, BFE, primaryKeySheet, primaryKeyColumn, 
    factorEmisionB12, 
    factorEmisionNo_CO2, 
    arrayD_G_J_P, 
    factorEmisionB6, 
    otrasTierrasF9, 
    otrasTierrasG9, 
    factorEmisionB5,
    DiagramaflugoBincendiosL30,
    DiagramaflugoBincendiosC34,
    DiagramaflugoBincendiosF30,
    carbonoSueloB66,
    carbonoSueloC66,
    carbonoSueloD66,
    carbonoSueloB117,
    carbonoSueloC117,
    carbonoSueloD117,
    sourceExtractColumns1Adjusted,
    sourceExtractColumns2Adjusted

) {
    
    const { nombre, startRow, primaryKeyStartRow, sections, regionIndex } = region;
    
    let currentStartRow = startRow;
    let currentPrimaryKeyStartRow = primaryKeyStartRow;
    const regionSummedCells = {};

    for (let s = 0; s < sections.length; s++) {
        const section = sections[s];
            const {
                name,
                dataStartRowBDA,
                dataStartRowBFE,
                totalRows,
                sourceWorkbook1Sheet,
                sourceWorkbook2Sheet,
                useDirectRange = false,
                directRangeStart = null,
                directRangeEnd = null,
                specialCondition = false,
                specialRowIndex = null,
                specialRowIndexIncrement = 0,
                fixedRangePKboolBDA = false,
                fixedRangePKboolBFE = false,
                specialRangePKBDA = null,
                specialRangePKBFE = null,
                destinationColumns,
            } = section;

            const sourceExtractColumn1 = sourceExtractColumns1Adjusted[s];
            const sourceExtractColumn2 = sourceExtractColumns2Adjusted[s];
    


            const operations = createOperations({
                patternName: name,
                sourceWorkbook1: BDA,
                sheet1: sourceWorkbook1Sheet,
                sourceWorkbook2: BFE,
                sheet2: sourceWorkbook2Sheet,
                primaryKeySheet,
                primaryKeyColumn,
                startRow: currentStartRow,
                primaryKeyStartRow:currentPrimaryKeyStartRow,
                totalRows: totalRows || 0,
                primaryKeyStartRow: currentPrimaryKeyStartRow,
                primaryKeyTotalRows: totalRows || 0,
                dataStartRowBDA,
                dataStartRowBFE,
                sourceExtractColumn1,
                sourceExtractColumn2,
                factorEmisionB12,
                factorEmisionNo_CO2,
                arrayD_G_J_P,
                factorEmisionB6,
                otrasTierrasF9,
                otrasTierrasG9,
                factorEmisionB5,
                DiagramaflugoBincendiosL30,
                DiagramaflugoBincendiosC34,
                DiagramaflugoBincendiosF30,
                carbonoSueloB66,
                carbonoSueloC66,
                carbonoSueloD66,
                carbonoSueloB117,
                carbonoSueloC117,
                carbonoSueloD117,        
                useDirectRange,
                directRangeStart,
                directRangeEnd,
                specialCondition,
                specialRowIndex,
                specialRowIndexIncrement,
                fixedRangePKboolBDA,
                fixedRangePKboolBFE,
                specialRangePKBDA,
                specialRangePKBFE,
                regionIndex,
                destinationColumns,
            });

        const sectionSummedCells = {}; // Para rastrear las celdas sumadas por columna en la sección        
        for (const op of operations) {
            let extractedData = [];
    
            switch (op.operationType) {
                case 'fixed':
                    const fixedSourceSheet = op.sourceWorkbook.sheet(op.sourceSheetName);
                    if (fixedSourceSheet) {
                        let fixedValue = fixedSourceSheet.cell(op.fixedCell).value();
                        fixedValue = normalizeValue(fixedValue); // Normalizar el valor
                        extractedData = Array(op.totalRows).fill(fixedValue);
                    } else {
                        console.log(`La hoja '${op.sourceSheetName}' no existe en el workbook.`);
                    }
                    break;

                case 'custom':
                    const customSourceSheet = op.sourceWorkbook.sheet(op.sourceSheetName);
                    if (customSourceSheet) {
                        extractedData = [];
                        for (const cellAddress of op.cellsToExtract) {
                            let value = customSourceSheet.cell(cellAddress).value();
                            value = normalizeValue(value);
                            extractedData.push(value);
                        }
                        // Asegurarse de que extractedData tenga la longitud de totalRows
                        while (extractedData.length < op.totalRows) {
                            extractedData.push(0); // Rellenar con ceros si es necesario
                        }
                    } else {
                        console.log(`La hoja '${op.sourceSheetName}' no existe en el workbook.`);
                    }
                    break;
                    
                case 'manualValue':
                    extractedData = Array(op.totalRows).fill(op.manualValue); // Llena las filas con el valor manual
                    break;
                    

                case 'formula':
                        for (let i = 0; i < op.totalRows; i++) {
                            const row = op.destinationStartRow + i;
                            let formula = op.formula.replace(/{row}/g, row);
                            formula = formula.replace('{factorEmisionB12}', factorEmisionB12);
                            formula = formula.replace('{factorEmisionNo_CO2}', factorEmisionNo_CO2);                        
                            formula = formula.replace('{factorEmisionB6}', factorEmisionB6); 
                            formula = formula.replace('{otrasTierrasF9}', otrasTierrasF9); //
                            formula = formula.replace('{otrasTierrasG9}', otrasTierrasG9); 
                            formula = formula.replace('{factorEmisionB5}', factorEmisionB5); 
                            formula = formula.replace('{DiagramaflugoBincendiosL30}', DiagramaflugoBincendiosL30); 
                            formula = formula.replace('{DiagramaflugoBincendiosC34}', DiagramaflugoBincendiosC34); 
                            formula = formula.replace('{DiagramaflugoBincendiosF30}', DiagramaflugoBincendiosF30); 
                            
                            formula = formula.replace('{carbonoSueloB66}', carbonoSueloB66); //
                            formula = formula.replace('{carbonoSueloC66}', carbonoSueloC66); 
                            formula = formula.replace('{carbonoSueloD66}', carbonoSueloD66); 
                            formula = formula.replace('{carbonoSueloB117}', carbonoSueloB117); //
                            formula = formula.replace('{carbonoSueloC117}', carbonoSueloC117); 
                            formula = formula.replace('{factorEmisionB5}', factorEmisionB5); 
                            formula = formula.replace('{carbonoSueloD117}', carbonoSueloD117); //
                             
                            outputSheet.cell(`${op.destinationColumn}${row}`).formula(formula);

                        }
                        break;
                
                case 'formula-diagonal':
                    for (let i = 0; i < op.totalRows; i++) {
                        const row = op.destinationStartRow + i;
                        const destinationColumnCharCode = op.destinationColumn.charCodeAt(0) + i;
                        const destinationColumn = String.fromCharCode(destinationColumnCharCode);
                        let formula = op.formula.replace(/{row}/g, row);
                        // Reemplazar otros marcadores si es necesario
                        outputSheet.cell(`${destinationColumn}${row}`).formula(formula);
                    }
                    break;
                        

                
                case 'formula-diagonal':
                    for (let i = 0; i < op.totalRows; i++) {
                        const row = op.destinationStartRow + i;
                        const destinationColumnCharCode = op.destinationColumn.charCodeAt(0) + i;
                        const destinationColumn = String.fromCharCode(destinationColumnCharCode);
                        let formula = op.formula.replace(/{row}/g, row);
                        // Reemplazar otros marcadores si es necesario
                        outputSheet.cell(`${destinationColumn}${row}`).formula(formula);
                    }
                    break;
                        

                case 'formula-dornersito2':
                        const texto2 = region.nombre;
                        const numeroRegion2 = texto2.match(/(?<=Región\s)\d+/)[0] - 1;                    
                        const fixedSourceSheet2 = op.sourceWorkbook.sheet(op.sourceSheetName);
                        let n;
                        if (fixedSourceSheet2) {
                            if(op.fixedCell == 'U' || op.fixedCell == 'T' || op.fixedCell == 'V' || op.fixedCell == 'H' || op.fixedCell == 'I' || op.fixedCell == 'J'){
                                n = 45 + numeroRegion2;
                            }
                            else{
                                if(op.fixedCell == 'K')
                                    n = 2 + numeroRegion2;
                                else{
                                    if(op.fixedCell == 'H2'){
                                        op.fixedCell = 'H';
                                        n = 45 + numeroRegion2;
                                    }
                                    if(op.fixedCell == 'I2'){
                                        op.fixedCell = 'I';
                                        n = 45+ numeroRegion2;
                                    }
                                    if(op.fixedCell == 'J2'){
                                        op.fixedCell = 'J';
                                        n = 45+ numeroRegion2;
                                    }
                                    if(op.fixedCell == 'T2'){
                                        op.fixedCell = 'T';
                                        n = 45+ numeroRegion2;
                                    }
                                    if(op.fixedCell == 'U2'){
                                        op.fixedCell = 'U';
                                        n = 45+ numeroRegion2;
                                    }
                                    if(op.fixedCell == 'V2'){
                                        op.fixedCell = 'V';
                                        n = 45+ numeroRegion2;
                                    }
                                    else
                                        n = 65 + numeroRegion2;
                                }
                            }
                            let fixedValue2 = fixedSourceSheet2.cell(`${op.fixedCell}${n}`).value();
                            fixedValue2 = normalizeValue(fixedValue2); // Normalizar el valor
                            extractedData = Array(op.totalRows).fill(fixedValue2);
                        } else {
                            console.log(`La hoja '${op.sourceSheetName}' no existe en el workbook.`);
                        }                    
                        break;

                    case "formula-dornersito":
                            const texto = region.nombre;
                            const numeroRegion = texto.match(/(?<=Región\s)\d+/)[0];
                            let diff = numeroRegion - 1;
                            const arrD = arrayD_G_J_P[0];
                            const arrG = arrayD_G_J_P[1];
                            const arrJ = arrayD_G_J_P[2];
                            const arrP = arrayD_G_J_P[3];
        
                            for (let i = 0; i < op.totalRows; i++) {
                                const row = op.destinationStartRow + i;
                                let formula = op.formula.replace(/{row}/g, row);
                                formula = formula.replace('{D}', arrD[diff]);                     
                                formula = formula.replace('{G}', arrG[diff]); 
                                formula = formula.replace('{J}', arrJ[diff]); 
                                formula = formula.replace('{P}', arrP[diff]); 
                                outputSheet.cell(`${op.destinationColumn}${row}`).formula(formula);
                            }
                            break; 
                
                    case 'customWorkbookBFE':
                        const customSourceSheet2 = op.sourceWorkbook.sheet(op.sourceSheetName);
                        if (customSourceSheet2) {
                            const data = [];
                            const startRow = op.dataStartRow;
                            const endRow = startRow + op.specialRangePK - 1;
                
                            for (let row = startRow; row <= endRow; row++) {
                                let value = customSourceSheet2.cell(`${op.extractColumn}${row}`).value();
                                value = normalizeValue(value);
                                data.push(value);
                            }
                            extractedData = data;
                        } else {
                            console.log(`La hoja '${op.sourceSheetName}' no existe en el workbook.`);
                        }
                        break;
                                    


                case 'extract':

                    if (op.useDirectRange) {
                        // Manejar la extracción usando directRange
                        extractedData = extractDataByPrimaryKeys(
                            op.sourceWorkbook.sheet(op.sourceSheetName),
                            [], // No se necesitan primaryKeys cuando se usa directRange
                            null, // searchColumn no se usa
                            null, // extractColumn no se usa
                            null, // dataStartRow no se usa
                            op.totalRows,
                            false, // specialCondition no se usa
                            null, // specialRowIndex no se usa
                            op.regionIndex,
                            op.specialRowIndexIncrement,
                            op.fixedRangePKbool,
                            op.specialRangePK,
                            op.useDirectRange,
                            op.directRangeStart,
                            op.directRangeEnd
                        );
                    } else {
                        // Manejar la extracción basada en llaves primarias
                        const cacheKey = `${op.primaryKeyColumn}_${op.primaryKeyStartRow}_${op.primaryKeyTotalRows}`;
                        const primaryKeys = getPrimaryKeys(
                            op.primaryKeySheet,
                            op.primaryKeyColumn,
                            op.primaryKeyStartRow,
                            op.primaryKeyTotalRows,
                            cacheKey
                        );

                        const extractSourceSheet = op.sourceWorkbook.sheet(op.sourceSheetName);
                        if (extractSourceSheet) {
                            extractedData = extractDataByPrimaryKeys(
                                extractSourceSheet,
                                primaryKeys,
                                op.searchColumn,
                                op.extractColumn,
                                op.dataStartRow,
                                op.totalRows,
                                op.specialCondition,
                                op.specialRowIndex,
                                op.regionIndex,
                                op.specialRowIndexIncrement,
                                op.fixedRangePKbool,
                                op.specialRangePK
                            );
                        } else {
                            console.log(`La hoja '${op.sourceSheetName}' no existe en el workbook.`);
                        }
                    }
                    break;

                default:
                    console.warn(`Operación desconocida: ${op.operationType}`);
            }

            // Insertar los datos extraídos en la hoja de salida específica
            if (extractedData.length > 0) {
                for (let i = 0; i < extractedData.length; i++) {
                    const row = op.destinationStartRow + i;
                    let value = normalizeValue(extractedData[i]);
                    outputSheet.cell(`${op.destinationColumn}${row}`).value(value);
                }
            }

            // Sumar resultados si es necesario
            if (op.isSummed) {
                const sumStartRow = op.destinationStartRow;
                const sumEndRow = op.destinationStartRow + op.totalRows - 1;
                const sumRange = `${op.destinationColumn}${sumStartRow}:${op.destinationColumn}${sumEndRow}`;
                const sumRow = op.destinationStartRow - 1;

                outputSheet.cell(`${op.destinationColumn}${sumRow}`).formula(`SUM(${sumRange})`);

                // Agregar filas a listas de suma para la sección actual solo si 'condicion' es verdadera
                if (op.condicion) {
                    if (!sectionSummedCells[op.destinationColumn]) {
                        sectionSummedCells[op.destinationColumn] = [];
                    }
                    sectionSummedCells[op.destinationColumn].push(`${op.destinationColumn}${sumRow}`);
                }
            }
        }

        // Añadir las celdas sumadas de la sección a las de la región
        for (const col in sectionSummedCells) {
            if (!regionSummedCells[col]) {
                regionSummedCells[col] = [];
            }
            regionSummedCells[col].push(...sectionSummedCells[col]);
        }


        // Incrementar currentPrimaryKeyStartRow después de procesar la sección
        currentPrimaryKeyStartRow += totalRows + section.rowGap;

        // Actualizar currentStartRow como antes
        currentStartRow += totalRows + section.rowGap;
    }

    // Calcular la fila final de la región
    const regionSumRow = currentStartRow;

    // Escribir la suma final de la región en la última fila de la región
    for (const col in regionSummedCells) {
        if (regionSummedCells[col].length > 0) {
            outputSheet.cell(`${col}${regionSumRow}`).formula(`SUM(${regionSummedCells[col].join(",")})`);
        }
    }
}
// Función principal para generar la plantilla
async function generateTemplateService(fileBDA, fileBFE) {
 
    let outputPath = "";

    try {

        let loadedPatterns = [];

        try {
            const patternsDirectory = path.join(__dirname, '../patterns');

            const specificFile = null; 
    
            loadedPatterns = loadSectionPatterns(patternsDirectory, specificFile);
            console.log("Patterns cargados en loadedPatterns:", loadedPatterns);

        } catch (error) {
            console.error('Error al leer el directorio de patrones:', error.message);
        }

        const storagePath = path.resolve(__dirname, '../../storage');

        const filePathBDA = path.join(storagePath, fileBDA);
        const filePathBFE = path.join(storagePath, fileBFE);
        const templatePath = path.join(storagePath, '2024_1990-4UTCUTS-VACIO1.xlsx');
        outputPath = path.join(storagePath, 'resultado_regiones.xlsx');


        // Verificar existencia de archivos
        if (!fs.existsSync(filePathBDA) || !fs.existsSync(filePathBFE) || !fs.existsSync(templatePath)) {
            throw new Error('Uno o más archivos no existen.');
        }

        // Cargar los workbooks
        const [BDA, BFE, templateWorkbook] = await Promise.all([
            loadWorkbook(filePathBDA),
            loadWorkbook(filePathBFE),
            loadWorkbook(templatePath),
        ]);

         // Definir el año objetivo y calcular la diferencia de años
         const baseYear = 1990;   // Año base de tus datos
         const targetYear = 1990;  // Año objetivo
         const yearDiff = targetYear - baseYear;

        const factoresEmisionSheet = BFE.sheet('Factores emisión');
        let factorEmisionB12 = factoresEmisionSheet.cell('B12').value();

        const DiagramaflugoBincendiosSheetL30 = BFE.sheet('Diagrama flugo B incendios');
        let DiagramaflugoBincendiosL30 = DiagramaflugoBincendiosSheetL30.cell('L30').value();

        const DiagramaflugoBincendiosSheetC34 = BFE.sheet('Diagrama flugo B incendios');
        let DiagramaflugoBincendiosC34 = DiagramaflugoBincendiosSheetC34.cell('C34').value();

        const DiagramaflugoBincendiosSheetF30 = BFE.sheet('Diagrama flugo B incendios');
        let DiagramaflugoBincendiosF30 = DiagramaflugoBincendiosSheetF30.cell('F30').value();


        const factoresEmisionSheet2 = BFE.sheet('Factores emisión No-CO2');
        let factorEmisionNo_CO2 = factoresEmisionSheet2.cell('L5').value();
        factorEmisionNo_CO2 = normalizeValue(factorEmisionNo_CO2); // Normalizar el valor    

        let factorEmisionB5 = factoresEmisionSheet2.cell('B5').value();
        factorEmisionB5 = normalizeValue(factorEmisionB5); // Normalizar el valor    
        
        let factorEmisionB6 = factoresEmisionSheet2.cell('B6').value();
        factorEmisionB6 = normalizeValue(factorEmisionB6);



        const factoresEmisionSheet3 = BFE.sheet('Stock_Otras Tierras');
        let otrasTierrasF9 = factoresEmisionSheet3.cell('F9').value();
        otrasTierrasF9 = normalizeValue(otrasTierrasF9);

        let otrasTierrasG9 = factoresEmisionSheet3.cell('G9').value();
        otrasTierrasG9 = normalizeValue(otrasTierrasF9);

        // //lista para planilla xxxxxxxx
        const arrayD = [];
        const arrayG = [];
        const arrayJ = [];
        const arrayP = [];
        const sheet_arrayD_G_J_P = BFE.sheet('Stock_Otras Tierras');

        for (let base = 16; base <= 31; base += 1) {
            let value1 = sheet_arrayD_G_J_P.cell(`D${base}`).value();
            let value2 = sheet_arrayD_G_J_P.cell(`G${base}`).value();
            let value3 = sheet_arrayD_G_J_P.cell(`J${base}`).value();
            let value4 = sheet_arrayD_G_J_P.cell(`P${base}`).value();
            
            arrayD.push(value1);
            arrayG.push(value2);
            arrayJ.push(value3);
            arrayP.push(value4);
        }
        const arrayD_G_J_P = [arrayD,arrayG,arrayJ,arrayP];

        const carbonoSueloSheet = BFE.sheet('Carbono del suelo');

        let carbonoSueloB66 = carbonoSueloSheet.cell('B66').value();
        carbonoSueloB66 = normalizeValue(carbonoSueloB66); // Normalizar el valor    

        let carbonoSueloC66 = carbonoSueloSheet.cell('C66').value();
        carbonoSueloC66 = normalizeValue(carbonoSueloC66);

        let carbonoSueloD66 = carbonoSueloSheet.cell('D66').value();
        carbonoSueloD66 = normalizeValue(carbonoSueloD66);

        let carbonoSueloB117 = carbonoSueloSheet.cell('B117').value();
        carbonoSueloB117 = normalizeValue(carbonoSueloB117);

        let carbonoSueloC117 = carbonoSueloSheet.cell('C117').value();
        carbonoSueloC117 = normalizeValue(carbonoSueloC117);

        let carbonoSueloD117 = carbonoSueloSheet.cell('D117').value();
        carbonoSueloD117 = normalizeValue(carbonoSueloD117);

        // Definir los patrones de sección

        //arreglo queda vacio, por eso no llena al final la planilla de resultados
        const sectionPatterns = loadedPatterns;
        console.log("Patterns: ", sectionPatterns);

        // Ajustar las columnas de extracción basadas en la diferencia de años
        sectionPatterns.forEach(pattern => {
            pattern.sourceExtractColumns1 = pattern.sourceExtractColumns1Base.map(baseColumn => adjustColumnLetter(baseColumn, yearDiff));
            pattern.sourceExtractColumns2 = pattern.sourceExtractColumns2Base.map(baseColumn => adjustColumnLetter(baseColumn, yearDiff));
        });


        // Ajustar 'extractColumn' en operaciones 'customWorkbookBFE'
        sectionPatterns.forEach(pattern => {
            pattern.destinationColumns.forEach(sectionOps => {
                sectionOps.forEach(op => {
                    if (op.operationName === 'customWorkbookBFE' && op.extractColumnBase) {
                        op.extractColumn = adjustColumnLetter(op.extractColumnBase, yearDiff);
                    }
                });
            });
        });


        // Verificar que cada sectionPattern tenga la cantidad correcta de destinationColumns
        sectionPatterns.forEach(pattern => {
            if (pattern.destinationColumns.length !== pattern.names.length) {
                throw new Error(`El patrón ${pattern.name} tiene un número de destinationColumns que no coincide con el número de secciones.`);
            }
        });

        // Verificar que todas las hojas referenciadas existan en los workbooks de origen
        sectionPatterns.forEach(pattern => {
            pattern.sourceWorkbook1Sheets.forEach(sheetName => {
                verifySheetExists(BDA, sheetName);
            });
            pattern.sourceWorkbook2Sheets.forEach(sheetName => {
                verifySheetExists(BFE, sheetName);
            });
        });

        // Iterar sobre cada patrón de sección
        iterationCounter = 0;
        for (const pattern of sectionPatterns) {
            const regiones = generateRegiones(pattern, 16); // Número de regiones por patrón

            const outputSheet = templateWorkbook.sheet(pattern.sheetIndex);

            // Obtener la hoja y columna de llave primaria específicas para este patrón
            const patternPrimaryKeySheet = templateWorkbook.sheet(pattern.primaryKeySheetIndex);
            const patternPrimaryKeyColumn = pattern.primaryKeyColumn;

            if (!patternPrimaryKeySheet) {
                throw new Error(`La hoja ccon índice ${pattern.primaryKeySheetIndex} no existe en el workbook de plantilla.`);
            }

            for (const region of regiones) {
                processRegion(
                    region,
                    outputSheet,
                    BDA,
                    BFE,
                    patternPrimaryKeySheet, // Pasar la hoja de llave primaria específica
                    patternPrimaryKeyColumn, // Pasar la columna de llave primaria específica
                    factorEmisionB12,
                    factorEmisionNo_CO2,
                    arrayD_G_J_P,
                    factorEmisionB6,
                    otrasTierrasF9,
                    otrasTierrasG9,
                    factorEmisionB5,
                    DiagramaflugoBincendiosL30,
                    DiagramaflugoBincendiosC34,
                    DiagramaflugoBincendiosF30,
                    carbonoSueloB66,
                    carbonoSueloC66,
                    carbonoSueloD66,
                    carbonoSueloB117,
                    carbonoSueloC117,
                    carbonoSueloD117,
                    pattern.sourceExtractColumns1, // Pasar las columnas ajustadas
                    pattern.sourceExtractColumns2, // Pasar las columnas ajustadas
                );
            }
        }

        await templateWorkbook.toFileAsync(outputPath);

        try {
            // Llamar a generateTemplatePais y esperar su resultado
            outputPath = await generateTemplatePais(fileBDA, fileBFE);


        } catch (error) {
            // Manejar cualquier error que pueda ocurrir
            console.error('Error en generateTemplateService:', error);
        }   

        return outputPath;

    } catch (error) {
        console.error('Error al generar la plantilla:', error);
        throw error;
    }
}

module.exports = {
    generateTemplateService,
};