import React from "react";
import '../assets/css/ProductComponent.css';
import ArrowLeft from '../assets/images/arrow-left.svg';
import Filter from '../assets/images/filter.svg';
import SearchComponent from './SearchComponent';

function ProductComponent({ PageTitle,
    PageResult,
}) {
    return (
        <div className="products-page">
            <div className="products-head">
                <a href="/user/home"><img src={ArrowLeft} alt="Arrow Left Icon" /></a>
                <p>{PageTitle}</p>
                <a href="/#"><img src={Filter} alt="Filter Icon" /></a>
            </div>
            <p className="page-result">{PageResult}</p>
            <SearchComponent />
        </div>
    )
}

export default ProductComponent;