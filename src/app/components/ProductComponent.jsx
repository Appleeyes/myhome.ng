import React from "react";
import '../assets/css/ProductComponent.css';
import ArrowBack from '../components/ArrowBackComponent';
import Filter from '../assets/images/filter.svg';
import SearchComponent from './SearchComponent';

function ProductComponent({ PageTitle,
    PageResult,
}) {
    return (
        <div className="products-page">
            <div className="products-head">
                <ArrowBack />
                <p>{PageTitle}</p>
                <a href="/#"><img src={Filter} alt="Filter Icon" /></a>
            </div>
            <p className="page-result">{PageResult}</p>
            <SearchComponent />
        </div>
    )
}

export default ProductComponent;