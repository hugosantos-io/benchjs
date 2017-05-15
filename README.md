# BenchJS

BenchJS is simple benchmark time track Node.js library

The following snippet:

```js
var bench = require('benchjs');

// Benchmark the time between executions
var start = bench.mark();
setTimeout(function() {
    var time = bench.mark(start);
    console.log(time);
}, 2000);
```

Will print:

```js
{
    nanoseconds: 5480017,
    microseconds: 5480,
    milliseconds: 5,
    seconds: '02',
    minutes: '00',
    hours: '00',
    time: '00:00:02.5',
    message: '[00:00:02.5]'
}
```

## Installation

```bash
$ npm install -s benchjs
```

## Contributing

  This package is under development. Pull requests are welcomed.

## People

  The current lead maintainer is [Hugo Santos](https://github.com/hugosantos-io/benchjs)

## License

  [ISC](LICENSE)