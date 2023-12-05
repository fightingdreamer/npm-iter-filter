# iter-filter

## Description

Missing filter over `Iterable`, similar to Array.filter.

## Install

```bash
bun add @fightingdreamer/iter-filter
```

## Usage

```js
import {filter} from '@fightingdreamer/iter-filter'

const vector = [1,2,3,4,5,6,7,8][Symbol.iterator]()
const result = filter(vector, (v) => v == 6).next().value
const expect = 6
console.assert(result == expect)
```

## Usage (node / commonjs)

```js
const {filter} = require('@fightingdreamer/iter-filter')

const vector = [1,2,3,4,5,6,7,8][Symbol.iterator]()
const result = filter(vector, (v) => v == 6).next().value
const expect = 6
assert(result == expect)
```

## Functions
```js
function* filter<T>(
    iterator: Iterable<T>,
    callbackFn: (item: T, index: number) => boolean
): Generator<T>
```
Will yield matching items from `iterator` as output being consumed.
