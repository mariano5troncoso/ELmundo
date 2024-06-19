import React from 'react';
import NavBar from '../components/NavBar';
import FiltroDayco from '../components/FiltroDayco';

export default function Dayco() {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center bg-blue-900 items-center mt-24">
                <img className='' src="/dayco.png" alt="" />
            </div>
            <div><FiltroDayco/></div>
        </div>
    );
}
