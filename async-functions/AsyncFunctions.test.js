import { fetchData } from './AsyncFunctions';

test('test asynchronous function', async () => {
  let data = await fetchData();
  expect(data).toBe('success');
})