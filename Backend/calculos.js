// Backend - api/generateTemplate.js
const express = require('express');
const XlsxPopulate = require('xlsx-populate');
const path = require('path');

const app = express();

app.get('/api/generate-template', async (req, res) => {
  try {
    // Cargar el archivo de plantilla
    const templatePath = path.resolve(__dirname, 'Intento.xlsx');
    const workbook = await XlsxPopulate.fromFileAsync(templatePath);

    // Ejemplo de cómo modificar celdas específicas
    workbook.sheet(0).cell('A1').value('Nuevo Valor');  // Modificar una celda específica
    // Agregar más modificaciones según sea necesario...

    // Configurar respuesta como archivo descargable
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=plantilla_generada.xlsx'
    );
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    // Enviar el archivo modificado como respuesta
    workbook.outputAsync().then((data) => {
      res.send(data);
    });
  } catch (error) {
    console.error('Error al generar la plantilla:', error);
    res.status(500).send('Error al generar la plantilla');
  }
});

app.listen(4009, () => console.log('Server running on port 4009'));
