module.exports = {
    name: 'Pattern23',
    sheetIndex: 23,
    primaryKeySheetIndex: 23, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'Q', // Columna para llaves primarias
    baseStartRow: 141,
    basePrimaryKeyStartRow: 141,
    startRowIncrement: 40,
    primaryKeyStartRowIncrement: 40,
    names: ['B','X','Y','Z','W','A'], //no se que es
    baseDataStartRowBDA: [1,1,1,1,1,1], // donde esta la primera clave de bda
    baseDataStartRowBFE: [157,157,157,157,157,157], // donde esta la primera clave de bda
    defaultRowGap: [0,1,2,2,2,2], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,2,1,1,1,1], /// catidad de filas a llenar
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F','F'], //columna de donde esta el año bfe
    useDirectRange: [false,false,false,false,false,false], // la usa para el workbookBF cuando itera de 1 en 1
    specialRowIndex: [null,null,null,null,null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [682,682,682,682,682,682], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [174,174,174,174,174,174], //rango de filas en que va a buscar
    destinationColumns: [
        [{ operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'},
            { operationName: 'fixed', destinationColumn: 'H' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'},
            { operationName: 'fixed', destinationColumn: 'I' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'},
            { operationName: 'fixed', destinationColumn: 'J' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'B85'},
            { operationName: 'fixed', destinationColumn: 'K' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'C45'},
            { operationName: 'fixed', destinationColumn: 'L' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'D45'},
            { operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}' },
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000' },
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'},
            { operationName: 'fixed', destinationColumn: 'H' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'},
            { operationName: 'fixed', destinationColumn: 'I' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'},
            { operationName: 'fixed', destinationColumn: 'J' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'B86'},
            { operationName: 'fixed', destinationColumn: 'K' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'C46'},
            { operationName: 'fixed', destinationColumn: 'L' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'D46'},
            { operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}' },
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000' },

        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'},
            { operationName: 'fixed', destinationColumn: 'H' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'},
            { operationName: 'fixed', destinationColumn: 'I' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'},
            { operationName: 'fixed', destinationColumn: 'J' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'B87'},
            { operationName: 'fixed', destinationColumn: 'K' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'C47'},
            { operationName: 'fixed', destinationColumn: 'L' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'D47'},
            { operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}' },
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000' },
        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'},
            { operationName: 'fixed', destinationColumn: 'H' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'},
            { operationName: 'fixed', destinationColumn: 'I' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'},
            { operationName: 'fixed', destinationColumn: 'J' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'N{45}'},
            { operationName: 'fixed', destinationColumn: 'K' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'O{45}'},
            { operationName: 'fixed', destinationColumn: 'L' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'P{45}'},
            { operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}' },
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000' },
        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'},
            { operationName: 'fixed', destinationColumn: 'H' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'},
            { operationName: 'fixed', destinationColumn: 'I' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'},
            { operationName: 'fixed', destinationColumn: 'J' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'B88'},
            { operationName: 'fixed', destinationColumn: 'K' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'C88'},
            { operationName: 'fixed', destinationColumn: 'L' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'D88'},
            { operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}' },
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000' },
        ],[
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'},
            { operationName: 'fixed', destinationColumn: 'H' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'},
            { operationName: 'fixed', destinationColumn: 'I' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'},
            { operationName: 'fixed', destinationColumn: 'J' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}'},
            { operationName: 'fixed', destinationColumn: 'K' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}'},
            { operationName: 'fixed', destinationColumn: 'L' ,sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}'},
            { operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}' },
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000' },
        ]
    ],
}