import React, { Component } from 'react';
import './Evaluation.scss';

export default class Evaluation extends Component {
    render () {
        return (
        	<section id="md-eval">
                <header>
                    <span>热门评价</span>
                </header>  
                <ul className="eval-lists">
    {
        this.props.evalLists.map((item) => {
            return  <li key={item.id}>
                        <div className="eval-l l">
                            <figure>
                                <img src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_100x100.jpg" alt=""/>
                            </figure>
                        </div>
                        <div className="eval-r">
                            <div>
                                <span className="eval-u-name">{item.nickName}</span>
                                <div className="full-star rel">
                                    <div className="score-start" style={{width: `${item.remark*10}%`}}></div> 
                                </div>
                                <span className="eval-u-time r">12-05 16:07</span>
                            </div>
                            <article className="eval-font">
                                {item.content}
                            </article>
                        </div>
                    </li>
        })
    }  
                </ul> 
                <div className="nomore-data">没有更多了～</div>
            </section>
        )
  }
}

Evaluation.propTypes = {
    evalLists: React.PropTypes.array.isRequired
}
