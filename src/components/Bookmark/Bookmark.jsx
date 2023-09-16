import React from 'react';


const Bookmark = ({ bookmark, remaing}) => {
 
  const { course_name } = bookmark;
  // console.log(bookmark)
  return (
    <div className='bg-slate-100 p-4 text-black'>
      
      <ul className='list-disc px-2'>
      <li>{course_name}</li>
      </ul>
      
     
    </div>
    
  );
};

export default Bookmark;