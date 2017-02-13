import React, { Component } from 'react';
import { withRouter } from 'react-router';
import CinemaDetailHeader from './Header';
import Film from './Film';
import Period from './Period';
import Back from '../../../components/Back';

class CinemaDetailView extends Component {
    render () {
        return (
        	<section>
                <CinemaDetailHeader {...this.props} /> 
                <Film {...this.props} /> 
                <Period />
                <Back router={this.props.router} />
            </section>
        )
  }
}

export default withRouter(CinemaDetailView);
