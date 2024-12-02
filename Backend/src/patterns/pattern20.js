module.exports = {
    name: 'Pattern20',
    sheetIndex: 20,
    primaryKeySheetIndex: 20, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'O', // Columna para llaves primarias
    baseStartRow: 74,
    basePrimaryKeyStartRow: 75,
    startRowIncrement: 30,
    primaryKeyStartRowIncrement: 30,
    names: ['X'], //no se que es
    baseDataStartRowBDA: [3], // donde esta la primera clave de bda
    baseDataStartRowBFE: [24], // donde esta la primera clave de bda
    defaultRowGap: [0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [4], /// catidad de filas
    sourceWorkbook1Sheets: ['Superf_Incendios_CL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Factores emisión No-CO2'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D'], //columna de donde esta el año bfe
    useDirectRange: [false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null], //donde empieza a iterar
    directRangeEnd: [null], //donde termina de iterar
    specialRowIndex: [null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [20], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true],
    specialRangePKBFE: [5], // para buscar en un range especifico en caso de que las claves no sean seguidas
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'K4'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E9'},
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B24', 'B25','B26','B27'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' }
            //{ operationName: 'formula', destinationColumn: 'K', formula: '=(J{row} * {factorEmisionB12})/1000', isSummed: true, condicion: true },
        ],
    ],
}