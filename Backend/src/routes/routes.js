const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig');
const validateExcel = require('../middleware/validateExcel'); 
const { uploadFile, listFiles } = require('../controllers/uploadController');
const { generateTemplate } = require('../controllers/generateTemplateController');

// Rutas para subir archivos
router.post('/upload', upload.single('file'), validateExcel, uploadFile);
router.get('/files', listFiles);

// Ruta para generar la plantilla
router.post('/generate-template', generateTemplate);

module.exports = router;
