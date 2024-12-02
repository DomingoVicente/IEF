module.exports = {
    name: 'Pattern48',
    sheetIndex: 48,
    primaryKeySheetIndex: 48, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 13,
    basePrimaryKeyStartRow: 201,
    startRowIncrement: 60,// -> aki voy
    primaryKeyStartRowIncrement: 60,
    names: ['A'], //no se que es
    baseDataStartRowBDA: [3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [21], //salto de claves bda
    baseDataStartRowBFE: [3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21], //salto de claves bda
    defaultRowGap: [0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert OL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Factores emisión No-CO2'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['X'], //columna de donde esta el año bfe
    useDirectRange: [false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null], //donde empieza a iterar
    directRangeEnd: [null], //donde termina de iterar
    specialRowIndex: [null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [680], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'formula', destinationColumn: 'B', formula: '=452.782482303758'},
            { operationName: 'formula', destinationColumn: 'D', formula: '=791.982060377844'}, // 
            { operationName: 'formula', destinationColumn: 'F', formula: '=31.5296'},         //multiplicacion                
            { operationName: 'formula', destinationColumn: 'G', formula: '=1751.277679'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=5429.268942'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=3256.73838069624'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=4637.28688162216'},
            { operationName: 'formula', destinationColumn: 'K', formula: '=-2903.93422138543'},
        ]
    ],
}