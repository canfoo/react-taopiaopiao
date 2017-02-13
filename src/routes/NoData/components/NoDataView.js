import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Back from '../../../components/Back';
import './NoDataView.scss';

const No = ({router}) => {
	return (
		<section>
			<p className="no">空空如也～</p>
			<Back router={router} />
		</section>
	)
}
  
export default withRouter(No);
