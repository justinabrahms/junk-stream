# junk-stream

Generates streams of junk objects.

## Getting Started
Install the module with: `npm install junk-stream`

```javascript
var junk_stream = require('junk-stream');

var junk_tube = junk_stream.junk_stream(1000, {
  key: Number
  , val: String
});

junk_tube.on('data', console.log);

setTimeout(function () {
  junk_tube.destroy();
}, 10000);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing
coding style. Add unit tests for any new or changed
functionality. Lint and test your code using
[grunt](https://github.com/gruntjs/grunt).

## Release History
0.1.0 - Initial release.

## License
Copyright (c) 2013 Justin Abrahms  
Licensed under the MIT license.
