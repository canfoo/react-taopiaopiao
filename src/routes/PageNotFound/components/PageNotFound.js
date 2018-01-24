import React, { Component } from 'react'
import NotFoundImage from '../assets/404.jpg'
import classes from './PageNotFound.scss'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types';

class PageNotFound extends Component {
  render () {
    const props = this.props
    return (
      <div className={classes.container}>
        <h1>Page not found!!!</h1>
        <h3>
          <a className={classes.link} onClick={props.router.goBack}>Back</a>
        </h3>
        <h1 style={{color: 'red', marginTop: '30px'}}>404</h1>
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
