import React,{useState} from 'react'
import items from './data';
import '../CSS/Categories.css'
import CourseDetails from './CourseDetail';
import Categories from "./Categories";
const allCategories=["all" , ...new Set(items.map((item)=>item.category))];


export default function Courses() {
  const[courseItems,setCourseItems]=useState(items)
  const[activeCategory,setActiveCategory]=useState("");
  const[categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    setActiveCategory(category);
    if(category === "all"){
        setCourseItems(items);
        return;
    }
    const newItems= items.filter((item)=>
        item.category === category);
        setCourseItems(newItems)
    };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Courses</h2> 
        </div>
        <div className=''>
            <Categories 
            categories={categories} 
            activeCategory={activeCategory} 
            filterItems={filterItems}/>
        </div>
        <CourseDetails items={courseItems}/>
      </section> 
    </main>
  )
}

