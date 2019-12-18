import React from "react";
import Blog from './Blog';

class Blogs extends React.Component {
  // THis has props from App.js

  renderBlogs = () => {
    // const { blogs, deleteBlog } = this.props;
    return this.props.blogs.map(blog => (
      
      <div style={{padding: '1em'}}>
        <Blog key={blog.id} {...blog} removeBlog={this.props.removeBlog} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        {this.renderBlogs()}
      </div>
    );
  }
}

export default Blogs;
