import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='search-container'>
          <h1>movies List</h1>
          <input type="text" placeholder="Search for movies..." className='search-input' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          <button type="submit" className='search-button'>Search</button>
      </div>
      
    </form>
  );
};

export default Form;





