import React from 'react';
import ReactDOM from 'react-dom';

import App from '../shared/App';

const title = 'My Minimal React Webpack Babel Setup. This is cool';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
