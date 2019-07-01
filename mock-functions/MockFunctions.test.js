const fetch = require('node-fetch');
import { login } from './MockFunctions';

jest.mock('node-fetch');

test('test mock functions', async () => {

  const resp = {json : () => { return {'status' : 'success'} } };
  fetch.mockResolvedValue(resp);

  let result = await login('john','password');
  expect(result).toBe(true);
})