// Frontend/src/components/uploadFile/FileUploadSection.js
import React, { useState, useEffect } from 'react';
import { Upload, Trash2, Download } from 'lucide-react';

const FileUploadSection = ({
  title,
  fileType,
  fetchFilesFromServer,
  onFileSelect, // Nueva prop para notificar al componente padre
}) => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [filesList, setFilesList] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (
      droppedFile &&
      droppedFile.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      setFile(droppedFile);
      setUploaded(false);
      setMessage('');
      setIsError(false);
      if (onFileSelect) {
        onFileSelect(null); // Limpiar selección si se carga un nuevo archivo
      }
    } else {
      setMessage('Solo se permiten archivos Excel (.xlsx)');
      setIsError(true);
    }
  };

  const handleFileInput = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploaded(false);
      setMessage('');
      setIsError(false);
      if (onFileSelect) {
        onFileSelect(null); // Limpiar selección si se carga un nuevo archivo
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Por favor selecciona un archivo');
      setIsError(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileType', fileType); // Agregar el tipo de archivo al formulario

    try {
      const response = await fetch('http://localhost:4009/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        setMessage(result); // Mensaje de éxito
        setIsError(false);
        setUploaded(true);
        fetchFilesFromServer(); // Actualizar la lista de archivos después de subir
        if (onFileSelect) {
          onFileSelect(file.name); // Notificar al componente padre del nuevo archivo subido
        }
      } else {
        const errorText = await response.text();
        setMessage(errorText || 'Error al subir el archivo');
        setIsError(true);
      }
    } catch (error) {
      setMessage('Error en la conexión con el servidor');
      setIsError(true);
    }
  };

  const handleDelete = async () => {
    if (!file || !file.name) {
      setMessage('No hay archivo para eliminar');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4009/api/delete/${encodeURIComponent(file.name)}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        setMessage('Archivo eliminado con éxito');
        setIsError(false);
        setFile(null);
        setUploaded(false);
        fetchFilesFromServer(); // Actualizar la lista de archivos después de eliminar
        if (onFileSelect) {
          onFileSelect(null); // Notificar al componente padre que no hay archivo seleccionado
        }
      } else {
        const errorText = await response.text();
        setMessage(errorText || 'Error al eliminar el archivo');
        setIsError(true);
      }
    } catch (error) {
      setMessage('Error en la conexión con el servidor');
      setIsError(true);
    }
  };

  const handleDownload = () => {
    if (file && file.name) {
      window.open(
        `http://localhost:4009/api/download/${encodeURIComponent(file.name)}`,
        '_blank'
      );
    } else {
      setMessage('No hay archivo para descargar');
      setIsError(true);
    }
  };

  // Obtener la lista de archivos para el desplegable
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('http://localhost:4009/api/files');
        const data = await response.json();
        setFilesList(data.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  // Filtrar archivos según el tipo
  const filteredFilesList = filesList.filter((filename) =>
    filename.includes(fileType)
  );

  return (
    <div
      className="bg-[#F0EAD6] rounded-lg shadow-md overflow-hidden mb-6"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="bg-[#C1E1C1] p-4">
        <h2 className="text-lg font-semibold text-[#2F4F4F]">{title}</h2>
      </div>
      <div className="p-6 border-2 border-dashed border-[#C1E1C1] rounded-b-lg">
        {uploaded ? (
          <div className="flex justify-between items-center bg-cream rounded-xl p-2">
            <p className="font-semibold truncate flex-grow pr-2">
              {file.name}
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDelete}
                className="text-[#2F4F4F] hover:text-[#3D6F6F]"
                title="Eliminar"
              >
                <Trash2 className="h-5 w-5" />
                <span className="sr-only">Eliminar</span>
              </button>
              <button
                onClick={handleDownload}
                className="text-[#2F4F4F] hover:text-[#3D6F6F]"
                title="Descargar"
              >
                <Download className="h-5 w-5" />
                <span className="sr-only">Descargar</span>
              </button>
            </div>
          </div>
        ) : file ? (
          <div className="flex flex-col items-center justify-center pb-2">
            <p className="bg-cream font-semibold rounded-xl pl-4 pr-4">
              Archivo: {file.name}
            </p>
            <button onClick={handleUpload} className="text-black pt-2">
              <p className="pl-2 pr-2 bg-cream font-semibold rounded-xl">
                Subir
              </p>
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-[#2F4F4F]" />
            <p className="mt-1 text-sm text-[#2F4F4F]">
              Arrastra y suelta tu archivo aquí, o
            </p>
            <label
              htmlFor={`file-input-${fileType}`}
              className="mt-2 cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[#F0EAD6] bg-[#2F4F4F] hover:bg-[#3D6F6F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F4F4F]"
            >
              <span>Seleccionar archivo</span>
              <input
                id={`file-input-${fileType}`}
                name={`file-input-${fileType}`}
                type="file"
                className="sr-only"
                accept=".xlsx"
                onChange={handleFileInput}
              />
            </label>
          </div>
        )}
        {message && (
          <p
            className={`mt-2 text-sm ${
              isError ? 'text-red-500' : 'text-black'
            }`}
          >
            {message}
          </p>
        )}
      </div>
      <div className="bg-gradient-to-r from-[#C1E1C1] to-[#A3C1A3] px-4 py-3 sm:px-6 rounded-lg">
        <select
          onChange={(e) => {
            const selectedFilename = e.target.value;
            if (selectedFilename) {
              const selectedFile = { name: selectedFilename };
              setFile(selectedFile);
              setUploaded(true);
              if (onFileSelect) {
                onFileSelect(selectedFilename); // Notificar al componente padre
              }
            } else {
              setFile(null);
              setUploaded(false);
              if (onFileSelect) {
                onFileSelect(null); // Notificar al componente padre
              }
            }
          }}
          className="w-full max-w-md mx-auto block pl-3 pr-10 py-2 text-base border-0 focus:outline-none focus:ring-2 focus:ring-[#C1E1C1] sm:text-sm rounded-full bg-[#F0EAD6] text-[#2F4F4F] shadow-md transition-all hover:shadow-lg text-center"
          style={{ textAlignLast: 'center' }} // Asegura que el texto seleccionado también esté centrado
          value={file && file.name ? file.name : ''}
        >
          <option value="">Seleccionar archivo cargado</option>
          {filteredFilesList.map((filename, index) => (
            <option key={index} value={filename}>
              {filename}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FileUploadSection;
