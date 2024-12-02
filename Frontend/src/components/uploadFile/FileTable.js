import React from 'react';
import { Trash2, Download } from 'lucide-react';

// Componente para cada fila de archivo
const FileRow = ({ file, handleDownloadFile, handleDeleteFile }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2F4F4F]">
        {file.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2F4F4F]">
        {file.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2F4F4F]">
        {file.date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => handleDownloadFile(file.name)}
          className="text-[#2F4F4F] hover:text-[#3D6F6F] mr-2"
          aria-label={`Descargar ${file.name}`}
        >
          <Download className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleDeleteFile(file.id)}
          className="text-[#2F4F4F] hover:text-[#3D6F6F]"
          aria-label={`Eliminar ${file.name}`}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

// Componente principal para la tabla de archivos
const FileTable = ({ fileHistory, handleDownloadFile, handleDeleteFile }) => {
  // Ordenar todos los archivos por fecha en orden descendente
  const sortedFileHistory = [...fileHistory].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Obtener los últimos tres archivos de cualquier tipo
  const lastThreeFiles = sortedFileHistory.slice(0, 3);

  return (
    <div className="mt-8 bg-[#F0EAD6] shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-[#2F4F4F] mb-4">
          Últimos Archivos Subidos
        </h3>
        <div className="overflow-x-auto">
          {lastThreeFiles.length > 0 ? (
            <table className="min-w-full divide-y divide-[#2F4F4F]">
              <thead className="bg-[#F0EAD6]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider"
                  >
                    Tipo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider"
                  >
                    Fecha
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#F0EAD6] divide-y divide-[#2F4F4F]">
                {lastThreeFiles.map((file) => (
                  <FileRow
                    key={file.id}
                    file={file}
                    handleDownloadFile={handleDownloadFile}
                    handleDeleteFile={handleDeleteFile}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-6 text-[#2F4F4F]">
              <p className="text-sm font-medium">No hay archivos subidos todavía.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileTable;
