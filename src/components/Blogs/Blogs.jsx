
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="md:col-span-2 lg:col-span-3">
    

      {/* <h1 className="text-4xl">Blogs {blogs.length}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
        {
          blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;