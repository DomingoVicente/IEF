module.exports = {
    name: 'Pattern3',
    sheetIndex: 3,
    primaryKeySheetIndex: 3, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'N', // Columna para llaves primarias
    baseStartRow: 72,
    basePrimaryKeyStartRow: 72,
    startRowIncrement: 19,
    primaryKeyStartRowIncrement: 19,
    names: ['X'], //no se que es
    baseDataStartRowBDA: [24], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [21], //salto de claves bda
    baseDataStartRowBFE: [24], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21], //salto de claves bda
    defaultRowGap: [0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [2], /// catidad de filas
    sourceWorkbook1Sheets: ['Leña'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Factores expansión_bosques'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D'], //columna de donde esta el año bfe
    useDirectRange: [true], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: ['F10'], //donde empieza a iterar
    directRangeEnd: ['F11'], //donde termina de iterar
    specialRowIndex: [null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [61], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [61], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C21', 'C23'] },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Densidad básica', cellsToExtract: ['B13', 'B7'] },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(((D{row}*E{row}*(1+F{row}))+(G{row}*H{row}))*I{row})*-1', isSummed: true , condicion: true},
            { operationName: 'formula', destinationColumn: 'K', formula: '=(J{row} * {factorEmisionB12})/1000', isSummed: true, condicion: true },
        ],
    ],
}