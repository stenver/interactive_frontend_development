# Basic redux example

To use:
```
npm install
npm start
open http://localhost:3000
```

## Explanation
The reducers contains an index.js. This file contains our application Update part.
We currently support 2 actions - `Increment` and `Decrement`.

The application store is created in main.js. This store contains the entire application state. A single source of truth. You can ask the state from the store, or you can dispatch actions on the store. In this case, the React component gets the state and both of the actions handed to it as props.

The component Counter.js is a pure function that takes the value and both actions. It puts the value to the DOM and creates 2 buttons which can call the actions `Increment` and `Decrement`.

Note that the actions are the only way to update the state of the application.
