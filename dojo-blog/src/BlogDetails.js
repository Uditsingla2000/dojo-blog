import React from 'react'
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch';

export default function BlogDetails() {
    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isPending, error } = useFetch('http://localhost:8001/blogs/' + id);
    const handleDelete = () => {
        fetch('http://localhost:8001/blogs/' + id, {
            method: 'DELETE'
        }).then(() =>
            history.push('/')
        )
    }

    return (
        <div className="blog-details">
            {isPending && <>Loading...</>}
            {error && <>{error}</>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by {blog.author}</h3>
                    <p>{blog.body}</p>
                </article>
            )}

            <button type="reset" onClick={handleDelete}>Delete Blog</button>

        </div>
    )
}
