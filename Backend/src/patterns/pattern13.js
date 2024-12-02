module.exports = {
    name: 'Pattern13',
    sheetIndex: 13,
    primaryKeySheetIndex: 13, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 130,
    basePrimaryKeyStartRow: 130,
    startRowIncrement: 40,
    primaryKeyStartRowIncrement: 40,
    names: ['sec1','sec2','sec3','sec4','sec5','sec6','sec7','sec8','sec9','sec10'], // division de tabla 
    baseDataStartRowBDA: [3,598,3,598,3,598,3,598,3,598], // donde esta la primera clave de bda
    baseDataStartRowBFE: [74,219,74,219,74,219,74,219,74,219], // donde esta la primera clave de bda
    defaultTotalRows: [1,1,1,1,1,1,1,1,1,1], /// catidad de filas
    defaultRowGap: [0,1,0,1,0,1,0,1,0,0], //si hay que saltarse algo en la plantilla (fila vacia)
    sourceWorkbook1Sheets: ['Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM '], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','G','D','G','D','G','D','G','D','G'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F','F','F','F','F','F'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [105,694,105,694,105,694,105,694,105,694], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [154,315,154,315,154,315,154,315,154,315], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],

    ],
}