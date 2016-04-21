// Middleware is a curried function

let myMiddleware = (id) => (store) => (next) => (action) => {
  console.log(store)
  console.trace("My middleware before calling next", id, action);
  const result = next(action);
  console.trace("My middleware after calling next", id, action);
  return result;
}

export default myMiddleware
