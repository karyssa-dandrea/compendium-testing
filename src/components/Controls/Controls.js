import React from 'react';

export default function Controls({ searchInput, setSearchInput, handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
