import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render () {
        return (
        	<header className="rel md-header">
                <figure className="mdhl abs">
                   <img src={`https://gw.alicdn.com/${this.props.movieObj.poster}`} /> 
                </figure>
                <article className="mdhr abs">
                    <p className="m-cname">{this.props.movieObj.showName}</p>
                    <p className="m-ename">{this.props.movieObj.showNameEn}</p>
                    <p className="m-kind">{this.props.movieObj.type}</p>
                    <p className="m-country">{this.props.movieObj.country} ｜ {this.props.movieObj.duration}分钟</p>
                    <p className="m-otime">{this.props.movieObj.openTime}在中国上映</p>
                    <div className="full-star rel">
                        <div className="score-start" style={{width: `${this.props.movieObj.remark*10}%`}}></div> 
                        <span className="score abs">{this.props.movieObj.remark}分</span>
                    </div>
                </article>
            </header> 
        )
  }
}

Header.propTypes = {
    movieObj: React.PropTypes.object.isRequired
}

