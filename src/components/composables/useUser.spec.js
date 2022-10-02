import { test, expect } from 'vitest';
import { useUserSimple } from './useUser';
// NOTE: use fetch which is originally built in browser
import fetch from 'node-fetch';

window.fetch = fetch

test('simple composable', async () => {
  const { user, loadUser } = useUserSimple('piotr-jura-udemy');
  expect(user.value).toBe(null)
  await loadUser()
  expect(user.value).toHaveProperty('name', 'Piotr Jura');
  expect(user.value).toHaveProperty('id', 39863283);
})
