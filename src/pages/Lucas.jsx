import React from 'react';
import ExcelReader from '../components/ExcelReader';
import NavBar from '../components/NavBar';

export default function Lucas() {
  return (
    <div>
        <NavBar/>
        <div className="mt-24"><ExcelReader/></div>
        
        </div>
  );
}