# unique-iterable

Filters an iterable object so it doesn’t yield the same value more than once.

Optionally lets you set a numeric limit on total unique values yielded.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i unique-iterable
```

## API

The module exports a single function.

### Parameters

1. `iter` (iterable): The iterable whose values should be filtered for duplicates.
2. Object argument:
    * Optional: `limit` (integer): The maximum number of unique items to yield. Defaults to `Infinity`.

### Return Value

An iterable object that will iterate any given value only once.

## Example

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
