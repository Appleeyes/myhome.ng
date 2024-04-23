import React from 'react';
import '../../assets/css/Performance.css';
import ArrowBack from '../../components/ArrowBackComponent';
import PieChart from '../../assets/images/pie-chart.png';
import DonutChart from 'react-donut-chart';
import Footer from '../../components/Footer';

function Performance() {
    return (
        <div className="performance">
            <div className="head">
                <ArrowBack />
                <p>Performance and Reviews</p>
            </div>
            <div className='card-container'>
                <div className='prop-rev rev1'>
                    <h5>Total Properties</h5>
                    <p>15 Houses</p>
                </div>
                <div className='prop-rev'>
                    <h5>Properties On Rent</h5>
                    <p>8 Houses</p>
                </div>
                <div className='prop-rev'>
                    <h5>Properties On Rented</h5>
                    <p>7 Houses</p>
                </div>
                <div className='prop-rev chart'>
                    <h5>Properties Chart</h5>
                    <div className='donutchart'>
                        <DonutChart
                            data={[
                                { value: 7, label: 'Not Rented' },
                                { value: 8, label: 'Rented' },
                            ]}
                            height={40}
                            width={60}
                            colors={['#FFF', '#4690FF']}
                            strokeWidth={0}
                            strokeOpacity={0}
                            border={0}
                        />
                        <div className='donut-cont'>
                            <div>
                                <h5>Rented</h5>
                                <div className='span'>
                                    <span>.</span>
                                    <p>8 houses</p>
                                </div>
                            </div>
                            <div>
                                <h5>Not Rented</h5>
                                <div className='span'>
                                    <span className='span2'>.</span>
                                    <p>7 houses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pie-chart">
                <img src={PieChart} alt="PieChart" />
            </div>
            <Footer currentRoute={window.location.pathname} />
        </div>
    )
}

export default Performance;
