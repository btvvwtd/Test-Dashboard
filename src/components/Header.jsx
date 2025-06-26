import React, { useState } from 'react';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-[#121622] border-b-2 border-[#313b54] z-50">
            <h2 className="text-xl  text-white text-[30px]">Hi Arthur, welcome! You have 12 open tasks.</h2>
            <div className="flex items-center gap-4">
                <div className="search-bar">
                    <input
                        type="text"
                        className="p-3 border border-[#1e2233] rounded-lg text-white w-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ backgroundColor: '#1e2233', borderRadius:'20px',borderColor:'1e2233' }}
                        placeholder="Search"

                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div
                    className="flex items-center justify-center w-10 h-10 text-white rounded-full text-sm font-bold"
                    style={{
                        background: 'linear-gradient(135deg, #1e40af 100%, #1e40af4D 30%)'
                    }}
                >
                    AR
                </div>            </div>
        </header>
    );
}

export default Header;