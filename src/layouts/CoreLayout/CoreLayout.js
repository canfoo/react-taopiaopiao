import React from 'react'
import Video from '../../components/Video'
import Footer from '../../components/Footer'
import City from '../../components/City'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children, location }) => (
  <div className='container text-center'>
    <div className='core-layout__viewport'>
      {children}
    </div>
    {
    	// <City />
    }
    <City />
    <Footer {...location} />
    <Video />
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
