import React from "react";

class BlogForm extends React.Component {
  state = { title: "", body: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBlog(this.state);
    this.setState({ title: "", body: "" });
    // Call a function to add a contact to state
    // Where should this function be defined???
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, body } = this.state;
    return( 
    <>
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="Title"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <input 
          placeholder="Body"
          name="body"
          value={body}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>Submit!</button>
      </form>
    </>
    )
  }
}

export default BlogForm;
