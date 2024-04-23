import React, { useState } from 'react';
import '../assets/css/FilterPage.css';
import ArrowBack from '../components/ArrowBackComponent';
import SettingFilter from '../components/SettingFilter';
import Footer from '../components/Footer';

function FilterPage() {
    const [selectedTypeAll, setSelectedTypeAll] = useState('All');
    const [selectedTypeLease, setSelectedTypeLease] = useState('Less than 3 month');
    const [selectedTypeBed, setSelectedTypeBed] = useState('1+');
    const [selectedTypeBath, setSelectedTypeBath] = useState('3+');
    const [selectedTypePlace, setSelectedTypePlace] = useState('Mainland');


    const handleClickAll = (type) => {
        setSelectedTypeAll(type);
    };

    const handleClickLease = (type) => {
        setSelectedTypeLease(type);
    };

    const handleClickBed = (type) => {
        setSelectedTypeBed(type);
    };

    const handleClickBath = (type) => {
        setSelectedTypeBath(type);
    };

    const handleClickPlace = (type) => {
        setSelectedTypePlace(type);
    };

    return (
        <div className='filter'>
            <div className="head">
                <ArrowBack />
                <p>Filter</p>
            </div>
            <div className='prop-type-container'>
                <h3>Property type</h3>
                <div className="property-type">
                    <button
                        className={selectedTypeAll === 'All' ? 'active' : ''}
                        onClick={() => handleClickAll('All')}
                    >
                        All
                    </button>
                    <button
                        className={selectedTypeAll === 'House' ? 'active' : ''}
                        onClick={() => handleClickAll('House')}
                    >
                        House
                    </button>
                    <button
                        className={selectedTypeAll === 'Apartment' ? 'active' : ''}
                        onClick={() => handleClickAll('Apartment')}
                    >
                        Apartment
                    </button>
                </div>
            </div>
            <SettingFilter />
            <div className='prop-type-container'>
                <h3>Lease time-line</h3>
                <div className='property-type less'>
                    <button
                        className={selectedTypeLease === 'Less than 3 month' ? 'active' : ''}
                        onClick={() => handleClickLease('Less than 3 month')}
                    >
                        Less than 3 month
                    </button>
                    <button
                        className={selectedTypeLease === 'Less than 6 month' ? 'active' : ''}
                        onClick={() => handleClickLease('Less than 6 month')}
                    >
                        Less than 6 month
                    </button>
                    <button
                        className={selectedTypeLease === 'Less than 12 month' ? 'active' : ''}
                        onClick={() => handleClickLease('Less than 12 month')}
                    >
                        Less than 12 month
                    </button>
                </div>
            </div>
            <div className='prop-type-container'>
                <h3>Bedrooms</h3>
                <div className='property-type Bed'>
                    <button
                        className={selectedTypeBed === 'Any' ? 'active' : ''}
                        onClick={() => handleClickBed('Any')}
                    >
                        Any
                    </button>
                    <button
                        className={selectedTypeBed === '1+' ? 'active' : ''}
                        onClick={() => handleClickBed('1+')}
                    >
                        1+
                    </button>
                    <button
                        className={selectedTypeBed === '3+' ? 'active' : ''}
                        onClick={() => handleClickBed('3+')}
                    >
                        3+
                    </button>
                    <button
                        className={selectedTypeBed === '5+' ? 'active' : ''}
                        onClick={() => handleClickBed('5+')}
                    >
                        5+
                    </button>
                </div>
            </div>
            <div className='prop-type-container'>
                <h3>Bathrooms</h3>
                <div className='property-type Bath'>
                    <button
                        className={selectedTypeBath === 'Any' ? 'active' : ''}
                        onClick={() => handleClickBath('Any')}
                    >
                        Any
                    </button>
                    <button
                        className={selectedTypeBath === '1+' ? 'active' : ''}
                        onClick={() => handleClickBath('1+')}
                    >
                        1+
                    </button>
                    <button
                        className={selectedTypeBath === '3+' ? 'active' : ''}
                        onClick={() => handleClickBath('3+')}
                    >
                        3+
                    </button>
                    <button
                        className={selectedTypeBath === '5+' ? 'active' : ''}
                        onClick={() => handleClickBath('5+')}
                    >
                        5+
                    </button>
                </div>
            </div>
            <div className='prop-type-container last'>
                <h3>Location</h3>
                <div className="property-type place">
                    <button
                        className={selectedTypePlace === 'Mainland' ? 'active' : ''}
                        onClick={() => handleClickPlace('Mainland')}
                    >
                        Mainland
                    </button>
                    <button
                        className={selectedTypePlace === 'Island' ? 'active' : ''}
                        onClick={() => handleClickPlace('Island')}
                    >
                        Island
                    </button>
                    <button
                        className={selectedTypePlace === 'Gated Estate' ? 'active' : ''}
                        onClick={() => handleClickPlace('Gated Estate')}
                    >
                        Gated Estate
                    </button>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    );
}

export default FilterPage;
