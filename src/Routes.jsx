import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import PlayerSurface from './components/PlayerSurface.jsx';
import NotFound from './components/NotFound.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="video" component={PlayerSurface} />
    <Route path="video/:id" component={PlayerSurface} />
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;