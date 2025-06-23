# 📦 Solución Completa: Kata FizzBuzz

> ⚠️ ¡No sigas si no quieres spoilers! Este archivo contiene la solución completa de la kata FizzBuzz, tanto la implementación como los tests.

---

## Implementación (`src/fizzBuzz.js`)

```javascript
function fizzBuzz(number){
    
    if(number % 15 === 0) {
        return('FizzBuzz')
    } else if (number % 3 === 0) {
        return('Fizz')
    } else if (number % 5 === 0) {
        return('Buzz')
    }

    return number
}

module.exports = fizzBuzz;
```

---

## Tests (`tests/fizzBuzz.test.js`)

```javascript
const fizzBuzz = require('../src/fizzBuzz');

describe('FizzBuzz', () => {
  test('debería retornar el número cuando no es divisible por 3 ni 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
  });

  test('debería retornar "Fizz" cuando es divisible por 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('debería retornar "Buzz" cuando es divisible por 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  test('debería retornar "FizzBuzz" cuando es divisible por 3 y 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });
});
```

---

¡Puedes comparar tu solución con esta o usarla para despejar dudas! 🎉 