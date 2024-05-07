import React, { useEffect, useState } from 'react';
import { Table } from '@/app/components/ui';
import { useData } from '@/app/utils/store/useData';

const columns = [
  { key: 'id', header: 'Rep.Id' },
  { key: 'name', header: 'Name' },
  { key: 'description', header: 'Description' },
  { key: 'stargazers_count', header: 'Stars' },
  { key: 'forks', header: 'Forks' },
  { key: 'updated_at', header: 'Updated Dates' },
];

const TableComp = () => {
  const { data } = useData();
  const [sortBy, setSortBy] = useState(typeof window !== 'undefined' && localStorage.getItem('sortBy') || null);
  const [sortOrder, setSortOrder] = useState(typeof window !== 'undefined' && localStorage.getItem('sortOrder') || null);

  useEffect(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('sortBy', sortBy || '');
        localStorage.setItem('sortOrder', sortOrder || '');
      }
  }, [sortBy, sortOrder]);

    const handleSortByChange = (e:any) => {
        setSortBy(e.target.value);
    };

    const handleSortOrderChange = (e:any) => {
        setSortOrder(e.target.value);
    };

    let sortedData = [...data];
    if (sortBy && sortOrder) {
        sortedData.sort((a, b) => {
            if (sortOrder === 'asc') {
                if (sortBy === 'updated_at') {
                    return new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime();
                } else {
                    if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
                        return a[sortBy].localeCompare(b[sortBy]);
                    } else {
                        return a[sortBy] - b[sortBy];
                    }
                }
            } else {
                if (sortBy === 'updated_at') {
                    return new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime();
                } else {
                    if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
                        return b[sortBy].localeCompare(a[sortBy]);
                    } else {
                        return b[sortBy] - a[sortBy];
                    }
                }
            }
        });
    }

    if(sortedData && sortedData?.length>0){return (
        <div className="container mx-auto">
            <div className="flex gap-8 mb-4 bg-gray-800 p-4 rounded-lg">
                <div>
                    <label htmlFor="sortBy" className="text-white mr-2">Sort By</label>
                    <select defaultValue={sortBy ?? ''} id="sortBy" onChange={handleSortByChange} className="bg-gray-700 text-white py-4 px-2 rounded-md">
                        <option value="">Select</option>
                        <option value="stargazers_count">Stars</option>
                        <option value="forks">Forks</option>
                        <option value="updated_at">Updated Dates</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sortOrder" className="text-white mr-2">Sort Order:</label>
                    <select defaultValue={sortOrder ?? ''} id="sortOrder" onChange={handleSortOrderChange} className="bg-gray-700 text-white py-4 px-2 rounded-md">
                        <option value="">Select</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <Table data={sortedData} columns={columns} />
        </div>
    );}
}

export default TableComp;
