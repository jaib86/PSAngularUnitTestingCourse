import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    let pipe = new StrengthPipe();

    let value = pipe.transform(5);

    expect(value).toBe('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    let pipe = new StrengthPipe();

    let value = pipe.transform(10);

    expect(value).toBe('10 (strong)');
  });

  it('should display unbelievable if strength is 20', () => {
    let pipe = new StrengthPipe();

    let value = pipe.transform(20);

    expect(value).toBe('20 (unbelievable)');
  });
});
