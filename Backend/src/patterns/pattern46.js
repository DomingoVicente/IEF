module.exports = {
    name: 'Pattern46',
    sheetIndex: 46,
    primaryKeySheetIndex: 46, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 201,
    basePrimaryKeyStartRow: 201,
    startRowIncrement: 60,// -> aki voy
    primaryKeyStartRowIncrement: 60,
    names: ['A', 'B'], //no se que es
    baseDataStartRowBDA: [3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [21,21], //salto de claves bda
    baseDataStartRowBFE: [3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21], //salto de claves bda
    defaultRowGap: [22,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [3,4], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Factores emisión No-CO2', 'Factores emisión No-CO2'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['X', 'X'], //columna de donde esta el año bfe
    useDirectRange: [false, false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null], //donde empieza a iterar
    directRangeEnd: [null, null], //donde termina de iterar
    specialRowIndex: [null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true, true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680, 680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true, true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [680, 680], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'formula', destinationColumn: 'D', formula: 'falta valor'},
            { operationName: 'formula', destinationColumn: 'F', formula: '=({factorEmisionNo_CO2})'}, // 
            { operationName: 'formula', destinationColumn: 'G', formula: '=(D{row}*F{row})'},         //multiplicacion                
        ],
        [
            { operationName: 'formula', destinationColumn: 'D', formula: 'falta valor'},                        // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'F', formula: '=({factorEmisionNo_CO2})'},
            { operationName: 'formula', destinationColumn: 'G', formula: '=(D{row}*F{row})'}, // multiplicacion
        ]
    ],
}