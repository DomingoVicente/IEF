module.exports = {
    name: 'Pattern33',
    sheetIndex: 33,
    primaryKeySheetIndex: 33, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'O', // Columna para llaves primarias
    baseStartRow: 74,
    basePrimaryKeyStartRow: 75,
    startRowIncrement: 30,
    primaryKeyStartRowIncrement: 30,
    names: ['sec1'], // division de tabla 
    baseDataStartRowBDA: [4], // donde esta la primera clave de bda
    baseDataStartRowBFE: [74], // donde esta la primera clave de bda
    defaultTotalRows: [1,1,1,1], /// catidad de filas
    useDirectRange: [true], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [5], //donde empieza a iterar BFE
    directRangeEnd: [8], //donde termina de iterar BFE
    sourceWorkbook1Sheets: ['Incendios'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN', 'Factores emisión No-CO2'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F','F','F','F','F','F'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [129], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [154,315], //rango de filas en que va a buscar
    destinationColumns: [
        // los fixedCell : 'B{45}, van entre llaver porque aumenta en 1 cada region'
        [
            // sec1 -> primera fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Biomasa Stock_BN', fixedCell: 'E{6}' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E5' },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
        ],
    ]
}