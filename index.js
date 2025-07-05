
import { sumar, restar, multiplicar, dividir } from './calculadora.js';
import info from './calculadora.js';


console.log(info());


function calcular(operacion, a, b) {
  try {
    let resultado;
    switch (operacion.toLowerCase()) {
      case 'sumar':
        resultado = sumar(a, b);
        break;
      case 'restar':
        resultado = restar(a, b);
        break;
      case 'multiplicar':
        resultado = multiplicar(a, b);
        break;
      case 'dividir':
        resultado = dividir(a, b);
        break;
      default:
        throw new Error('Operación no válida');
    }
    console.log(`Resultado de ${operacion}: ${resultado}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}


calcular('sumar', 5, 3);          
calcular('restar', 10, 4);        
calcular('multiplicar', 7, 8);    
calcular('dividir', 20, 5);       


calcular('sumar', '5', 3);     
calcular('dividir', 10, 0);      
calcular('potencia', 2, 3);       