
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([])
const[remaing,setremaing]=useState(0)
const[totalcredit,settotalcredit]=useState(0)



const handleAddTOBookmark =blog =>{
  const isExist=bookmarks.find((item)=> item.id == blog.id)
  
  let count=blog.credit
  if (isExist){
    return alert("Already Setected this card")
  }
  else{
    bookmarks.forEach(item=>{
      count=count+item.credit
    })
    const totalremaing=20-count
    if (count > 20){
      return alert("Total credit will not more than 20")
    }else{
      settotalcredit(count)
      setremaing(totalremaing)
      const newBookmarks =[...bookmarks,blog]
      setBookmarks(newBookmarks)
    }
   
  }
}
  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'>
     
        <Blogs handleAddTOBookmark={handleAddTOBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks} remaing={remaing} totalcredit={totalcredit}></Bookmarks>
      </div>
    </>
  )
}

export default App
