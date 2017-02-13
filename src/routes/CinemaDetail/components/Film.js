import React, { Component } from 'react';
import classnames from 'classnames';
import './Film.scss';

export default class Film extends Component {
    constructor (props) {
        super(props);
        this.state = {
            film: {},
            filmLists: [],
            moveLength: 0
        }
        this.slideAction = false;
        this.clickAction = false;
        this.flagTimer = false;
        this.imgNumber = 0;
        this.slideWidth = 0;
        this.imgGap = 0;
        this.slideBoxLength = 0;
        this.slideMaxLength = 0;
        this.changeLength = 0;
        this.moveLength = 0;
        this.startX = 0;
        this.moveX = 0;
        this.prevMoveX = 0;
        this.moveSpeed = 0;
        this.speedMultiple = 40;
        this.slideOffset = 0;
        this.leftBoundary = false;
        this.rightBoundary = false;
    }

    componentWillMount () {
        let cinemaData = this.props.cinema.data;
        if (this.isEmptyObject(cinemaData)) {
            return false;
        }
        this.props.requestData('/movie/cinema_detail').then((data) => {
            let filmLists = data.data.data.returnValue.shows;
            this.setState({
                filmLists: filmLists,
                film: filmLists[0]
            });
            let liEle = this.refs.slideBox.querySelector('li');
            this.imgGap = parseInt(window.getComputedStyle(liEle, null).getPropertyValue('margin-right'));
            this.computeSlideWidth.call(this, this.refs.slideBox);
        })
    }

    componentDidMount () {
        let slideBox = this.refs.slideBox;
        this.addListenEvent(slideBox);
    }

    computeSlideWidth (slideBox) {
        let imgEles = slideBox.querySelectorAll('img');
        let loadNumber = 0;
        let content = this;
        this.imgNumbers = imgEles.length;
        [...imgEles].forEach((item) => {
            item.onload = function() {
                this.setAttribute('data-width', this.clientWidth);
                content.slideWidth += this.clientWidth;
                loadNumber++;
                if ( loadNumber === content.imgNumbers) {
                    let winWidth = document.documentElement.clientWidth || document.body.clientWidth;
                    let slideBoxLength = content.slideWidth + ((content.imgNumber-1) * content.imgGap);
                    content.slideMaxLength = slideBoxLength - winWidth - 16;
                    slideBox.style.width = slideBoxLength + 'px';           
                }
            }
        })
    }

    reComputeSlideWidth (slideBox) {
        let imgEles = slideBox.querySelectorAll('img');
        let winWidth = 0;
        let slideBoxLength = 0;
        this.slideWidth = 0;
        Array.prototype.forEach.call(imgEles, (item) => {
            this.slideWidth += item.clientWidth;
            item.setAttribute('data-width', item.clientWidth);
        })
        winWidth = document.documentElement.clientWidth || document.body.clientWidth;
        slideBoxLength = this.slideWidth + ((this.imgNumber-1) * this.imgGap);
        this.slideMaxLength = slideBoxLength - winWidth - 8;
        slideBox.style.width = slideBoxLength + 'px';
    }

    selectFilm (event, slideBox) {
        let ele = event.target;
        this.slideAction = true;
        this.clickAction = true;
        clearTimeout(this.flagTimer);
        if (ele.tagName === 'IMG') {
            let winWidth =  document.documentElement.clientWidth || document.body.clientWidth;
            let selfWidth = +ele.getAttribute('data-width');
            let id = ele.getAttribute('data-id');
            this.setState({
                film: this.getObjById(id, this.state.filmLists)
            })
            let imgEles = slideBox.querySelectorAll('img');
            for (let i = 0; i < imgEles.length; i++) {
                if (imgEles[i].className === 'click-select') {
                    imgEles[i].className = '';
                    break;
                }
            }
            ele.className = 'click-select';
            this.reComputeSlideWidth(slideBox);
            this.slideOffset = (winWidth - selfWidth)/2 - ele.offsetLeft;
            if (this.slideOffset > 0) {
                this.slideOffset = 0;
            } else if (this.slideOffset < -this.slideMaxLength) {
                this.slideOffset = -this.slideMaxLength;
            }
            this.setTranslate(slideBox, this.slideOffset);
            this.flagTimer = setTimeout(() => {
                this.clickAction = false;
            }, 200)
        }
    }

    slideStart (event) {
        this.slideAction = false;
        this.startX = event.touches[0].clientX;
    }

    slideMove (event, slideBox) {
        this.leftBoundary = false;
        this.rightBoundary = false;
        this.moveX = event.touches[0].clientX;
        this.changeLength = this.moveX - this.startX;
        this.moveLength = this.slideOffset + this.changeLength;
        if (this.moveLength > 0 && this.changeLength > 0) {
            this.leftBoundary = true;
            this.setTranslate(slideBox, 0);
            return;
        }
        if (this.moveLength < -this.slideMaxLength && this.changeLength < 0) {
            this.rightBoundary = true;
            this.setTranslate(slideBox, -this.slideMaxLength);
            return; 
        }
        this.setTranslate(slideBox, this.moveLength)
        this.moveSpeed = this.moveX - this.prevMoveX;
        this.prevMoveX = this.moveX;
    }

    slideEnd (event, slideBox) {
        if (this.leftBoundary) {
            this.slideOffset = 0;
        } else if (this.rightBoundary) {
            this.slideOffset = -this.slideMaxLength;
        } else {
            this.slideAction = true;
            if (Math.abs(this.moveSpeed) < 2) {
                this.moveSpeed = 0;
            }
            this.slideOffset = this.moveLength + this.moveSpeed * this.speedMultiple;
            if (this.slideOffset > 0 ) {
                this.slideOffset = 0;
            } else if (this.slideOffset < -this.slideMaxLength) {
                this.slideOffset = -this.slideMaxLength;
            } 
            this.setTranslate(slideBox, this.slideOffset);
        }
    }

    addListenEvent (slideBox) {
        slideBox.addEventListener('click', (event) => {
            this.selectFilm.call(this, event, slideBox);
        }, false)
        slideBox.addEventListener('touchstart', (event) => {
            if (this.clickAction === false) {
                this.slideStart.call(this, event);
            }
        }, false)
        slideBox.addEventListener('touchmove', (event) => {
            if (this.clickAction === false) {
                this.slideMove.call(this, event, slideBox);
            }
        }, false)
        slideBox.addEventListener('touchend', (event) => {
            if (this.clickAction === false) {
                this.slideEnd.call(this, event, slideBox);
            }
        }, false)
    }

    setTranslate (slideBox, length) {
        this.setState({
            moveLength: length
        })
    }

    isEmptyObject(e) {  
        let t;  
        for (t in e)  
            return !1;  
        return !0  
    }

    getObjById (id, lists) {
        for (let i = 0; i < lists.length; i++) {
            if (+lists[i].id === +id) {
                return lists[i]
            }
        }
        return false
    }

    render () {
        return (
            <section>
                <div id="v-slide-content" className='rel'>
                            <ul className="v-slide-box slide-action abs" ref="slideBox"
                                style={{transform: `translateX(${this.state.moveLength}px)`}}>
                {
                    this.state.filmLists.map((item, index) => {
                        return <li key={item.id}>
                                    <img className={classnames({
                                        'click-select': index === 0
                                    })} style={{height: '1.8rem'}} src={`https://gw.alicdn.com/${item.poster}`} 
                                        data-id={item.id} />
                                </li>
                    })
                }               
                            </ul>  
                            
                </div>
                <div id="sel-film">
                    <p>{this.state.film.showName}</p>
                    <div className="full-star rel">
                        <div className="score-start" style={{width: `${this.state.film.remark*10}%`}}></div>
                        <span className="score abs">{this.state.film.remark}</span>
                    </div>
                </div>
            </section>  
        )
  }
}

Film.propTypes = {
}
