import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch';


export default function Home() {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8001/blogs');


  // const handleDelete = (id) =>{
  //   const newBlogs = blogs.filter(blog=> blog.id!== id);
  //   setBlogs(newBlogs);
  // }


  return (
    <div className="Home">
      {isPending && <>Loading....</>}
      {error && <>{error}</>}
      {blogs && <BlogList blogs={blogs} title="All blogs" ></BlogList>}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title= "Mario's blogs" ></BlogList> */}
      {/* {name}
      <button onClick={()=>setName('luigi')}>useEffect</button> */}

    </div>
  )
}
