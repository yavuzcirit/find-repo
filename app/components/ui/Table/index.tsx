import React, { useState, useEffect } from 'react';
import { TableProps } from './types';

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(typeof window !== 'undefined' && localStorage.getItem('currentPage') || '1')
  );
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} className="px-4 py-2">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              {columns.map(column => (
                <td key={column.key} className="border px-4 py-2">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
          <button  
            className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded my-4 mx-1 ${currentPage === i + 1 ? 'bg-gray-300 text-gray-800' : ''}`} 
            key={i} 
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
