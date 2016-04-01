define(["react", "react-dom", "./components/SpeedTyper.js"],
  (React, ReactDOM, SpeedTyper) => {

  ReactDOM.render(
    <div>
      <SpeedTyper />
    </div>,
    document.getElementById('content')
  );
});
