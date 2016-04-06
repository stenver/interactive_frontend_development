# Webpack example

To use:
```
npm install
webpack
open index.html // On Mac, this is valid command in terminal
```

Open the console in your browser, you should see "boop"

## Explanation
npm install installs all the package dependencies

Webpack bundles the file tree extracted from main.js into a single file - bundle.js. It has a babel-loader loader, which transpiles the es2015 code into standard javascript

Opening index.html shows the results. The index.html requires the generated bundle.js
