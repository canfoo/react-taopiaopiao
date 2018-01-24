import React, { Component } from 'react';
import './HomeView.scss';

export default class HomeView extends Component {
    render () {
        return (
        	<div>
        		<h4 style={{marginTop: '.2rem'}}>Hello, Welcome!</h4>
        		<img
        			alt='This is a duck, because Redux!'
        			className='duck'
        			src={WukongImage} />
        	</div>
        )
  }
}
