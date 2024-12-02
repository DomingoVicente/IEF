// Frontend/src/components/Home/MainPage.jsx
import React, { useState, useEffect } from 'react';
import FileUploadSection from '../uploadFile/FileUploadSection';
import FileTable from '../uploadFile/FileTable';

export default function MainPage() {
  const [fileHistory, setFileHistory] = useState([]);
  // Estados para almacenar los archivos seleccionados
  const [selectedBDA, setSelectedBDA] = useState(null);
  const [selectedBFE, setSelectedBFE] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    fetchFilesFromServer();
  }, []);

  const fetchFilesFromServer = async () => {
    try {
      const response = await fetch('http://localhost:4009/api/files');
      const data = await response.json();
      setFileHistory(
        data.files.map((file, index) => ({
          id: index,
          name: file,
          type: file.includes('BDA') ? 'BDA' : 'BFE',
          date: new Date().toISOString().split('T')[0],
        }))
      );
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleDeleteFile = async (id) => {
    const fileToDelete = fileHistory.find((file) => file.id === id);
    if (fileToDelete) {
      try {
        const response = await fetch(
          `http://localhost:4009/api/delete/${fileToDelete.name}`,
          {
            method: 'DELETE',
          }
        );

        if (response.ok) {
          console.log('Archivo eliminado con éxito');
          setFileHistory((prev) =>
            prev.filter((file) => file.id !== id)
          );
        } else {
          console.error('Error al eliminar el archivo');
        }
      } catch (error) {
        console.error('Error en la conexión con el servidor:', error);
      }
    }
  };

  const handleDownloadFile = (fileName) => {
    console.log(`Descargando archivo: ${fileName}`);
    window.open(
      `http://localhost:4009/api/download/${fileName}`,
      '_blank'
    );
  };

  // Función para manejar el evento del botón de generar cálculos
  const handleGenerateCalculations = async () => {
    if (!selectedBDA || !selectedBFE) {
      alert('Por favor selecciona ambos archivos BDA y BFE antes de generar cálculos.');
      return;
    }

    setIsGenerating(true); // Iniciar indicador de carga

    try {
      const response = await fetch('http://localhost:4009/api/generate-template', {
        method: 'POST', // Cambiado de GET a POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileBDA: selectedBDA,
          fileBFE: selectedBFE,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resultado_operaciones.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        fetchFilesFromServer();
      } else {
        const errorText = await response.text();
        alert(`Error al generar los cálculos: ${errorText}`);
      }
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
      alert('Error en la conexión con el servidor.');
    } finally {
    setIsGenerating(false); // Finalizar indicador de carga
  }
  };

  return (
      <div className="min-h-screen bg-login">
        <main className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-wrap md:flex-nowrap gap-6">
              {/* Sección de carga de archivos - ahora más ancha */}
              <div className="w-full md:w-7/10">
                <FileUploadSection
                  title="Archivo BDA"
                  fileType="BDA"
                  fetchFilesFromServer={fetchFilesFromServer}
                  onFileSelect={(file) => setSelectedBDA(file)}
                />
                <FileUploadSection
                  title="Archivo BFE"
                  fileType="BFE"
                  fetchFilesFromServer={fetchFilesFromServer}
                  onFileSelect={(file) => setSelectedBFE(file)}
                />
                {/* Botón de generar cálculos */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleGenerateCalculations}
                    disabled={isGenerating}
                    className="bg-[#2F4F4F] text-[#F0EAD6] px-8 py-3 font-semibold rounded-md shadow-sm hover:bg-[#3D6F6F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F4F4F] w-full max-w-md"
                  >
                    {isGenerating ? 'Generando...' : 'Generar Cálculos'}
                  </button>
                </div>
              </div>
  
              {/* Tabla de archivos - ahora más ancha */}
              <div className="w-full md:w-3/10">
                <FileTable 
                  fileHistory={fileHistory} 
                  handleDownloadFile={handleDownloadFile} 
                  handleDeleteFile={handleDeleteFile} 
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}