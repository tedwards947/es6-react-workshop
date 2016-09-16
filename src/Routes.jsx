import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import PlayerSurface from './components/PlayerSurface';
//import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="video/" component={PlayerSurface} />
    <Route path="video/:id" component={PlayerSurface} />
    {/*<Route path="*" component={NotFoundPage}/>*/}
  </Route>
);

export default routes;