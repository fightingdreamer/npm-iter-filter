export function* filter<T>(
  iterator: Iterable<T>,
  callbackFn: (item: T, index: number) => boolean,
): Generator<T> {
  let index = 0;
  for (const item of iterator) {
    if (!callbackFn(item, index)) continue;
    yield item;
    index += 1;
  }
}
