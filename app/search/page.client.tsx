'use client';
import React from 'react'
import SearchBar from '../components/pages/search/SearchBar/SearchBar';
import TableComp from '../components/pages/search/TableComp/TableComp';
import RadioButtonComp from '../components/pages/search/RadioButtonComp/RadioButtonComp';

const PageClient = () => {
  return (
    <div className='px-4 py-4 flex flex-col gap-4'>
      <SearchBar />
      <RadioButtonComp />
      <TableComp />
    </div>
  )
}

export default PageClient