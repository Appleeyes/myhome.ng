import React from 'react';
import { useHistory } from 'react-router-dom';
import arrowLeft from '../assets/images/arrow-left.svg';

function ArrowBackComponent() {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };
    return (

        <button className='arrow' onClick={goBack}>
            <img src={arrowLeft} alt="Arrow Left Icon" />
        </button>
    )
}

export default ArrowBackComponent;