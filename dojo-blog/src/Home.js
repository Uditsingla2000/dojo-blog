import React from 'react'
import {useState} from "react";
import BlogList from './BlogList'

export default function Home() {

  const [blogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog=> blog.id!== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="Home">
      <BlogList blogs={blogs} title= "All blogs" handleDelete={handleDelete} ></BlogList>
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title= "Mario's blogs" ></BlogList> */}

    </div>
  )
}
