import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,totalcredit,remaing}) => {
  return (
   
    <div className=''>
       <h2 className='text-2xl'>Credit Hour Remaining {remaing}</h2>
      {/* <h1>bookmarks:{bookmarks.length}</h1> */}
      <h2 className='text-2xl'>Course Name</h2>
      
      {
        bookmarks.map(bookmark => <Bookmark  key={bookmark.id} bookmark={bookmark}></Bookmark>)
        
      }
      <h2 className='text-2xl'>Total Credit Hour: {totalcredit}</h2>
    
    </div>
  );
};

export default Bookmarks;