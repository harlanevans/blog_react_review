import React from 'react';

const Blog = (props) => {
  return(
    <div className='box-border'>
      <p>Blog Title: {props.title}</p>
      <p>Body: {props.body}</p>
      <button onClick={() => props.removeBlog(props.id)}>delete</button>
    </div>
  )
}

export default Blog;