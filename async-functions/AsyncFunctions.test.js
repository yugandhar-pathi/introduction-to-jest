import { dataPromise, fetchData } from './AsyncFunctions';

test('test data promise', () => {
  return dataPromise().then(data => {
    expect(data).toBe('success');
  });
})

//2 resolves/rejects
test('alt 2', () => {
  return expect(dataPromise()).resolves.toBe('success');
})

// async/await

test('test asynchronous function', async () => {
  let data = await fetchData();
  expect(data).toBe('success');
})