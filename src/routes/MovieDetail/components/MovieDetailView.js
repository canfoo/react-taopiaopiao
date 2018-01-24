import React, { Component } from 'react';
//使用withRouter导出MovieDetailView时会在其props加上router这个属性的
import { Link, withRouter } from 'react-router-dom';
import MovieDetaiHeader from './Header';
import Introduction from './Introduction';
import Picture from './Picture.js'
import Evaluation from './Evaluation'
import Back from '../../../components/Back'
import './MovieDetaiView.scss';

class MovieDetailView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            detailStr: false,
            movieObj: {},
            description: '',
            artistes: [],
            trailer: [],
            evalLists: []
        }
    }

	componentWillMount () {
        if (!this.props.request) {
            this.props.router.push('/')
            return false
        }
        console.log(this.props)
        let lists = this.props.request.json.data.data.data.returnValue
        let movieObj = this.getObjById(this.props.params.id, lists)
        let detailStr = movieObj.detailStr
        if (detailStr) {
            this.props.requestData(`/movie/info/?name=${detailStr}`).then((data) => {
                let infoObj = data.data.data.returnValue;
                let trailer = [];
                infoObj.trailer.forEach((item, index) => {
                    trailer.push({
                        avatar: item,
                        roleName: '',
                        profession: '',
                        id: index
                    })
                })
                this.setState({
                    description: infoObj.description,
                    artistes: infoObj.artistes.actor,
                    trailer: trailer
                })
            })
            this.props.requestData(`/movie/evaluation/?name=${detailStr}`).then((data) => {
                let evalLists = data.data.data.returnValue;
                this.setState({
                    evalLists: evalLists
                })
            })
        }
        this.setState({
            detailStr: detailStr,
            movieObj: movieObj
        })
	}

    getObjById (id, lists) {
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].mID === +id) {
                return lists[i]
            }
        }
        return false
    }

    isExpand () {
        this.setState({
            expand: !this.state.expand
        })
    }

    render () {
        let md = null;
        if (this.state.detailStr) {
            md = (
                    <section>
                        <Introduction description={this.state.description} />
                        <Picture hasName={true} title="演职人员" lists={this.state.artistes}/>
                        <Picture hasName={false} title="剧照" lists={this.state.trailer}/>
                        <Evaluation evalLists={this.state.evalLists}/>
                    </section>
                )
        } else {
            md = (
                    <div className="md-nodata">暂时没有更多数据～</div>
                )
        }
        return (
        	<section id="MD">
                <MovieDetaiHeader movieObj={this.state.movieObj}/>
                {md}
                <Back router={this.props.router} />
            </section>
        )
  }
}

export default withRouter(MovieDetailView);
