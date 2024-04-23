import React from "react";
import '../assets/css/SearchPage.css';
import ArrowBack from '../components/ArrowBackComponent';
import Filter from '../assets/images/filter.svg';
import Timer from '../assets/images/timer.svg';
import Share from '../assets/images/share.svg';
import Location from '../assets/images/location.svg';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/Footer';

function Search() {
    return (
        <div className="search-page">
            <div className="head">
                <ArrowBack />
                <p>Search</p>
                <a href="/product/filter"><img src={Filter} alt="Filter Icon" /></a>
            </div>
            <SearchComponent />
            <div className="recent-search">
                <p>Recent search</p>
                <div className="recent-card">
                    <div className="recent-left">
                        <img src={Timer} alt="Timer Icon" />
                        <div className="recent-left-second">
                            <p>St Anthony’s Estate</p>
                            <span>Ikoyi, Falomo roundabout, Lagos.</span>
                        </div>
                    </div>
                    <div className="recent-right">
                        <img src={Share} alt="Share Icon" />
                    </div>
                </div>
            </div>
            <div className="recent-search">
                <p>Result search</p>
                <div className="recent-card">
                    <div className="recent-left result">
                        <img src={Location} alt="Timer Icon" />
                        <div className="recent-left-second">
                            <p>St Anthony’s Estate</p>
                            <span>Ikoyi, Falomo roundabout, Lagos.</span>
                        </div>
                    </div>
                    <div className="recent-right">
                        <img src={Share} alt="Share Icon" />
                    </div>
                </div>
                <div className="recent-card">
                    <div className="recent-left result">
                        <img src={Location} alt="Timer Icon" />
                        <div className="recent-left-second">
                            <p>St Anthony’s Estate</p>
                            <span>Ikoyi, Falomo roundabout, Lagos.</span>
                        </div>
                    </div>
                    <div className="recent-right">
                        <img src={Share} alt="Share Icon" />
                    </div>
                </div>
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Search;