# unique-iterable

Filters an iterable object so it doesn’t yield the same value more than once.

Optionally lets you set a numeric limit on total unique values yielded.

## Installation

```bash
npm install unique-iterable --save
```

The module exports a single function.

## Usage Example

```javascript
const uniqueIterable = require('unique-iterable')
const u = uniqueIterable([1, 1, 2, 2])
u.next().value // 1
u.next().value // 2
u.next().done // true
```

Here is the above example repeated with a `limit` argument:

```javascript
const uniqueIterable = require('unique-iterable')
const u = uniqueIterable([1, 1, 2, 2], {limit: 1})
u.next().value // 1
u.next().done // true
```

## Related Projects

* [deduplicate](https://github.com/lamansky/deduplicate)
* [unique-array-by](https://github.com/lamansky/unique-array-by)
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by)
* [unique-map](https://github.com/lamansky/unique-map)
* [unique-map-by](https://github.com/lamansky/unique-map-by)
