module.exports = {
    name: 'Pattern6',
    sheetIndex: 6,
    primaryKeySheetIndex: 6, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'L', // Columna para llaves primarias
    baseStartRow: 65,
    basePrimaryKeyStartRow: 65,
    startRowIncrement: 17,
    primaryKeyStartRowIncrement: 17,
    names: ['sec1','sec2'], // division de tabla 
    baseDataStartRowBDA: [5,3], // donde esta la primera clave de bda
    baseDataStartRowBFE: [6,82], // donde esta la primera clave de bda
    defaultRowGap: [1], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Tierras FP_BN','BN convertido a PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa Stock_BN'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','F'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['G','G'], //columna de donde esta el año bfe
    useDirectRange: [false,false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null,null], //donde empieza a iterar BFE
    directRangeEnd: [null,null], //donde termina de iterar BFE
    specialRowIndex: [null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [22,20], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [false,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [0,97], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'F' },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'}, 
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
    ],
}