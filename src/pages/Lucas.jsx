import React from 'react';
import ExcelReader from '../components/ExcelReader';
import NavBar from '../components/NavBar';

export default function Lucas() {
  return (
    <div>
        <NavBar/>
        <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/lucas.png" alt="" />
            </div>
        <div className=""><ExcelReader/></div>
        
        </div>
  );
}