# Webpack-dev-server example

To use:
```
npm install
npm start
```

Open http://localhost:3000 in your browser

## Explanation

In this example we handle user input and bring in two-way data binding.

The commentForm now has 2 text input tags in it where it can capture user input. We explicitly specify its starting value and what happens if the value changes.

The submit input works as usual and we define handle submit on the form #onSubmit.

When a text input value is changed, we save the new state. When submission is done, we call the #onCommentSubmit prop which propagates up to the parent which gave us this method. This is where two-way data binding comes into play.
