import React from "react";
import '../assets/css/Hometype.css';
import HomeProduct1 from '../assets/images/hometype1.png';
import HomeProduct2 from '../assets/images/hometype2.png';
import HomeProduct3 from '../assets/images/hometype3.png';
import ProductComponent from '../components/ProductComponent';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function HomeType() {
    return (
        <div className="product-home">
            <ProductComponent
                PageTitle="Home"
                PageResult="Showing 330 homes"
            />

            <div className="products-container">
                <ProductCard
                    ProductImage={HomeProduct1}
                    ProductImageAlt="HomeProduct1 Image"
                    ProductPrice="#1,500,000"
                    ProductTitle="Apartment"
                    ProductLocation="Lekki Phase 1, Admirality way"
                />
                <ProductCard
                    ProductImage={HomeProduct2}
                    ProductImageAlt="HomeProduct2 Image"
                    ProductPrice="#2,500,000"
                    ProductTitle="Bungalow"
                    ProductLocation="Ikeja, Abba Johnson Street"
                />
                <ProductCard
                    ProductImage={HomeProduct3}
                    ProductImageAlt="HomeProduct3 Image"
                    ProductPrice="#3,000,000"
                    ProductTitle="Storey Building"
                    ProductLocation="Ikoyi, Abayomi Fatusin Close"
                />
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default HomeType;