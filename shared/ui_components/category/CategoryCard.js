import React from 'react';
import './css/category_card.scss';

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log('process.env.project', process.env.project)

const CategoryCard = ({ title, subTitle, imgeUrl }) => {
  return (
    <div className="category-card">
      <div className="inner-container">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  )
}


export default CategoryCard;