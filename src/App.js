import React from "react";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import "./App.css";

class App extends React.Component {
  state = {
    blogs: [
      // New blog
      { id: 1, title: "Welcome", body: "this is my super rad blog" },
      {
        id: 2,
        title: "New Blog Post",
        body: "Hey friendos this is my second blog"
      }
    ],
    isAdding: false
  };
  // Logic, methods, functions,

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addBlog = blog => {
    let newBlog = { id: this.getId(), ...blog };
    this.setState({ blogs: [newBlog, ...this.state.blogs] });
  };

  removeBlog = (id) => {
    const { blogs } = this.state;
    const removeBlogs = blogs.filter(blog => {
      if (blog.id !== id)
      return blog
    });
    this.setState({blogs: [...removeBlogs]})
  }

  // removeContact = (id) => {
  //   const contacts = this.state.contacts.filter(contact => {
  //     if (contact.id !== id)
  //       return contact
  //   });
  //   this.setState({ contacts: [...contacts], });
  // };


  toggleForm = () => {
    this.setState({ isAdding: !this.state.isAdding });
  };

  render() {
    // Bring things into scope for our return

    const { isAdding } = this.state;
    return (
      <div className="main-cont">
        <button onClick={this.toggleForm}>Toggle Form</button>
        {isAdding ? <BlogForm addBlog={this.addBlog} /> : <></>}
        <Blogs blogs={this.state.blogs} removeBlog={this.removeBlog} />
      </div>
    );
  }
}

export default App;
