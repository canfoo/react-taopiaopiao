import React, { Component } from 'react';
import './Swiper.scss';
import SwiperAction from '../../../lib/swiper/swiper.min.js';
import PropTypes from 'prop-types';

export default class Swiper extends Component {
    constructor (props) {
        super(props);
        this.state = {
            imgs: []
        };
    }

    componentWillMount () {
        this.props.requestData('/movie/swiper').then((data) => {
            this.setState({
                imgs: data.data.data.returnValue
            });
            new SwiperAction('.swiper-container', {
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay : 3000,
                autoplayDisableOnInteraction : false,
            });
        });
    }

    render () {
        return (
            <section>
                <div className="swiper-container" id="swiper">
                    <div className="swiper-wrapper">
                {
                    this.state.imgs.map((item) => {
                        return  <div className="swiper-slide" key={item.id}>
                                    <img className="img" src={`https://gw.alicdn.com/${item.smallPicUrl}`} />
                                </div>
                    })
                }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
  }
}

Swiper.propTypes = {
    requestData: PropTypes.func.isRequired
}
