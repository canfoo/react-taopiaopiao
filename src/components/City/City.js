import React from 'react';
import './City.scss';

import provinceData from './assets/province';
import { ListView, List } from 'antd-mobile';

for (let key in provinceData) {
	for(let i = 0 ; i < provinceData[key].length; i++) {
		provinceData[key][i].QF = key;
		provinceData[key][i].label = provinceData[key][i].regionName;
		provinceData[key][i].spell = provinceData[key][i].pinYin;
		provinceData[key][i].value = provinceData[key][i].cityCode;
	}
}

let hotArr = [
	{
		QF: "热门",
		label: "北京",
		spell: "Beijing",
		value: "34"
	},
	{
		QF: "热门",
		label: "上海",
		spell: "Shanghai",
		value: "35"
	},
	{
		QF: "热门",
		label: "广州",
		spell: "Guangzhou",
		value: "36"
	},
];

var province = {'热门': hotArr, ...provinceData};
const { Item } = List;

const City = React.createClass({
  	getInitialState() {
    	const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    	const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    	const dataSource = new ListView.DataSource({
			getRowData,
			getSectionHeaderData: getSectionData,
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    	});

	    const dataBlob = {};
	    const sectionIDs = [];
	    const rowIDs = [];
	    Object.keys(province).forEach((item, index) => {
			sectionIDs.push(item);
			dataBlob[item] = item;
			rowIDs[index] = [];

			province[item].forEach(jj => {
				rowIDs[index].push(jj.value);
				dataBlob[jj.value] = jj.label;
			});
	    });
	    return {
			dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
			headerPressCount: 0,
			show: false
	    };
  	},

  	componentWillReceiveProps (nextProps) {
  		if (nextProps.city.show) {
  			this.setState({
  				show: true
  			})
  		} else {
  			this.setState({
  				show: false
  			})
  		}
  	},

  	getCityItem (event) {
  		let ele = event.target
  		if (ele.className === 'am-list-content' && !/div/.test(ele.innerHTML)) {
  			this.props.updateCity(ele.innerHTML);
  		}
  	},

  	closeCity () {
  		this.props.closeCity();
  	},

  	render() {
    	return (
	    	<div id="city" className="fadeInDown" onClick={this.getCityItem}
				style={{display: this.state.show ? 'block' : 'none'}}>
				<span className="close-city" onClick={this.closeCity}>×</span>
	    		<ListView.IndexedList
					dataSource={this.state.dataSource}
					renderHeader={() => <span>选择城市</span>}
					renderSectionHeader={(sectionData) => (<div className="ih">{sectionData}</div>)}
					renderRow={(rowData) => (<Item>{rowData}</Item>)}
					className="fortest"
					style={{
						height: '100%',
						overflow: 'auto',
					}}
					quickSearchBarStyle={{
						position: 'absolute',
						top: 150,
					}}
	    		/>
    	</div>
    );
  },
});

export default City
