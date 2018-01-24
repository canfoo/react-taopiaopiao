import React, { Component } from 'react';
import classnames from 'classnames';
import './Header.scss';
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hot: true
    };
  }

  componentDidMount () {
    this.props.switchList('hot');
  }

  selectList (kind) {
    this.props.switchList(kind);
  }

  switchList (event) {
    let list = event.target.getAttribute('data-list');
    if (list === 'hot') {
      this.selectList('hot');
      this.setState({hot: true});
    } else if (list === 'coming') {
      this.selectList('coming');
      this.setState({hot: false});
    }
  }

  showCity () {
    this.props.showCity();
  }

  render () {
    return (
      <header className="h-header">
          <div className="l" onClick={this.showCity.bind(this)}>
              <span>{this.props.city.name}</span>
              <span></span>
          </div>
          <div className="r sel-list rel" onClick={this.switchList.bind(this)}>
              <div className={classnames({
                    "list-action": this.state.hot
                })} data-list="hot">正在热映</div>
              <div className={classnames({
                    "list-action": !this.state.hot
                })} data-list="coming">即将上映</div>
                <span className={classnames({
                    "abs": true,
                    "col": !this.state.hot
                })}></span>
          </div>
      </header>
    )
  }
}

Header.propTypes = {
  switchList: PropTypes.func.isRequired,
  showCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
}
