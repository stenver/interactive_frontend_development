
# Mocha testing example

To use:
```
npm install
npm test
```

## Debugging
Install and run [node-inspector](https://github.com/node-inspector/node-inspector)
```
npm install -g node-inspector
node-inspector
```
Put a `debugger` keyword to the test you want to debug

In another terminal window, run
```
npm run test-debug
```
Open chrome browser on url [http://127.0.0.1:8080/?port=5858](http://127.0.0.1:8080/?port=5858)
Continue onward from the first breakpoint and wait for ~30 seconds for the mocha to load everything.

## Debugging with bugger

You can also debug with [bugger](https://github.com/buggerjs/bugger). This is a lot faster than the node-inspector

Put a `debugger` keyword to the test that you wish to debug.

Now run the command `npm run test-debug-bugger`. This will give you a chrome URL, similar to this:
```
chrome-devtools://devtools/bundled/inspector.html?ws=127.0.0.1:8058/devtools/page/F80943B0-F771-11E5-B589-6522C32A017C
```
Open this URL in the browser and the bugger will break at the beginning of script. Press continue and then it will break at your breakpoint.

## Explanation

All the test are in the test/ folder.

Package json has following deps:

* [jsdom](https://github.com/tmpvar/jsdom)
* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)
* [sinon-chai](https://github.com/domenic/sinon-chai)


*jsdom* is an implementation of the DOM.  
*jsdom* allows running tests headlessly, without opening a particular browser.  
Running tests headlessly is a lot faster than running them in the browser.

*mocha* is the test framework.  
It is very unopinionated, allowing writing tests, asserting and mocking in multiple different ways.

Here we are using *chai* to write expectations like
`expect(myNumber).to.eq(1);`  
`expect(myArray).to.eql([1, 2]);`  
The *chai* documentation provides good examples on how to write expectations.

Mocka does not mock anything by default, everything needs to be mocked explicitly.  
For mocking we can use *sinon*.  
A simple function stub can be created like this:
`let myFunc = sinon.stub();`

For asserting function calls we can use *sinon-chai*,   
which allow writing expectations like this:

```js
let myFunc = sinon.stub();
// ...
expect(myFunc).to.have.been.calledOnce;
expect(myFunc).to.have.been.calledWith(sinon.match.number, {my: 'object'});
```


*mocha* and *babel* integration is defined in *test/mocha.opts*.  
That file also defines *mocha* transpilation and how *mocha* 
searches for tests and displays test results.  
The file defines that *test/test_helper.js* should be required for every test.  

*test/mocha.opts* file is used by *mocha* automatically.

Check out test/test_helper.js for how *jsdom* can be used to mock out the DOM.  
*chai* and *sinon-chai* are also set up in the same file.  


We are using `react-addons-test-utils` for testing react components.

## Additional resources
[Testing React with Mocha and jsdom](https://github.com/jesstelford/react-testing-mocha-jsdom)   
[Testing React apps with Mocha](http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/)
