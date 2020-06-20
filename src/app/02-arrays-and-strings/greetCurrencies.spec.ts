import {getCurrencies} from './getCurrencies';

describe('currency', ()  => {

  it('should return valid currency', () => {

    const result = getCurrencies();
    // expect(result).toContain('USD');
    expect(result).not.toContain('INR');
   // expect(result).toContain('INR');

  });
});
