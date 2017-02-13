import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Cinema from './Cinema';
import CinemaDetail from './CinemaDetail';
import Me from './Me';
import NoData from './NoData';
import PageNotFound from './PageNotFound';
import Redirect from './PageNotFound/redirect';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home(store),
  childRoutes: [
    MovieDetail(store),
    Cinema(store),
    CinemaDetail(store),
    Me(store),
    NoData(store),
    PageNotFound(),
    Redirect
  ]
})

export default createRoutes;
