import React, { Component } from 'react';
import './Picture.scss';
import SwiperAction from '../../../lib/swiper/swiper.min.js';
import PropTypes from 'prop-types';

export default class Picture extends Component {
    componentDidUpdate (prevProps) {
        if (this.props.lists != prevProps.lists) {
            let swiper = new SwiperAction('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: false,
                spaceBetween: 5
            })
        }
    }

    render () {
        return (
        	<section id="movie-detail" className="ab-photo rel border-1px-bottom"
                style={{paddingBottom: !this.props.hasName ? '0' : '.50rem'}}>
                <header className="ab-header rel">
                    <span className="">{this.props.title}</span>
                </header>
                <div className="swiper-container">
                    <div className="swiper-wrapper" >
        {
            this.props.lists.map((item) => {
                return  <div className="swiper-slide" key={item.id}>
                            <div className="am-img rel">
                                <img src={`https://gw.alicdn.com/${item.avatar}`} alt=""/>
                                <div className="am-title abs"
                                    style={{display: this.props.hasName ? 'block' : 'none'}}>
                                    <p className="tddd">{item.artisteName}</p>
                                    <p>{item.profession}</p>
                                </div>
                            </div>
                        </div>
            })
        }
                    </div>
                </div>
            </section>
        )
  }
}

Picture.propTypes = {
    hasName: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired
}
