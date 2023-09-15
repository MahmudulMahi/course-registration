import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className=''>
      <h1>bookmarks:{bookmarks.length}</h1>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;