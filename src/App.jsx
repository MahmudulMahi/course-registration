
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([])



const handleAddTOBookmark =blog =>{
  const isExist=bookmarks.find((item)=> item.id == blog.id)
  
  
  if (isExist){
    alert("already has")
  }
  else{
    const newBookmarks =[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
}
  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'>
     
        <Blogs handleAddTOBookmark={handleAddTOBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
