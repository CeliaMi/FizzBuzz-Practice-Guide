# 🚀 Guía Paso a Paso: Kata FizzBuzz con JavaScript

## 📋 Índice
1. [¿Qué es npm?](#qué-es-npm)
2. [¿Qué es Jest?](#qué-es-jest)
3. [Configuración inicial del proyecto](#configuración-inicial-del-proyecto)
4. [Paso a paso de la kata](#paso-a-paso-de-la-kata)
5. [¿Y la solución?](#y-la-solución)

---
Antes de comenzar con el proyecto, respondamos un par de preguntas... 

## ¿Qué es npm?

**npm** (Node Package Manager) es el gestor de paquetes por defecto para Node.js. Te permite instalar librerías, ejecutar scripts y gestionar dependencias en tus proyectos JavaScript.

---

## ¿Qué es Jest?

**Jest** es un framework de testing para JavaScript. Permite escribir y ejecutar tests de forma sencilla.


Ejemplo de test:
```javascript
describe('Mi función', () => {
  test('debería hacer algo', () => {
    // expect(resultado).toBe(valorEsperado);
  });
});
```

---

## Configuración inicial del proyecto

### Paso 1: Inicializa tu proyecto
- Ejecuta el comando para crear tu `package.json`.
 ```bash
 npm init -y
 ```

### Paso 2: Instala Jest
- Instala Jest como dependencia de desarrollo.

 ```bash
npm install --save-dev jest
 ```

### Paso 3: Configura los scripts en `package.json`
- Agrega un script para correr los tests con Jest.

````package.json
"scripts": {
    "test": "jest"
  },
````

### Paso 4: Crea la estructura de carpetas
- ¿Dónde pondrías el código fuente? ¿Y los tests?

En este repositorio ya te dejamos los archivos creados con la siguiente estructura:

```
kata-fizzFuzz-js/
├── src/
├── tests/
├── package.json
└── README.md
```

---

## Paso a paso de la kata

### 🎯 Objetivo
Crear una función que:
- Imprima los números del 1 al 100
- Si es divisible por 3 → "Fizz"
- Si es divisible por 5 → "Buzz"
- Si es divisible por ambos → "FizzBuzz"

### 📝 Enfoque TDD (Test-Driven Development)

Vamos a seguir la metodología **Red-Green-Refactor**:
1. **Red**: Escribe un test que falle
2. **Green**: Escribe el código mínimo para que pase
3. **Refactor**: Mejora el código manteniendo los tests

---

### Paso 1: Primer test

- Ve al archivo de test en la carpeta `tests`.
- Veras descomentado un test que verifica que si el número es divisible entre 3, debe imprimir Fizz.


Ahora activa tu comando `npm run test`
¡nuestro test falla! Vamos por buen camino

---

### Paso 2: Hacemos que el test pase

- Implementa la función en la carpeta `src` en el archivo `fizzBuzz.js`
- Haz lo mínimo necesario para que el test pase.

¿Pasa el test? ¡Perfecto! Continúa al siguiente paso.

---

### Paso 3: descomenta el siguiente test


¿El test falla? ¡Haz lo mínimo para que pase!

---

### Paso 4: ya sabes como va esto, descomenta el tercer test


Haz que el test pase.



### Paso 5: Refactoriza tu código

- ¿Puedes hacer tu función más legible o eficiente?
- ¿Puedes evitar repetir condiciones?

Haz pequeños cambios y asegúrate de que todos los tests sigan pasando.

---

## ¿Y la solución?

¿Quieres ver la solución completa? Consulta el archivo `SOLUCION_FIZZBUZZ.md` para comparar tu implementación o despejar dudas.

---

¡Recuerda! El objetivo es practicar lógica y TDD. No te preocupes si te atoras, ¡lo importante es aprender! 🚀 