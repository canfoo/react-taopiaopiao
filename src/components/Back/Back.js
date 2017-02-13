import React from 'react';
import './Back.scss';

export const Back = ({router}) => {
	return (
		<section className="go-back" onClick={router.goBack}>
			<span></span>
		</section>
	)
}
  
export default Back
