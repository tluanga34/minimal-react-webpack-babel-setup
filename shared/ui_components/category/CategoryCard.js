import React from 'react';
import './css/category_card.scss';

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