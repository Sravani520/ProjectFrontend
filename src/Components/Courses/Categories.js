import React from 'react'
import  PropTypes  from 'prop-types';
import '../CSS/Categories.css'

export default function Categories({categories,filterItems,activeCategory}) 
{
    Categories.propTypes={
        categories:PropTypes.node,
        filterItems:PropTypes.node,
        activeCategory:PropTypes.node,
    }

    return(
    <div className='btn-container'>
        {categories.map((category, index)=>{ 
    return (
    <button 
    type="button"
    className={`${
        activeCategory === category ? "filter-btn active" : "filter-btn"
    }`}
    key={index}
    onClick={()=> filterItems(category)}
    >
    {category}
    </button>
  );
})}
</div>
);
}

 