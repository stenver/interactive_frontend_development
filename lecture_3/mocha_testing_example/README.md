
# Mocha testing example

To use:
```
npm install
npm test
```

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


*mocha* and *babel* integration is defined in test/mocha.opts.  
That file also defines *mocha* transpilation and how *mocha* 
searches for tests and displays test results.  
*test/mocha.opts* file is used by *mocha* automatically.

Check out test/test_helper.js for how *jsdom* can be used to mock out the DOM.  
*chai* and *sinon-chai* are also set up in the same file.  
The *test/test_helper.js* file is required by *mocha* automatically.


We are using `react-addons-test-utils` for testing react components.

## Additional resources
[Testing React with Mocha and jsdom](https://github.com/jesstelford/react-testing-mocha-jsdom)   
[Testing React apps with Mocha](http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/)
