# Basic react example

To use:
```
npm install
npm start
```

Open http://localhost:3000 in your browser

## Explanation

We needed to add a couple of dependencies for react to work with JSX:
```
react
react-dom
babel-loader
babel-core
babel-preset-es2015
babel-preset-react
```
The webpack configuration has assed `react` preset for the transpiler.

Once the DOM has loaded, our react script is loaded and react renders itself on the Div with id "content".
