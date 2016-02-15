<<<<<<< HEAD
BenchJS
========
BenchJS is simple benchmark time track Node.js library

```js
var bench = require('benchjs');

// Benchmark the time between executions
var start = bench.mark();
setTimeout(function(){
  var time = bench.mark(start);
  console.log(time);
}, 100);
```

## Installation

```bash
$ npm install benchjs
```

## Contributing

  This package is under development. Pull requests are welcomed.

## People

  The current lead maintainer is [Hugo Santos](https://github.com/hs-hugosantos)

## License

  [ISC](LICENSE)a
=======
# benchjs
BenchJS is simple benchmark time track Node.js library
>>>>>>> 676eb37260854953ee845afbe541f1a5832f0bb6
