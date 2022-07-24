//Nico => [N,I,C,O] => string => string[]
//[N,I,C,O] => string => string[] => string

//overload solo funciona con el tipo "function"

function parseStr(input: string|string[]): string|string[] {
  if(Array.isArray(input)) {
    return input.join('');// devuelve string
  } else {
    return input.split('');// devuelve string[]
  }
}

const rta = parseStr('Jorge');
//rta.reverse();
if(Array.isArray(rta)) {
  rta.reverse();
}
console.log('parseStr:', 'Jorge =>',rta);




const rta2 = parseStr(['J','o','r','g','e']);
//rta2.tolowerCase();
if(typeof rta2 === 'string') {
  rta2.toLowerCase();
}
console.log('parseStr:',"['J','o','r','g','e'] =>",rta2);
