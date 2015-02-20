describe('calculator', () => {

  it('should add numbers', () => {
    let calculator = new Calculator();
    expect(calculator.add(2, 2)).toBe(4);
  });
});