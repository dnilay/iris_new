import {greet} from './greet';

describe('greet', () => {
it('should contain name in the message', () => {

  expect(greet('Nilesh')).toBe('Welcome Nilesh');
});

});
