import React, { Component } from 'react';
import './Period.scss';

export default class Period extends Component {
    constructor (props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    selectDate (event) {
        let num = +event.target.getAttribute('data-num');
        if (num) {
            this.setState({
                num: num
            })
        }
    }

    render () {
        return (
        	<section id="period">
                <section className="sel-date rel" onClick={this.selectDate.bind(this)}>
                    <ul className="rel">
                        <li data-num="0">
                            <span data-num="0">明天 12-16</span>
                            <span data-num="0" className="font-icon">惠</span>
                        </li>
                        <li data-num="1">
                            <span data-num="1">后天 12-17</span>
                            <span data-num="1" className="font-icon">惠</span>
                        </li>
                        <li data-num="2">
                            <span data-num="2">周五 12-18</span>
                            <span data-num="2" className="font-icon">惠</span>
                        </li>
                        <li data-num="3">
                            <span data-num="3">周六 12-19</span>
                            <span data-num="3" className="font-icon">惠</span>
                        </li>
                    </ul>
                    <span className="move abs" style={{left: `${2.1*this.state.num}rem`}}></span>
                </section>
                <div className="tips">温馨提示:开场前15分钟关闭在线售票</div>  
                <section className="play-date">
                    <section style={{display: this.state.num === 0 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic nd vm"></i>
                            <em className="lef">下午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">12:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">14:14 散场</span>
                                        <span className="fo f3">一号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">14:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">16:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">16:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">18:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic ad vm"></i>
                            <em className="lef">晚上场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">19:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">21:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">22:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">0:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section style={{display: this.state.num === 1 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic md vm"></i>
                            <em className="lef">上午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">10:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">12:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic nd vm"></i>
                            <em className="lef">下午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">12:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">14:14 散场</span>
                                        <span className="fo f3">一号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">14:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">16:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">16:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">18:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic ad vm"></i>
                            <em className="lef">晚上场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">19:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">21:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">22:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">0:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section style={{display: this.state.num === 2 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic ad vm"></i>
                            <em className="lef">晚上场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">19:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">21:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">22:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">0:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section style={{display: this.state.num === 3 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic md vm"></i>
                            <em className="lef">上午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">10:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">12:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                </section> 
            </section>
        )
  }
}
