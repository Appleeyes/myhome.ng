import React from 'react';
import '../assets/css/SearchComponent.css';
import SearchIcon from '../assets/images/search-icon.svg';

function SearchComponent() {
    return (
        <div className='search'>
            <input type="text" placeholder='Search' />
            <img src={SearchIcon} alt="Search Icon" />
        </div>
    );
}

export default SearchComponent;
