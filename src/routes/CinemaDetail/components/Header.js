import React, { Component } from 'react';
import './Header.scss';
import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            address: ''
        }
    }

    componentWillMount () {
        let area = this.props.cinema.area;
        let cinemaData = this.props.cinema.data;
        if (this.isEmptyObject(cinemaData)) {
            this.props.router.push('/');
            return false;
        }
        let cinemaObj = this.getObjById(this.props.match.params.id, cinemaData[area]);
        this.setState({
            name: cinemaObj.cinemaName,
            address: cinemaObj.address
        })
    }

    getObjById (id, lists) {
        for (let i = 0; i < lists.length; i++) {
            if (+lists[i].id === +id) {
                return lists[i];
            }
        }
        return false;
    }

    isEmptyObject(e) {
        let t;
        for (t in e)
            return !1;
        return !0
    }

    render () {
        return (
        	<header id="ci-d-header">
        		<div className="d-na">
        			<p>{this.state.name}</p>
        			<p>{this.state.address}</p>
        		</div>
        		<div className="d-new">
        			<span className="label-mod label-orange">新人专享</span>
        			<span className="label-mod">新人特惠，名额有限抢完即止</span>
        		</div>
        	</header>
        )
  }
}

Header.propTypes = {
    cinema: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
}
