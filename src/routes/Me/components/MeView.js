import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { List } from 'antd-mobile';
import Back from '../../../components/Back';

const Item = List.Item;
const Brief = Item.Brief;

function link (router) {
	router.push('/no');
}

const Me = ({router}) => {
	console.log(123112);
	return (
		<section>
			<List>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>我的电影票</Item>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>优惠券</Item>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>兑换券</Item>
				<Item extra="" arrow="horizontal" onClick={() => {link(router)}}>帮助中心</Item>
			</List>
		</section>
	)
}

export default Me;
