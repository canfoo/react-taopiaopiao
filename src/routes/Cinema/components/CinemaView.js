import React, { Component } from 'react'
import CinemaViewHeader from './Header'
import CinemaItem from './CinemaItem'

class Cinema extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<section>
				<CinemaViewHeader {...this.props} />
				<CinemaItem {...this.props} />
			</section>
		)
	}
}

Cinema.propTypes = {
}

export default Cinema
