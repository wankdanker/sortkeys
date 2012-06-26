sortkeys
--------

This function returns a copy of an object whose keys are sorted by the default 
method of `Array.sort().`

An example should explain it:

```javascript

var sortkeys = require('sortkeys');

var objToSort = {
  d : "is for dog"
  , c : "is for cat"
  , f : "is for fig"
  , a : "is for ant"
};

console.log(sortkeys(objToSort));

/*
{ a: 'is for ant',
  c: 'is for cat',
  d: 'is for dog',
  f: 'is for fig' }
*/
```