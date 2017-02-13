import React, { Component } from 'react';
import './Video.scss';

export default class Video extends Component {
	constructor (props) {
		super(props);
		this.state = {
			videoShow: false,
			iconShow: true
		};
	}

	componentWillReceiveProps (nextProps) {
		this.setState({
			videoShow: true
		});
	}

	cancelVideoBox (event) {
		if (event.target.className === 'mask') {
			this.setState({
				videoShow: false
			});
			this.videoStop();
		}
	}

	videoStar () {
		let video = this.refs.video
		video.play()
		this.setState({
			iconShow: false
		})
	}

	videoStop () {
		let video = this.refs.video
		video.pause()
		this.setState({
			iconShow: true
		})
	}

    render () {
        return (
        	<section className="mask" style={{display: this.state.videoShow ? 'block' : 'none'}} 
        	onClick={this.cancelVideoBox.bind(this)}>
        		<div className="video-box abs" onClick={this.videoStar.bind(this)}>
        			<div className="v-cover">
        				<video ref="video" className="v-content" src={this.props.video.src} poster={this.props.video.poster}></video>
        			</div> 
        			<div style={{display: this.state.iconShow ? 'block' : 'none'}} className="v-icon abs"></div>
        		</div>
        	</section>
        )
  }
}

Video.propTypes = {
}
