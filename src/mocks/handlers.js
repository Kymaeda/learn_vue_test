import { rest } from 'msw'

export default [
  // [msw] Response resolver
  rest.get(
    'https://api.github.com/users/piotr-jura-udemy',
    (req, res, ctx) => {
      return res(
        ctx.json({
          name: 'Piotr Jura',
          id: 39863283,
        })
      );
    }
  ),
];
