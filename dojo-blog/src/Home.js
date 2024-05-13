import React from 'react'
import {useState,useEffect} from "react";
import BlogList from './BlogList'


export default function Home() {

  const [blogs,setBlogs] = useState(null);
  const [isPending,setIsPending] = useState(true);
  const [error,setError] = useState(null)


  // const handleDelete = (id) =>{
  //   const newBlogs = blogs.filter(blog=> blog.id!== id);
  //   setBlogs(newBlogs);
  // }

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:8001/blogs')
    .then(res => {

      if(!res.ok){
        throw Error('could not fetch data');
      }

      return res.json()
    })
    .then(data=> {
      console.log(data);
      setBlogs(data);
      setIsPending(false);
      setError(null)
    })
    .catch((err)=>{
      setError(err);
      setIsPending(false);
      console.log(err);
    })
    },1500)
  },[]);

  return (
    <div className="Home">
      {isPending && <>Loading....</>}
      {error && <>{error}</>}
     {blogs && <BlogList blogs={blogs} title= "All blogs" ></BlogList>}
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title= "Mario's blogs" ></BlogList> */}
      {/* {name}
      <button onClick={()=>setName('luigi')}>useEffect</button> */}

    </div>
  )
}
