module.exports = {
    name: 'Pattern41',
    sheetIndex: 41,
    primaryKeySheetIndex: 41, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 125,
    basePrimaryKeyStartRow: 125,
    startRowIncrement: 37,// -> aki voy
    primaryKeyStartRowIncrement: 37,
    names: ['A', 'B', 'C', 'D', 'E'], //no se que es
    baseDataStartRowBDA: [3,3,3,3,3], // donde esta la primera clave de bda
    baseDataStartRowBFE: [225,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21], //salto de claves bda
    defaultRowGap: [2,2,2,2,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [2,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert SL', 'Superficie_ Tierras convert SL', 'Superficie_ Tierras convert SL', 'Superficie_ Tierras convert SL', 'Superficie_ Tierras convert SL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D', 'X', 'X', 'X', 'X'], //columna de donde esta el año bfe
    useDirectRange: [false, false, false, false, false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null, null, null, null], //donde empieza a iterar
    directRangeEnd: [null, null, null, null, null], //donde termina de iterar
    specialRowIndex: [null, null, null, null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true, true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680, 680,680,680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true, true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [262, 680,680,680,680], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition: true},
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'formula', destinationColumn: 'F', formula: '={factorEmisionB5}', specialCondition:true },
            { operationName: 'formula', destinationColumn: 'G', formula: '={otrasTierrasF9}*{factorEmisionB6}', specialCondition: true},
            { operationName: 'formula', destinationColumn: 'H', formula: '={otrasTierrasG9}*{factorEmisionB6}', specialCondition: true},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}', specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', specialCondition: true},             
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula-dornersito', destinationColumn: 'E', formula: '=({D})'},
            { operationName: 'formula', destinationColumn: 'F', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={otrasTierrasF9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '={otrasTierrasG9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'}, 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula-dornersito', destinationColumn: 'E', formula: '=({G})'},
            { operationName: 'formula', destinationColumn: 'F', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={otrasTierrasF9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '={otrasTierrasG9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'}, 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula-dornersito', destinationColumn: 'E', formula: '=({J})'},
            { operationName: 'formula', destinationColumn: 'F', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={otrasTierrasF9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '={otrasTierrasG9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'}, 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula-dornersito', destinationColumn: 'E', formula: '=({P})'},
            { operationName: 'formula', destinationColumn: 'F', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={otrasTierrasF9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '={otrasTierrasG9}*{factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'}, 
        ]
    ],
}