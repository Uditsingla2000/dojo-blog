import {Link} from 'react-router-dom'

export default function BlogList({ blogs, title, handleDelete }) {
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/* <button type="reset" onClick={() =>handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  )
}
