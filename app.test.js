import { add } from './app';

//describe, it , test

test('test add function', () => {
  expect(add(2,2)).toBe(4);
})