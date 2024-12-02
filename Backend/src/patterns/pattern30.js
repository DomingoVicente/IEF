module.exports = {
    name: 'Pattern30',
    sheetIndex: 30,
    primaryKeySheetIndex: 30, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 126,
    basePrimaryKeyStartRow: 126,
    startRowIncrement: 38,
    primaryKeyStartRowIncrement: 38,
    names: ['sec1','sec2','sec3','sec4','sec5','sec6'], // division de tabla 
    baseDataStartRowBDA: [2,2,2,2,2,2], // donde esta la primera clave de bda
    baseDataStartRowBFE: [177,3], // donde esta la primera clave de bda
    defaultRowGap: [0,1,2,2,2,2], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,2,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['DOM ','DOM ','DOM ','DOM ','DOM ','DOM '], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D','D','D','D','D','D'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680,680,680,680,680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,false], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [194,83], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D' }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'customWorkbookBFE', destinationColumn:'E',searchColumn: 'C',sourceSheetName: 'DOM ',extractColumnBase: 'F',dataStartRow: 177,fixedRangePKbool: true,specialRangePK: 194,},                        { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'H', formula: '=D{row}*(F{row}-E{row})/G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=H{row} * {factorEmisionB12}/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'H', formula: '=D{row}*(F{row}-E{row})/G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=H{row} * {factorEmisionB12}/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}'}, 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}'}, 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}'}, 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1 },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}'}, 
        ],
    ],
}