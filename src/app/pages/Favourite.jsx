import React from "react";
import '../assets/css/Hometype.css';
import Favourite1 from '../assets/images/recommended3.png';
import Favourite2 from '../assets/images/hometype3.png';
import Favourite3 from '../assets/images/hometype1.png';
import ProductComponent from '../components/ProductComponent';
import ProductCard from '../components/ProductCard';

function Favourite() {
    return (
        <div className="product-home">
            <ProductComponent
                PageTitle="Favourites"
            />

            <div className="products-container">
                <ProductCard
                    ProductImage={Favourite1}
                    ProductImageAlt="Favourite1 Image"
                    ProductPrice="#1,500,000"
                    ProductTitle="Bungalow"
                    ProductLocation="Ajao Estate, Ajani Street"
                />
                <ProductCard
                    ProductImage={Favourite2}
                    ProductImageAlt="Favourite2 Image"
                    ProductPrice="#1,500,000"
                    ProductTitle="Storey Building"
                    ProductLocation="Apapa, Marine Beach Street"
                />
                <ProductCard
                    ProductImage={Favourite3}
                    ProductImageAlt="Favourite3 Image"
                    ProductPrice="#25,000,000"
                    ProductTitle="Apartment"
                    ProductLocation="Eko Atlantic City"
                />
            </div>
        </div>
    )
}

export default Favourite;