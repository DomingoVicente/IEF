const fs = require('fs');
const path = require('path');

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se ha subido ningún archivo');
    }
    res.send(`Archivo ${req.file.filename} subido con éxito`);
};

exports.listFiles = (req, res) => {
    fs.readdir('storage/', (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el directorio' });
        }
        const fileList = files.filter(file => fs.statSync(path.join('storage/', file)).isFile());
        res.json({ files: fileList });
    });
};