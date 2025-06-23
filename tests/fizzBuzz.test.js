const fizzBuzz = require('../src/fizzBuzz.js');

//primera premisa
test("Si el número es 3, debe imprimir Fizz", () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
})


// cuando consigas que pase el primer test, descomenta la segunda premisa

//segunda premisa
// test("Si el número es 5, debe imprimir Buzz", () => {
//     const result = fizzBuzz(5);
//     expect(result).toBe('Buzz');
// })

// cuando consigas que pase el segundo test, descomenta la tercera premisa

//tercera premisa
// test("Si el número es 15, debe imprimir FizzBuzz", () => {
//     const result = fizzBuzz(15);
//     expect(result).toBe('FizzBuzz');
// })

