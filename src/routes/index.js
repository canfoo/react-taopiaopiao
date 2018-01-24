import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import MovieDetail from './MovieDetail'
import Cinema from './Cinema'
import CinemaDetail from './CinemaDetail'
import Me from './Me'
import NoData from './NoData'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'
import asyncComponent from '../components/AsyncComponent'

const AsyncHome = asyncComponent(() => require('./Home'))
// const AsyncMe = asyncComponent(() => require('./Me'))
const AsyncMe = asyncComponent(() => require('./Me'))



export default _ => (
    <div>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/me" component={AsyncMe} />
        </Switch>
    </div>
);
