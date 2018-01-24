import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Hot.scss';
import PropTypes from 'prop-types';

export default class Hot extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: []
        };
    }

    componentWillMount () {
        this.upDateHotListByCity(this.matchCityStr(this.props.city.name))
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.city.name != nextProps.city.name) {
            this.upDateHotListByCity(this.matchCityStr(nextProps.city.name))
        }
    }

    upDateHotListByCity (city) {
        this.props.requestData(`/movie/hot/?city=${city}`).then((data) => {
            let lists = data.data.data.returnValue
            //模拟索引数据的id号
            lists.forEach((item, index) => {
              item.mID = index
            })
            this.setState({
                lists: lists
            });
        });
    }

    matchCityStr (str) {
        let randomList = ['bj', 'sh', 'gz'];
        let randomCity = randomList[Math.floor(3*Math.random())];
        switch (str) {
            case '北京': return 'bj'
            case '上海': return 'sh'
            case '广州': return 'gz'
            default: return randomCity
        }
    }

    playVideo (src, poster) {
        console.log('this.props', this.props);
        this.props.updateVideoSource(src, poster);
    }

    render () {
        return (
        	<section>
                <ul id='m-list'>
        {
            this.state.lists.map((item) => {
                let btn = null;
                if (item.openTime < '2016-12-09') {
                    btn = (<button className="btn b-btn">购买</button>);
                } else {
                    btn = (<button className="btn forward-b-btn">预售</button>);
                }
                return <li key={item.id}>
                            <figure className="ml m-img rel l"
                            onClick={() => {
                                if (item.preview[0]) {
                                    this.playVideo(item.preview[0].iphoneUrl, `https://gw.alicdn.com/${item.poster}`)
                                } else {
                                    alert('暂时不能播放')
                                }
                            }}>
                                <LazyLoad throttle={200} height={180}>
                                    <ReactCSSTransitionGroup key="1"
                                      transitionName="fade"
                                      transitionAppear={true}
                                      transitionAppearTimeout={500}
                                      transitionEnter={false}
                                      transitionLeave={false}>
                                      <img src={`https://gw.alicdn.com/${item.poster}`} />
                                      <div className="play-icon abs">
                                          <img src={`https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png?v=${item.id}`} />
                                      </div>
                                    </ReactCSSTransitionGroup>
                                </LazyLoad>
                            </figure>
                            <div className="mr rel">
                                <div className="mrl">
                                    <Link to={`/movie/detail/${item.mID}`}>
                                        <p className="dot m-name">{item.showName}</p>
                                        <div className="full-star rel">
                                            <div className="score-start" style={{width: `${10*item.remark}%`}}></div>
                                            <span className="score abs">{item.remark}</span>
                                        </div>
                                        <p className="dot m-d">{item.highlight}</p>
                                        <p className="dot m-y">{item.leadingRole}</p>
                                    </Link>
                                </div>
                                <div className="mrr abs">
                                    {btn}
                                </div>
                            </div>
                            <div className="m-act">
                                <span className="dot">1212五折狂欢</span>
                                <span className="dot">1212特惠抢票，名额有限抢完即止</span>
                            </div>
                        </li>
            })
        }

                </ul>
            </section>
        )
  }
}

Hot.propTypes = {
    requestData: PropTypes.func.isRequired,
    updateVideoSource: PropTypes.func.isRequired
}
