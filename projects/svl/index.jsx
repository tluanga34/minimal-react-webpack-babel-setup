import React from 'react';
import ReactDOM from 'react-dom';

// import App from '../../shared/App';
import '../../src/style.css';
import CategoryCard from '../../shared/ui_components/category/CategoryCard';


const App = () => {
  return (
    <div className="grid-parent">
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
      <CategoryCard title="Men's Fashion" subTitle="Save 10% off start from today." />
    </div>
  )
}



ReactDOM.render(
  <App></App>,
  document.getElementById('app')
);

module.hot.accept();
