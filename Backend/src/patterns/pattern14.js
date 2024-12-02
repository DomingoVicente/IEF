module.exports = {
    name: 'Pattern14',
    sheetIndex: 14,
    primaryKeySheetIndex: 14, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'R', // Columna para llaves primarias
    baseStartRow: 147,
    basePrimaryKeyStartRow: 147,
    startRowIncrement: 45,
    primaryKeyStartRowIncrement: 45,
    names: ['sec1','sec2','sec3','sec4','sec5','sec6','sec7','sec8','sec9','sec10'], // division de tabla 
    baseDataStartRowBDA: [3,598,3,598,3,598,3,598,3,598], // donde esta la primera clave de bda
    baseDataStartRowBFE: [74,219,74,219,74,219,74,219,74,219], // donde esta la primera clave de bda
    defaultTotalRows: [1,1,1,1,1,1,1,1,1,1], /// catidad de filas
    defaultRowGap: [0,2,0,2,0,2,0,2,0,0], //si hay que saltarse algo en la plantilla (fila vacia)
    sourceWorkbook1Sheets: ['Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','G','D','G','D','G','D','G','D','G'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F','F','F','F','F','F'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [105,694,105,694,105,694,105,694,105,694], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [154,315,154,315,154,315,154,315,154,315], //rango de filas en que va a buscar
    destinationColumns: [
        // los fixedCell : 'B{45}, van entre llaver porque aumenta en 1 cada region'
        [
            // sec1 -> primera fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec2 -> segunda fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec3 -> tercera fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'L{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'M{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec4 -> cuarta fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'L{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'M{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec5 -> quinta fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'N{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'O{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'P{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec6 -> sexta fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'N{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'O{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'P{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec7 -> septima fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'Q{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'R{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'S{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec8 -> octava fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'Q{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'R{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'S{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec9 -> novena fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec10 -> decima fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],

    ],
}