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

## Explanation

Package json has following deps:
```
bugger
```
We also created a .babelrc file for the Jest, so it can figure out how to do the transpiling.

Tests are all in __tests__ folder.

Jest mocks out everything by default, so you need to explicitly unmock dependencies.

We are using `react-addons-test-utils` for testing react components.
