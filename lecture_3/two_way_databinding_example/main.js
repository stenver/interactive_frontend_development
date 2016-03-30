define(["react", "react-dom", "./components/CommentBoxContainer.js"],
  (React, ReactDOM, CommentBoxContainer) => {

  ReactDOM.render(
    <CommentBoxContainer />,
    document.getElementById('content')
  );
});

