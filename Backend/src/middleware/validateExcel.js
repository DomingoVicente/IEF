const XLSXPopulate = require('xlsx-populate');

const requiredSheets = {
    BDA: [
        "Renovales", "SNASPE", "BN_Manejado", "PF_PF", "Cosecha_trozas", "Leña", "Incendios",
        "Tierras FP_BN", "Tierras_transición_PF", "BN convertido a PF", "Quemas", "Tierrastransicion  a BN_Biomasa",
        "Tierratransicion-BN_DOM-Suelo", "Tierras convertidas_año a BN", "Tierras convertidas a FP",
        "PF_Sup_total", "Superficie_CL_perennes", "Superf_Incendios_CL", "Superficie_ Tierras convert CL",
        "Superf_transicion_CL", "Superficie Incendio GL", "Superficie_ Tierras convert GL", "Superf_transicion_GL",
        "Superficie_ Tierras convert WL","Superficie_ Tierras convert SL", "Superf_transicion_SL","Superficie_ Tierras convert OL",
        "HWP_Data"],
    BFE: ["Incremento Bosques Naturales", "Incr_RENOVAL_ponderado", "Incr_SNASPE_ponderado",
    "Biomasa PF Incendiada", "IMA_PF_ponderado", "Biomasa Stock_BN", "DOM ", "Increm_Biom_ConversionBN_ponder",
    "Factores expansión_bosques", "Biomasa_quema_residuos_forest", "Incremento plantaciones ", "Stock_Otras Tierras",
    "Carbono del suelo", "Densidad básica", "Rotación", "Factores emisión", "Factores emisión No-CO2",
    "Diagrama flujo B plantaciones", "Diagrama flujo B bosque nativo", "Diagrama flugo B incendios",
    "Biomasa_CL_Perenne"]
};
'Nombre3', 'Nombre4'
const validateExcel = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No se ha subido ningún archivo" });
        }

        const fileType = req.body.fileType;
        if (!fileType || !requiredSheets[fileType]) {
            return res.status(400).json({ error: "Tipo de archivo no válido" });
        }

        const sheetsToCheck = requiredSheets[fileType]; // Verificar solo las hojas del tipo específico
        const workbook = await XLSXPopulate.fromFileAsync(req.file.path);
        const sheetNames = workbook.sheets().map(sheet => sheet.name());

        const missingSheets = sheetsToCheck.filter(sheet => !sheetNames.includes(sheet));

        if (missingSheets.length > 0) {
            console.log(`Faltan las siguientes hojas en el archivo ${fileType}: ${missingSheets.join(", ")}`);
            return res.status(400).json({
                error: `El archivo no contiene las hojas requeridas: ${missingSheets.join(", ")}`
            });
        }

        next(); // Pasar al siguiente middleware si todas las hojas requeridas están presentes

    } catch (error) {
        console.error("Error al validar el archivo Excel:", error);
        res.status(500).json({ error: "Error al procesar el archivo Excel" });
    }
};

module.exports = validateExcel;
