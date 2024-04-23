import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import MultiRangeSlider from 'multi-range-slider-react';
import '../assets/css/PriceFilter.css';

function SettingFilter() {
    const [value, setValue] = useState(5000);
    const [minRent, setMinRent] = useState(300);
    const [maxRent, setMaxRent] = useState(800);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleChangeMultiRange = (ranges) => {
        setMinRent(ranges.minValue);
        setMaxRent(ranges.maxValue);
    };

    return (
        <div>
            <div>
                <div className='value setting'>
                    <h5>Rent Budget</h5>
                    <p>NGN{minRent} - NGN{maxRent}</p>
                </div>
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    minValue={300}
                    maxValue={800}
                    value={[minRent, maxRent]}
                    step={100}
                    onInput={handleChangeMultiRange}
                />
            </div>
            <div>
                <div className='value setting'>
                    <h5>Property Size</h5>
                    <p>{value} sq.ft</p>
                </div>
                <Slider
                    min={100}
                    max={10000}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default SettingFilter;
