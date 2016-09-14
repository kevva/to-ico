# to-ico [![Build Status](https://travis-ci.org/kevva/to-ico.svg?branch=master)](https://travis-ci.org/kevva/to-ico)

> Convert PNG to ICO in memory


## Install

```
$ npm install --save to-ico
```


## Usage

```js
const fs = require('fs');
const toIco = require('to-ico');

const files = [
	fs.readFileSync('unicorn-16x16.png'),
	fs.readFileSync('unicorn-32x32.png')
];

toIco(files).then(buf => {
	fs.writeFileSync('favicon.ico', buf);
});
```


## API

### toIco(input, [options])

#### input

Type: `Array` `string`

An array of PNG image buffers.

#### options

##### resize

Type: `boolean`<br>
Default: `false`

Use the largest image and resize to sizes defined using the [sizes](#sizes) option.

##### sizes

Type: `Array`<br>
Default: `[16, 24, 32, 48, 64, 128, 256]`

Array of sizes to use when resizing.


## Related

* [to-ico-cli](https://github.com/kevva/to-ico-cli) - CLI for this module


## License

MIT © [Kevin Martensson](http://github.com/kevva)
