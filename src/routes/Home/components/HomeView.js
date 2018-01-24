import React, { Component } from 'react';
import HomeHeader from './Header';
import Swiper from './Swiper';
import Hot from './Hot';
import Coming from './Coming';
import './HomeView.scss';

export default class HomeView extends Component {
    render () {
      console.log(1231);
        let swiper = null;
        let list = null;
        if (this.props.home.hotListShow) {
            swiper = (<Swiper {...this.props} />)
            list = (<Hot {...this.props} />);
        } else {
            list = (<Coming {...this.props} />);
        }
        return (
        	<section id="home">
        		<HomeHeader {...this.props} />
                {swiper}
                {list}
        	</section>
        )
    }
}
