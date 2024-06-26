import React from "react";
import '../assets/css/Hometype.css';
import '../assets/css/ProductOverview.css';
import Favourite2 from '../assets/images/hometype3.png';
import ProductComponent from '../components/ProductComponent';
import Button from '../components/ButtonComponent';
import Footer from '../components/Footer';

function ProductOverview() {
    return (
        <div className="product-home">
            <ProductComponent
                PageTitle="Property Overview"
            />

            <div className="products-container">
                <img src={Favourite2} alt="Product Thumbnail" />
            </div>
            <div className="product-details">
                <ul>
                    <li>
                        <h3>Listing Type</h3>
                        <p>Sylver Listing</p>
                    </li>
                    <li>
                        <h3>Property Type</h3>
                        <p>Apartment</p>
                    </li>
                    <li>
                        <h3>Property Location</h3>
                        <p className="price">Victoria Island 1, Karimu Kotu Street</p>
                    </li>
                    <li>
                        <h3>Listin Date</h3>
                        <p>11 April 2024</p>
                    </li>
                    <li>
                        <h3>Erf Size</h3>
                        <p>1236 m2</p>
                    </li>
                    <li>
                        <h3>Floor Size</h3>
                        <p>57 m2</p>
                    </li>
                    <li>
                        <h3>Renting Price</h3>
                        <p>#1,000,000</p>
                    </li>
                    <li>
                        <h3>Dues and Levies</h3>
                        <p>#10,000 monthly</p>
                    </li>
                    <li>
                        <h3>Pet Allowed</h3>
                        <p>No</p>
                    </li>
                    <li>
                        <h3>Bedrooms</h3>
                        <p>2</p>
                    </li>
                    <li>
                        <h3>Bathroom</h3>
                        <p>1</p>
                    </li>
                    <li>
                        <h3>Parking Lot</h3>
                        <p>1</p>
                    </li>
                </ul>
                <Button link="/#">Contact Agent</Button>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default ProductOverview;