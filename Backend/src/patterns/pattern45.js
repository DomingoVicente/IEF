module.exports = {
    name: 'Pattern45',
    sheetIndex: 45,
    primaryKeySheetIndex: 45, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 125,
    basePrimaryKeyStartRow: 125,
    startRowIncrement: 37,// -> aki voy
    primaryKeyStartRowIncrement: 37,
    names: ['A', 'B', 'C', 'D', 'E'], //no se que es
    baseDataStartRowBDA: [3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [21,21,21,21,21], //salto de claves bda
    baseDataStartRowBFE: [3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21], //salto de claves bda
    defaultRowGap: [1,1,1,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [3,2,2,2,2], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Factores expansión_bosques', 'Factores expansión_bosques', 'Factores expansión_bosques', 'Factores expansión_bosques', 'Factores expansión_bosques'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D', 'D', 'D', 'D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['X', 'X', 'X', 'X', 'X'], //columna de donde esta el año bfe
    useDirectRange: [false, false, false, false,false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null, null, null, null], //donde empieza a iterar
    directRangeEnd: [null, null, null, null, null], //donde termina de iterar
    specialRowIndex: [null, null, null, null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true, true, true, true, true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680, 680, 680, 680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true, true, true, true, true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [680, 680, 680, 680,680], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ]
    ],
}