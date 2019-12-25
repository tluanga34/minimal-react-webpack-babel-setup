import React from 'react';
import ReactDOM from 'react-dom';

import App from '../../shared/App';
import CategoryCard from '../../shared/ui_components/category/CategoryCard';

ReactDOM.render(
  <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />,
  document.getElementById('app')
);

module.hot.accept();
