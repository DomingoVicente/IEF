// pattern2.js

module.exports = {
    name: 'Pattern2',
    sheetIndex: 2,
    primaryKeySheetIndex: 2, // Índice de la hoja para llaves primarias
    primaryKeyColumn: 'L', // Columna para llaves primarias
    baseStartRow: 74,
    basePrimaryKeyStartRow: 74,
    startRowIncrement: 20,
    primaryKeyStartRowIncrement: 20,
    names: ['Y'],
    baseDataStartRowBDA: [4],
    defaultRowGap: [0],
    defaultTotalRows: [4],
    sourceWorkbook1Sheets: ['Cosecha_trozas'],
    sourceWorkbook2Sheets: ['Factores expansión_bosques'],
    sourceExtractColumns1Base: ['D'],
    sourceExtractColumns2Base: ['D'],
    useDirectRange: [true],
    directRangeStart: ['F5'],
    directRangeEnd: ['F8'],
    specialRowIndex: [null],
    specialRowIndexIncrement: [0],
    fixedRangePKboolBDA: [true],
    specialRangePKBDA: [79],
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: true, condicion: false },
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22', 'C23', 'C25', 'C21'] },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*E{row}*(1+F{row})*G{row})*-1', isSummed: true , condicion: true},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000', isSummed: true, condicion: true },
        ],
    ],
}