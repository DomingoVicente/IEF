// Backend/src/middelware/multerConfig.js
const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento de multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'storage/');  // Carpeta donde se guardarán los archivos subidos
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);  // Mantener el nombre original del archivo
    }    
});

// Filtro para asegurar que solo se suban archivos Excel (.xlsx)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        cb(null, true);  // Archivo permitido
    } else {
        cb(new Error('Solo se permiten archivos Excel (.xlsx)'), false);  // Rechaza el archivo
    }
};

// Configuración de multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }  // Tamaño máximo de 5MB para evitar archivos grandes
});

module.exports = upload;
