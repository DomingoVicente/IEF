module.exports = {
    name: 'Pattern21',
    sheetIndex: 21,
    primaryKeySheetIndex: 21, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 124,
    basePrimaryKeyStartRow: 124,
    startRowIncrement: 37,
    primaryKeyStartRowIncrement: 37,
    names: ['X','Y','Z','W','A'], //no se que es
    baseDataStartRowBDA: [2,2,2,2,2], // donde esta la primera clave de bda
    baseDataStartRowBFE: [102,102,102,102,102], // donde esta la primera clave de bda
    defaultRowGap: [2,2,2,2,2], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [2,1,1,1,1], /// catidad de filas a llenar
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D','D','D','D','D'], //columna de donde esta el año bfe
    useDirectRange: [false,false,false,false,false], // la usa para el workbookBF cuando itera de 1 en 1
    specialRowIndex: [null,null,null,null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [943,943,943,943,943], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [140,140,140,140,140], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn:'E'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'G{16}'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'J31'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'M31'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'P31'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ]
    ],
}