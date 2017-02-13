import React, { Component } from 'react';
import classnames from 'classnames';
import './Introduction.scss';

export default class Introduction extends Component {
    constructor (props) {
        super(props);
        this.state = {
            expand: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.description != this.props.description || nextState.expand != this.state.expand;
    }
    
    isExpand () {
        this.setState({
            expand: !this.state.expand
        })
    }

    render () {
        return (
        	<article className="md-intro">
                <p className={classnames({
                    'hide-something': !this.state.expand
                })}>
                    {this.props.description}
                </p>
                <p className="is-expand" onClick={this.isExpand.bind(this)}>
                    {this.state.expand ? '收起' : '展开'}
                </p>
            </article>
        )
  }
}

Introduction.propTypes = {
    description: React.PropTypes.string.isRequired
}
