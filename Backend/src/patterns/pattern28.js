module.exports = {
    name: 'Pattern28',
    sheetIndex: 28,
    primaryKeySheetIndex: 28, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'O', // Columna para llaves primarias
    baseStartRow: 74,
    basePrimaryKeyStartRow: 75,
    startRowIncrement: 30,
    primaryKeyStartRowIncrement: 30,
    names: ['X','Y'], //no se que es
    baseDataStartRowBDA: [23,23], // donde esta la primera clave de bda
    baseDataStartRowBFE: [24,24], // donde esta la primera clave de bda
    defaultRowGap: [0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [4,4], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie Incendio GL','Superficie Incendio GL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Stock_Otras Tierras','Stock_Otras Tierras'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D','D'], //columna de donde esta el año bfe
    useDirectRange: [false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null,null], //donde empieza a iterar
    directRangeEnd: [null,null], //donde termina de iterar
    specialRowIndex: [null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [60,60], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true],
    specialRangePKBFE: [5,5], // para buscar en un range especifico en caso de que las claves no sean seguidas
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'B36'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E7'},
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B15', 'B16','B17','B18'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' }
            //{ operationName: 'formula', destinationColumn: 'K', formula: '=(J{row} * {factorEmisionB12})/1000', isSummed: true, condicion: true },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'E{16}'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión No-CO2', fixedCell: 'E8'},
            { operationName: 'custom', destinationColumn: 'H', sourceSheetName: 'Factores emisión No-CO2', cellsToExtract: ['B15', 'B16','B17','B18'] },
            { operationName: 'formula-diagonal', destinationColumn: 'I', formula: '=(D{row}*E{row}*F{row}*H{row})/1000' }
            //{ operationName: 'formula', destinationColumn: 'K', formula: '=(J{row} * {factorEmisionB12})/1000', isSummed: true, condicion: true },
        ]
    ],
}