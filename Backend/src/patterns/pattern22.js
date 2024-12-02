module.exports = {
    name: 'Pattern22',
    sheetIndex: 22,
    primaryKeySheetIndex: 22, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 126,
    basePrimaryKeyStartRow: 126,
    startRowIncrement: 38,
    primaryKeyStartRowIncrement: 38,
    names: ['X','Y','Z','W','A'], //no se que es
    baseDataStartRowBDA: [2,2,2,2,2], // donde esta la primera clave de bda
    baseDataStartRowBFE: [157,157,157,157,157], // donde esta la primera clave de bda
    defaultRowGap: [2,2,2,2,2], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [2,1,1,1,1], /// catidad de filas a llenar
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['DOM ','DOM ','DOM ','DOM ','DOM '], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F'], //columna de donde esta el año bfe
    useDirectRange: [false,false,false,false,false], // la usa para el workbookBF cuando itera de 1 en 1
    specialRowIndex: [null,null,null,null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [681,681,681,681,681], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [174,174,174,174,174], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'customWorkbookBFE', destinationColumn:'E',searchColumn: 'C',sourceSheetName: 'DOM ',extractColumnBase: 'F',dataStartRow: 157,fixedRangePKbool: true,specialRangePK: 174,},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0,specialCondition:true },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1,specialCondition:true },
            { operationName: 'formula', destinationColumn: 'H', formula: ' =(D{row}*(F{row}-E{row})/G{row})' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000' },

        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'customWorkbookBFE', destinationColumn:'E',searchColumn: 'C',sourceSheetName: 'DOM ',extractColumnBase: 'F',dataStartRow: 157,fixedRangePKbool: true,specialRangePK: 174,},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1},
            { operationName: 'formula', destinationColumn: 'H', formula: ' =(D{row}*(F{row}-E{row})/G{row})' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}' },
        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'customWorkbookBFE', destinationColumn:'E',searchColumn: 'C',sourceSheetName: 'DOM ',extractColumnBase: 'F',dataStartRow: 157,fixedRangePKbool: true,specialRangePK: 174,},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1},
            { operationName: 'formula', destinationColumn: 'H', formula: ' =(D{row}*(F{row}-E{row})/G{row})' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}' },
        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'customWorkbookBFE', destinationColumn:'E',searchColumn: 'C',sourceSheetName: 'DOM ',extractColumnBase: 'F',dataStartRow: 157,fixedRangePKbool: true,specialRangePK: 174,},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0 },
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1},
            { operationName: 'formula', destinationColumn: 'H', formula: ' =(D{row}*(F{row}-E{row})/G{row})' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}'},
        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'customWorkbookBFE', destinationColumn:'E',searchColumn: 'C',sourceSheetName: 'DOM ',extractColumnBase: 'F',dataStartRow: 157,fixedRangePKbool: true,specialRangePK: 174,},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 1},
            { operationName: 'formula', destinationColumn: 'H', formula: ' =(D{row}*(F{row}-E{row})/G{row})' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*(F{row}-E{row})/G{row}' },
        ]
    ],
}