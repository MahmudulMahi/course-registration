
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'>
     
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
