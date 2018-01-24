import React from 'react'
import SwitchRoute from '../../routes';
import Video from '../../components/Video'
import Footer from '../../components/Footer'
import City from '../../components/City'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ location }) => (
  <div className='container text-center'>
    <div className='core-layout__viewport'>
        <SwitchRoute />
    </div>
    <City />
    <Footer {...location} />
    <Video />
  </div>
)

export default CoreLayout
