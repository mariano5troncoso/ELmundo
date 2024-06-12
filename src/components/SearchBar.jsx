import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="mb-4 w-full">
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Buscar productos..."
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
        </div>
    );
};

export default SearchBar;
