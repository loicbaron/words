import { Greeting } from './types.js';

describe('types', () => {
  it('should work', () => {
    const g: Greeting = { message: 'hello' }
    expect(g).toHaveProperty('message');
  });
});
