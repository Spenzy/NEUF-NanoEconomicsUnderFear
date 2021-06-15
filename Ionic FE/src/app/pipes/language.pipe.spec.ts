import {LanguagePipe} from './language.pipe';

describe('LanguagePipe', () => {
  it('create an instance', () => {
    // @ts-ignore
    const pipe = new LanguagePipe();
    expect(pipe).toBeTruthy();
  });
});
