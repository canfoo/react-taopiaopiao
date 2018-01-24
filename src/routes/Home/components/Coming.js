import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Coming.scss';
import PropTypes from 'prop-types';

export default class Coming extends Component {
    constructor (props) {
        super(props);
        this.state = {
            limit: 20,
            offset: 0,
            total: 0,
            comingLists: [],
            loadStatus: 'start',
            showClickLoad: false
        }
        this.tempLists = [];
    }

    componentWillMount () {
        this.loadComingList();
    }

    loadComingList () {
        fetch(`/movie/coming/?limit=${this.state.limit}&offset=${this.state.offset}`)
        .then((response) => response.json())
        .then((data) => {
            let lists = [];
            this.tempLists = this.tempLists.concat(data.data.data.returnValue);
            lists = this.tempLists;
            //模拟索引数据的id号
            lists.forEach((item, index) => {
              item.mID = index;
            });
            this.props.receiveData({
                data: {
                    data: {
                        returnValue: lists
                    }
                }
            })
            this.setState({
                comingLists: this.sortComingData(lists)
            });
            this.state.total = +data.total;
            this.state.offset = this.state.offset + this.state.limit;
            if (this.state.offset >= this.state.total) {
                this.setState({
                    loadStatus: 'complete'
                });
            } else {
                this.setState({
                    loadStatus: 'start'
                });
            }
        })
    }

    getWeekDay (num) {
        let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        return weeks[num]
    }

    sortComingData (lists) {
        let comingLists = []
        lists.forEach((item) => {
            let hasItem = false
            for (let i = 0; i < comingLists.length; i++) {
                if (item.openTime === comingLists[i].openTime) {
                    comingLists[i].movies.push(item)
                    hasItem = true
                    break
                }
            }
            if (!hasItem) {
                let comingItem = {
                    openTime: '',
                    day: '',
                    movies: []
                }
                comingItem.openTime = item.openTime
                comingItem.day = this.getWeekDay(new Date(item.openTime).getDay())
                comingItem.movies.push(item)
                comingLists.push(comingItem)
            }
        })
        return comingLists
    }

    clickLoadMore () {
        if (this.state.loadStatus != 'complete') {
            this.setState({
                loadStatus: 'loading'
            });
            //延时为了展现加载效果，可去掉
            window.setTimeout(() => {
                this.loadComingList();
            }, 500)
        }
    }

    playVideo (src, poster) {
        this.props.updateVideoSource(src, poster);
    }

    render () {
        let dateId = 0;
        return (
    	    <section id="coming">
            {
                this.state.comingLists.map((dateItem) => {
                return <div key={`date${++dateId}`}>
                        <p className="open-date">{`${dateItem.openTime} ${dateItem.day}`}</p>
                        <ul id='m-list'>
                        {
                            dateItem.movies.map((movieItem) => {
                                return  <li key={movieItem.id}>
                                    <figure className="ml m-img rel l"
                                    onClick={() => {
                                        if (movieItem.preview[0]) {
                                            this.playVideo(movieItem.preview[0].iphoneUrl, `https://gw.alicdn.com/${movieItem.poster}`)
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
                                              <img src={`https://gw.alicdn.com/${movieItem.poster}`} />
                                              <div className="play-icon abs">
                                                  <img src={`https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png?v=${movieItem.id}`} />
                                              </div>
                                            </ReactCSSTransitionGroup>
                                        </LazyLoad>
                                    </figure>
                                    <div className="mr rel">
                                        <div className="mrl">
                                            <Link to={`/movie/detail/${movieItem.mID}`}>
                                                <p className="dot m-name">{movieItem.showName}</p>
                                                <p className="count">{movieItem.availableScheduleCount}人想看</p>
                                                <p className="dot m-d">{movieItem.highlight}</p>
                                                <p className="dot m-y">{movieItem.leadingRole}</p>
                                            </Link>
                                        </div>
                                        <div className="mrr abs">
                                            <button className="btn forward-b-btn">预售</button>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                        </ul>
                    </div>
                })
            }
                <div className="click-load-more" onClick={this.clickLoadMore.bind(this)}>
                    <p style={{display: this.state.loadStatus === 'start' ? 'block' : 'none'}}>点击加载更多</p>
                    <p style={{display: this.state.loadStatus === 'loading' ? 'block' : 'none'}}>
                        <span>加载中...</span>
                        &nbsp;&nbsp;
                        <span className="loading-action"></span>
                    </p>
                    <p style={{display: this.state.loadStatus === 'complete' ? 'block' : 'none'}}>数据已全部加载了～</p>
                </div>
            </section>
        )
  }
}

Coming.propTypes = {
    receiveData: PropTypes.func.isRequired,
    updateVideoSource: PropTypes.func.isRequired
}
