import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import '../assets/css/PriceFilter.css';

class PriceFilter extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 22000
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
                        min={0}
                        max={600000}
                        value={value}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChange}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    <div className='value'>
                        <p>#0</p>
                        <p>#{value}</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default PriceFilter;