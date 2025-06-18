const helloWorld = require('./helloWorld-solution');

describe('Hello World', function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});

// lehčí zápis: test('says Hello, World!', () => {
//                  expect(helloWorld()).toBe('Hello, World!');}); //tobe porovnává jen referenci, 
// kdežto toEqual porovnává i obsah tj můžou být jiné proměnné ale hodnoty jsou stejné uvnitř, takže projde testem
// 	•	Arrow funkce (() => {}): Kratší, kompaktní, nepoužívají vlastní this.
//  •	Tradiční funkce (function () {}): Klasický zápis, mají vlastní this, lze je pojmenovat.