import React, { Component } from 'react';
import classnames from 'classnames'
import './Header.scss';

export default class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            area: '全部区域',
            showArea: false,
            allArea: [],
            regionOrder: [],
            regionCinemas: {}
        }
    }

    componentWillMount () {
        this.getAreaData(this.props.city.name)
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.city.name != nextProps.city.name) {
            this.getAreaData(nextProps.city.name);
            this.props.updateArea('全部区域');
        }
    }

    showCity () {
        this.props.showCity();
    }

    showAreaBox () {
        this.setState({
            showArea: true
        }) 
    }

    cancelAreaBox (event) {
        if (event.target.id === 'ci-mask') {
            this.setState({
                showArea: false
            }) 
        }
    }

    getAreaData (cityName) {
        let cityStr = this.matchCityStr(cityName)
        this.props.requestData(`/movie/cinema/?city=${cityStr}`).then((data) => {
            let regionOrder = data.data.data.returnValue.regionOrder;
            let regionCinemas = data.data.data.returnValue.regionCinemas;
            let allArea = [];
            regionOrder.forEach((item) => {
                regionCinemas[item].forEach((cinema) => {
                    allArea.push(cinema)
                })
            })
            regionOrder.unshift('全部区域');
            regionCinemas = {'全部区域': allArea, ...regionCinemas};
            this.setState({
                allArea: allArea,
                regionOrder: regionOrder,
                regionCinemas: regionCinemas
            })
            this.props.getAreaData(regionCinemas);
        })
    }

    matchCityStr (str) {
        let randomList = ['bj', 'sh', 'gz']
        let randomCity = randomList[Math.floor(3*Math.random())]
        switch (str) {
            case '北京': return 'bj'
            case '上海': return 'sh'
            case '广州': return 'gz'
            default: return randomCity
        }
    }

    selectAreaAction (event) {
        let str = event.target.innerHTML.trim()
        let reg = /([\u4e00-\u9fa5]*)\（/
        this.setState({
            area: reg.exec(str)[1],
            showArea: false
        });
        this.props.updateArea(reg.exec(str)[1]);
    }

    render () {
        return (
            <section id='ci-mask' className={classnames({
                'mask': this.state.showArea
            })} onClick={this.cancelAreaBox.bind(this)}>
                <header className="ci-header">
                    <div onClick={this.showCity.bind(this)}>
                        <span className="ci-n">{this.props.city.name}</span>
                        <span className="ci-i"></span>
                    </div>
                    <div onClick={this.showAreaBox.bind(this)}>
                        <span className="ci-n">{this.props.cinema.area}</span>
                        <span className="ci-i"></span>
                    </div>
                </header>
                <ul className="area-list" onClick={this.selectAreaAction.bind(this)}
                    style={{display: this.state.showArea ? 'block' : 'none'}}>
    {
        this.state.regionOrder.map((item) => {
            return  <li key={item}>
                        {`${item}（${this.state.regionCinemas[item].length}）`}
                    </li>
        })
    }
                </ul>
            </section>
        	
        )
  }
}

Header.propTypes = {
    city: React.PropTypes.object.isRequired,
    updateArea: React.PropTypes.func.isRequired,
    showCity: React.PropTypes.func.isRequired,
    requestData: React.PropTypes.func.isRequired,
    getAreaData: React.PropTypes.func.isRequired,
    updateArea: React.PropTypes.func.isRequired
}

