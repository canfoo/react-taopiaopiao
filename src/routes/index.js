import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from '../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./Home'))
const AsyncCinema = asyncComponent(() => import('./Cinema'))
const AsyncMe = asyncComponent(() => import('./Me'))
const AsyncMoveDetail = asyncComponent(() => import('./MovieDetail'))
const AsyncCinemaDetail = asyncComponent(() => import('./CinemaDetail'))

const routes = _ => (
    <div>
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/cinema/detail/:id" component={AsyncCinemaDetail} />
          <Route path="/cinema" component={AsyncCinema} />
          <Route path="/me" component={AsyncMe} />
          <Route path="/movie/detail/:id" component={AsyncMoveDetail} />
        </Switch>
    </div>
);

export default routes;
