import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/article",
    "exact": true,
    "component": require('../article/index.jsx').default
  },
  {
    "path": "/article/about",
    "exact": true,
    "component": require('../article/about.jsx').default
  },
  {
    "path": "/article/contact",
    "exact": true,
    "component": require('../article/contact.jsx').default
  },
  {
    "path": "/categories",
    "exact": true,
    "component": require('../categories/index.jsx').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('../index/index.jsx').default
  },
  {
    "component": () => React.createElement(require('C:/Users/Administrator/AppData/Roaming/nvm/v9.8.0/node_modules/umi/node_modules/_umi-build-dev@1.5.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
