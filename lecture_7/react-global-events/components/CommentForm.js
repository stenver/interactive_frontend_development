import React from "react";

const CommentForm = (props) => {
  const handleAuthorChange = (event) => props.handleAuthorChange(event.target.value);
  const handleTextChange = (event) => props.handleTextChange(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(props.author, props.text);
  }

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={props.author}
        onChange={handleAuthorChange}
      />
      <input
        type="text"
        placeholder="Your text"
        value={props.text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Post" />
    </form>
  );
};

CommentForm.propTypes = {
  author: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  handleAuthorChange: React.PropTypes.func.isRequired,
  handleTextChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

export default CommentForm;
