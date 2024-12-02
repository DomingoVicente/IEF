module.exports = {
    name: 'Pattern5',
    sheetIndex: 5,
    primaryKeySheetIndex: 5, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 71,
    basePrimaryKeyStartRow: 71,
    startRowIncrement: 20,
    primaryKeyStartRowIncrement: 20,
    names: ['sec1','sec2'], // division de tabla 
    baseDataStartRowBDA: [35,428], // donde esta la primera clave de bda
    baseDataStartRowBFE: [6,3], // donde esta la primera clave de bda
    defaultRowGap: [1,2], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,4], /// catidad de filas
    sourceWorkbook1Sheets: ['Tierras FP_BN','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['IMA_PF_ponderado','IMA_PF_ponderado'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','I'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['G','G'], //columna de donde esta el año bfe
    useDirectRange: [false,false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null,null], //donde empieza a iterar BFE
    directRangeEnd: [null,null], //donde termina de iterar BFE
    specialRowIndex: [null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [52,513], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [false,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [0,83], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed:true }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21' },
            { operationName: 'formula', destinationColumn: 'G', formula: '=(E{row}*(1+F{row}))'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=(D{row}*G{row}*H{row})', isSummed: true}, 
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', isSummed:true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true, isSummed:true }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'N' },
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22','C23','C25','C21']  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=(E{row}*(1+F{row}))'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=(D{row}*G{row}*H{row})', isSummed:true}, 
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition:true,isSummed:true },
        ],
    ],
}