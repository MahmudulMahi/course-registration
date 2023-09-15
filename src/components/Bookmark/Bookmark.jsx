import React from 'react';


const Bookmark = ({ bookmark }) => {
 
  const { course_name } = bookmark;
  return (
    <div className='bg-slate-100 p-4 text-black'>
      <h3 className='text-xl'>{course_name}</h3>
     
    </div>
  );
};

export default Bookmark;