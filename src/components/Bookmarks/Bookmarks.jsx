import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className=''>
      {/* <h1>bookmarks:{bookmarks.length}</h1> */}
      <h2 className='text-2xl'>Course Name</h2>
      
      {
        bookmarks.map(bookmark => <Bookmark  key={bookmark.id} bookmark={bookmark}></Bookmark>)
        
      }
      <h2 className='text-2xl'>Total Credit Hour:</h2>
    
    </div>
  );
};

export default Bookmarks;