sortkeys
--------

[![Build Status](https://travis-ci.org/wankdanker/sortkeys.svg)](https://travis-ci.org/wankdanker/sortkeys)

This function recursively sorts the keys of an object according to `Object.keys(obj).sort().`

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

license
-------

MIT
