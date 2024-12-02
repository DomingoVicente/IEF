const fs = require('fs');
const path = require('path');

function loadSectionPatterns(directory, specificFile = null) {
    const patterns = [];
    
    // Si se especifica un archivo, intenta cargar solo ese archivo.
    if (specificFile) {
        const filePath = path.join(directory, specificFile);
        console.log('Intentando cargar archivo específico:', filePath);
        try {
            if (fs.existsSync(filePath) && filePath.endsWith('.js')) {
                const pattern = require(filePath);
                patterns.push(pattern);
            } else {
                console.error(`El archivo específico ${specificFile} no existe o no es un archivo .js`);
            }
        } catch (error) {
            console.error(`Error al cargar el archivo ${filePath}:`, error.message);
        }
    } else {
        // Si no se especifica archivo, carga todos los archivos .js en el directorio.
        const files = fs.readdirSync(directory);
        console.log("Cargando todos los archivos desde:", directory);
        files.forEach(file => {
            if (file.endsWith('.js')) {
                const filePath = path.join(directory, file);
                console.log('Cargando archivo:', filePath);
                try {
                    const pattern = require(filePath); // Intenta cargar el archivo
                    patterns.push(pattern);
                } catch (error) {
                    console.error(`Error al cargar el archivo ${filePath}:`, error.message);
                }
            }
        });
    }

    return patterns;
}

module.exports = {
    loadSectionPatterns,
};
