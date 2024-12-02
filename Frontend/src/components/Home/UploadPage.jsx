import React, { useState, useEffect } from 'react';
import { ReactComponent as RefreshIcon } from '../../assets/refresh.svg';
import { ReactComponent as ViewIcon } from '../../assets/ojo.svg';
import { ReactComponent as EditIcon } from '../../assets/lapiz.svg';
import { ReactComponent as DeleteIcon } from '../../assets/basura.svg';
import { ReactComponent as DownloadIcon } from '../../assets/descarga.svg';

const UploadPage = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const filesPerPage = 5; // Archivos por página

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = () => {
        fetch('http://localhost:4009/api/files')
            .then(response => response.json())
            .then(data => {
                setFiles(data.files);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching files:', error);
                setLoading(false);
            });
    };

    const handleDelete = (file) => {
        console.log(`Eliminando el archivo: ${file}`);
    };

    const handleDownload = (file) => {
        console.log(`Descargando el archivo: ${file}`);
    };

    // Paginación: Calcular los archivos a mostrar en la página actual
    const indexOfLastFile = currentPage * filesPerPage;
    const indexOfFirstFile = indexOfLastFile - filesPerPage;
    const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

    // Cambiar de página
    const nextPage = () => {
        if (currentPage < Math.ceil(files.length / filesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div id="container" className="flex-1 bg-[login] flex-row min-h-screen w-full" style={{ paddingTop: '4%', paddingLeft: '10%', paddingRight: '10%' }}>
            <div id="factor_numbers" className="space-y-1 p-8 pl-10 pr-10 max-h-screen bg-login min-w-full border-4 border-solid rounded-3xl border-[#C1E1C1] border-dashed">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold pl-10 pr-8 text-[#2F4F4F] text-left font-bold">Archivos Subidos</h3>
                    <button 
                        onClick={fetchFiles} 
                        className="bg-[#C1E1C1] hover:bg-login text-black font-semibold rounded-xl p-2 mr-10"
                        disabled={loading}
                    >
                        {loading ? "Cargando..." : <RefreshIcon className="w-6 h-6" />}
                    </button>
                </div>
                <div className="separator-container pb-3 pl-10 pr-10">
                    <div className="separator-left"></div>
                    <div className="separator-right"></div>
                </div>
                <ul className="max-h-[calc(100vh-2rem)] space-y-6 p-2 pb-10 pl-6 pr-6 bg-[##F0EAD6]">
                    {currentFiles.length > 0 ? (
                        currentFiles.map((file, index) => (
                            <li key={index} className='flex items-center bg-[#F0EAD6] p-1 pl-5 pr-5 rounded-xl'>
                                <p className='flex-1 font-semibold text-[#2F4F4F]'>{file}</p>
                                <div className='flex items-center space-x-4'>
                                    <button onClick={() => console.log('Viewing', file)} className="bg-[#C1E1C1] hover:bg-login text-[#2F4F4F] font-semibold rounded-xl p-2">
                                        <ViewIcon className="w-7 h-7" />
                                    </button>
                                    <button onClick={() => console.log('Editing', file)} className="bg-[#C1E1C1] hover:bg-login text-[#2F4F4F] font-semibold rounded-xl p-2">
                                        <EditIcon className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => handleDelete(file)} className="bg-[#C1E1C1] hover:bg-login text-[#2F4F4F] font-semibold rounded-xl p-2">
                                        <DeleteIcon className="w-7 h-7" />
                                    </button>
                                    <button onClick={() => handleDownload(file)} className="bg-[#C1E1C1] hover:bg-login text-[#2F4F4F] font-semibold rounded-xl p-2">
                                        <DownloadIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="text-center text-gray-500">{loading ? "Cargando archivos..." : "No hay archivos subidos"}</li>
                    )}
                </ul>

                {/* Paginación */}
                <div className="flex justify-center items-center mt-4 space-x-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="bg-[#C1E1C1] hover:bg-[#F0EAD6] text-black font-semibold rounded-xl p-2 cursor-pointer"
                    >
                        &#60;
                    </button>
                    <span className="text-xl font-semibold text-[#2F4F4F]">Página {currentPage}</span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(files.length / filesPerPage)}
                        className="bg-[#C1E1C1] hover:bg-[#F0EAD6] text-black font-semibold rounded-xl p-2 cursor-pointer"
                    >
                        &#62;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadPage;
