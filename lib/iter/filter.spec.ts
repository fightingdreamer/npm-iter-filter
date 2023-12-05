import { test, expect } from "vitest";
import { filter } from "./filter";

test.each([
  { value: [], fn: (v) => v == 5, expected: [] },
  { value: [1, 2, 4, 5], fn: (v) => v == 3, expected: [] },
  {
    value: [1, 2, 3, 4, 5],
    fn: (v: any) => [1, 3, 5].includes(v),
    expected: [1, 3, 5],
  },
])("filter($value, ...) -> $expected", ({ value, fn, expected }) => {
  const ivalue = value[Symbol.iterator]();
  expect(Array.from(filter(ivalue, fn))).toEqual(expected);
});
