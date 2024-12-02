module.exports = {
    name: 'Pattern29',
    sheetIndex: 29,
    primaryKeySheetIndex: 29, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'O', // Columna para llaves primarias
    baseStartRow: 125,
    basePrimaryKeyStartRow: 125,
    startRowIncrement: 37,
    primaryKeyStartRowIncrement: 37,
    names: ['sec1','sec2','sec3','sec4','sec5'], // division de tabla 
    baseDataStartRowBDA: [3,3,3,3,3], // donde esta la primera clave de bda
    baseDataStartRowBFE: [145,145,145,145,145], // donde esta la primera clave de bda
    defaultRowGap: [2,2,2,2,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [2,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL','Superficie_ Tierras convert GL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D','D','D','D','D'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680,680,680,680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [181,181,181,181,181], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'E', specialCondition: true}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'G' },
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'K', formula: '=I{row}+((F{row}-G{row})*E{row})*H{row}-J{row}',specialCondition: true}, 
            { operationName: 'formula', destinationColumn: 'L', formula: '=(K{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'E'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'D16' },
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B6' },
            { operationName: 'formula', destinationColumn: 'K', formula: '=I{row}+((F{row}-G{row})*E{row})*H{row}-J{row}'}, 
            { operationName: 'formula', destinationColumn: 'L', formula: '=(K{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'E'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'J16' },
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B6' },
            { operationName: 'formula', destinationColumn: 'K', formula: '=I{row}+((F{row}-G{row})*E{row})*H{row}-J{row}'}, 
            { operationName: 'formula', destinationColumn: 'L', formula: '=(K{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'E'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'M16' },
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B6' },
            { operationName: 'formula', destinationColumn: 'K', formula: '=I{row}+((F{row}-G{row})*E{row})*H{row}-J{row}'}, 
            { operationName: 'formula', destinationColumn: 'L', formula: '=(K{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'E'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'P16' },
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B6' },
            { operationName: 'formula', destinationColumn: 'K', formula: '=I{row}+((F{row}-G{row})*E{row})*H{row}-J{row}'}, 
            { operationName: 'formula', destinationColumn: 'L', formula: '=(K{row} * {factorEmisionB12})/1000'},
        ]
    ],
}