import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import '../assets/css/PriceFilter.css';

class DateFilter extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 30
        }
    }
    handleChangeStart = () => {
        console.log('Change event started')
    };
    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };
    render() {
        const { value } = this.state
        return (
            <div>
                <div className='slider' >
                    <Slider
                        min={6}
                        max={366}
                        value={value}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChange}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    <div className='value'>
                        <p>6 days</p>
                        <p>{value} days</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default DateFilter;