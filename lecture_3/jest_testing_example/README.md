# Jest example

To use:
```
npm install
npm run test-debug
```
In the console you will see something like:
```
chrome-devtools://devtools/bundled/inspector.html?ws=127.0.0.1:8058/devtools/page/78C49900-F72C-11E5-B8F4-D3502EF6233F
```
Open this url in the browser

## Debugging

Put the keyword `debugger` to a test you want to debug. For example in Comment-test.js on line 30.

Run the command:
```
npm run test-debug
```

A chrome URL is given in the test. Something like this:
```
chrome-devtools://devtools/bundled/inspector.html?ws=127.0.0.1:8058/devtools/page/F80943B0-F771-11E5-B589-6522C32A017C
```

The test will automatically run until breakpoint. You can now debug in the console. Note that variable names will have probably changed during the transpilation. You can check the names in the source.

## Explanation

Package json has following deps:
```
jest-cli
babel-jest
babel-polyfill
bugger
```

*jest-cli* is a testing framework, automocking all the dependencies by default and built on top of *jasmine*.
*bugger* is an experimental browser runner, which allows you to debug your tests in the browser.
*babel-jest* and *babel-polyfill* lets us use JSX in our tests

We also created a .babelrc file for the Jest, so it can figure out how to do the transpiling.

Tests are all in __tests__ folder.

Jest mocks out everything by default, so you need to explicitly unmock dependencies.

We are using `react-addons-test-utils` for testing react components.

Comment-test, CommentBoxContainer-test and CommentForm-test are testing on the DOM.

CommentBox-test and CommentList-test are testing on shallow DOM.
