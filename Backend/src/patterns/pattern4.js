module.exports = {
    name: 'Pattern4',
    sheetIndex: 4,
    primaryKeySheetIndex: 4, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'L', // Columna para llaves primarias
    baseStartRow: 78,
    basePrimaryKeyStartRow: 78,
    startRowIncrement: 21,
    primaryKeyStartRowIncrement: 21,
    names: ['T','Z','G','H'], // division de tabla 
    baseDataStartRowBDA: [6,6,6,6], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [22,22,22,22], //salto de claves bda
    baseDataStartRowBFE: [6,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [20,20,20,20], //salto de claves bda
    defaultRowGap: [1,0,0,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Incendios','Incendios','Incendios','Incendios'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa PF Incendiada','Biomasa PF Incendiada','Biomasa PF Incendiada'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['E','D','D','D'], //columna de donde esta el año bfe
    useDirectRange: [false,false,false,false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null,null,null,null], //donde empieza a iterar BFE
    directRangeEnd: [null,null,null,null], //donde termina de iterar BFE
    specialRowIndex: [null,null,null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [234,234,234,234], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [262,58,58,58], //rango de filas en que va a buscar

    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Biomasa Stock_BN', fixedCell: 'E{6}', },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21' },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*E{row}*(1+F{row})*G{row} * {DiagramaflugoBincendiosL30})*-1'}, //aqui no es factoremision sino DiagramaflugoBincendiosL30 arreglar despues, tambien falta el buscarv
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell:'C22'},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*E{row}*(1+F{row})*G{row} * {DiagramaflugoBincendiosL30})*-1'}, //aqui no es factoremision sino DiagramaflugoBincendiosL30 arreglar despues tambien falta el buscarv
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'}
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C23' },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*E{row}*(1+F{row})*G{row} * {DiagramaflugoBincendiosC34})*-1'}, //aqui no es factoremision sino DiagramaflugoBincendiosL30 arreglar despues tambien falta el buscarv
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'}
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C25' },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*E{row}*(1+F{row})*G{row} * {DiagramaflugoBincendiosF30})*-1'}, //aqui no es factoremision sino DiagramaflugoBincendiosL30 arreglar despues tambien falta el buscarv
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'}
        ],
    ],
}