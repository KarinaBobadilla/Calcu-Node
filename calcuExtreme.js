
export function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
    return a + b;
  }
  
  export function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
    return a - b;
  }
  
  export function multiplicar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
    return a * b;
  }
  
  export function dividir(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  }
  
 
  export default function info() {
    return "Este módulo permite realizar operaciones básicas: suma, resta, multiplicación y división";
  }