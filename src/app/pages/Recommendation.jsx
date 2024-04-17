import React from "react";
import '../assets/css/Hometype.css';
import Recommended1 from '../assets/images/recommended1.png';
import Recommended2 from '../assets/images/recommended2.png';
import Recommended3 from '../assets/images/recommended3.png';
import ProductComponent from '../components/ProductComponent';
import ProductCard from '../components/ProductCard';

function Recommendation() {
    return (
        <div className="product-home">
            <ProductComponent
                PageTitle="Recommendations"
                PageResult="Showing houses that fit your budget"
            />

            <div className="products-container">
                <ProductCard
                    ProductImage={Recommended1}
                    ProductImageAlt="Recommended1 Image"
                    ProductPrice="#1,500,000"
                    ProductTitle="Storey Building"
                    ProductLocation="Victoria Island 1, Karimu Kotu Street"
                />
                <ProductCard
                    ProductImage={Recommended2}
                    ProductImageAlt="Recommended2 Image"
                    ProductPrice="#1,000,000"
                    ProductTitle="Apartment"
                    ProductLocation="Banana Island, 5th Avenue"
                />
                <ProductCard
                    ProductImage={Recommended3}
                    ProductImageAlt="Recommended3 Image"
                    ProductPrice="#2,000,000"
                    ProductTitle="Bungalow"
                    ProductLocation="Maryland, 3 Road Avenue"
                />
            </div>
        </div>
    )
}

export default Recommendation;