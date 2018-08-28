describe('Smoke', () => {
  let theYoloString: string;

  beforeAll(async () => {
      theYoloString = 'Yolo';
  });


  it('Smoke test', () => {
    expect(theYoloString).toBe(`Yolo`);
  });
});
