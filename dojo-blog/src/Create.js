import React, { useState } from 'react'

export default function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending,setIsPending] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true);
        console.log(JSON.stringify(blog))


        fetch('http://localhost:8001/blogs',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            setIsPending(false)
            console.log("new blog added");
        })
    }

    return (
        <div className='create'>
            <h1>Create a Blog</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input type="text" required
                    value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="">Blog body:</label>
                <textarea type="text" required
                    value={body} onChange={(e) => setBody(e.target.value)} />

                <label htmlFor="">Author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding</button>}
            </form>
        </div>
    )
}
