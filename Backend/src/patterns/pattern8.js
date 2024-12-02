module.exports = {
    name: 'Pattern8',
    sheetIndex: 8,
    primaryKeySheetIndex: 8, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'Q', // Columna para llaves primarias
    baseStartRow: 61,
    basePrimaryKeyStartRow: 61,
    startRowIncrement: 16,
    primaryKeyStartRowIncrement: 16,
    names: ['sec1','sec2'], // division de tabla 
    baseDataStartRowBDA: [33,599], // donde esta la primera clave de bda
    baseDataStartRowBFE: [6,82], // donde esta la primera clave de bda
    defaultRowGap: [1], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Tierras FP_BN','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Carbono del suelo','Carbono del suelo'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','G'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['G','G'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [51,694], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20 },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B45' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C45' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D45' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'E45' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'F45' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'G45' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'}, 
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20 },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E45' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F45' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G45' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'B45' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'C45' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'D45' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'}, 
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
    ],
}