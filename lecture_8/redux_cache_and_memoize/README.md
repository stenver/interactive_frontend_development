# Redux cache miss

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

Let's memoize the individual calls to NextWord and PastWord.
Even if the collection of PastWords and NextWords stays the same, all but one of the individual elements actually stay the same.

We need to reverse the index of a NextWord, otherwise it keeps changing for all the elements when an element is prepended to the list.
We could reverse nextwords and append to it to avoid this, but reversing the index is a simpler solution.
