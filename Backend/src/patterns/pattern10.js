//Backend/patterns/pattern10.js
module.exports = {
    name: 'Pattern10',
    sheetIndex: 10,
    primaryKeySheetIndex: 10, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'O', // Columna para llaves primarias
    baseStartRow: 100,
    basePrimaryKeyStartRow: 100,
    startRowIncrement: 45,
    primaryKeyStartRowIncrement: 45,
    names: ['sec1','sec2','sec3','sec4','sec5','sec6'], // division de tabla 
    baseDataStartRowBDA: [4,69,69,69,216,86], // donde esta la primera clave de bda
    baseDataStartRowBFE: [0,41,41,41,2,2], // donde esta la primera clave de bda
    defaultTotalRows: [4,4,4,4,4,4], /// catidad de filas
    sourceWorkbook1Sheets: ['Incendios','Incendios','Incendios','Incendios','Incendios','Quemas'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa PF Incendiada','Biomasa PF Incendiada','Biomasa PF Incendiada', 'Biomasa_quema_residuos_forest','Biomasa_quema_residuos_forest'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D','D','D','D','D','D'], //columna de donde esta el año bfe
    useDirectRange: [true,false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [5], //donde empieza a iterar BFE
    directRangeEnd: [8], //donde termina de iterar BFE
    fixedRangePKboolBDA: [true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [22,129,129,129,234,103], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [false,false,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [0,98,98,98,19,19], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Biomasa Stock_BN', fixedCell: 'E6' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E5' },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            {
                operationName: 'customWorkbookBFE',
                destinationColumn: 'F',
                sourceSheetName: 'Factores emisión No-CO2',
                extractColumnBase: 'D',
                dataStartRow: 33,
                fixedRangePKbool: true,
                specialRangePK: 50,
            },

            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E17' },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E5' },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E5' },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E5' },
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B5', 'B6', 'B7', 'B8'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' },
        ],
    ],
}