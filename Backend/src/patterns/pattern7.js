module.exports = {
    name: 'Pattern7',
    sheetIndex: 7,
    primaryKeySheetIndex: 7, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'L', // Columna para llaves primarias
    baseStartRow: 69,
    basePrimaryKeyStartRow: 69,
    startRowIncrement: 19,
    primaryKeyStartRowIncrement: 19,
    names: ['sec1','sec2','sec3','sec4'], // division de tabla 
    baseDataStartRowBDA: [4,33,2,598], // donde esta la primera clave de bda
    baseDataStartRowBFE: [0,0,54,219], // donde esta la primera clave de bda
    defaultRowGap: [0,1,0,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Tierras FP_BN','Tierras FP_BN','BN convertido a PF','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['DOM ','DOM ','DOM ','DOM '], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','F','G'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['G','G','F','F'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [21,51,19,694], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [false,false,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [0,0,69,315], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'H', formula: '=D{row}*(E{row}-F{row})/G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'H', formula: '=D{row}*(E{row}-F{row})/G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'F' },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'H', formula: '=D{row}*(E{row}-F{row})/G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'H', formula: '=D{row}*(E{row}-F{row})/G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
    ],
}