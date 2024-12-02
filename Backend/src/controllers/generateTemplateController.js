const { generateTemplateService } = require('../services/templateService');

exports.generateTemplate = async (req, res) => {
    try {
        const { fileBDA, fileBFE } = req.body;

        if (!fileBDA || !fileBFE) {
            return res.status(400).send('Se deben proporcionar los nombres de los archivos BDA y BFE.');
        }

        const outputPath = await generateTemplateService(fileBDA, fileBFE);

        res.download(outputPath, 'resultado_operaciones.xlsx', (err) => {
            if (err) {
                console.error('Error al descargar el archivo:', err);
                res.status(500).send('Error al descargar el archivo');
            } else {
                console.log('Archivo descargado exitosamente.');
            }
        });

    } catch (error) {
        res.status(500).send('Error al generar la plantilla');
    }
};
