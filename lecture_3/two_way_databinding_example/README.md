# Two-way databinding example

To use:
```
npm install
npm start
```

Open http://localhost:3000 in your browser

## Explanation

Check out CommentBoxContainer. We have a function `#handleCommentSubmit`. This function is passed down to until it makes its way to the CommentForm. When the function is called, it fakes a request to server where it will submit the new comment and updates the state.

Check out CommentForm. In previous lecture we simply handled the input. In this lecture we will create two-way data flow. The input fields have been put between `<form>` tags and a submit button is added. When user submits the response the `#handleSubmit` on the `<form>` is called. `#handleSubmit` does any validations and trimmings needed. Then it calls the `prop.handleCommentSubmit`, invoking the two-way data binding. Data now flows back from this component all the way to the CommentBoxContainer. Finally the state is cleared on the form.
