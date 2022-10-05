import { test, expect, vi } from 'vitest';
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

const realTaxRule = (amount) => {
  if (amount < 100) {
    return 0.05;
  } else if (amount >= 100 && amount < 200) {
    return 0.1;
  } else {
    return 0.2;
  }
};
const calculator = {
  tax: (amount, taxRuleFunc) => {
    console.log('Original tax() called: ');

    if (amount === 0) {
      return 0;
    }

    return taxRuleFunc(amount) * amount;
  },
};

test('without mocking', () => {
  const tax = calculator.tax(100, realTaxRule)
  expect(tax).toBe(10)
})

test('mocking', () => {
  const mock = vi.fn().mockReturnValue(0.19)
  expect(calculator.tax(100, mock)).toBe(19);
})

test('spies', () => {
  const spy = vi.spyOn(calculator, 'tax')
  calculator.tax(100, realTaxRule)
  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveReturnedWith(10)
  expect(spy).toHaveBeenCalledWith(100, realTaxRule)

  const spy2 = vi.fn(realTaxRule)
  calculator.tax(100, spy2)
  expect(spy2).toHaveBeenCalled()
  expect(spy2).toHaveBeenCalledWith(100)

  const spy3 = vi.fn(realTaxRule)
  calculator.tax(0, spy3);
  expect(spy3).not.toHaveBeenCalled();
})
