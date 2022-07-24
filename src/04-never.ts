//ciclo infinito que nunca termina
const withoutEnd = () =>{
  while (true) {
    console.log("Hello World");
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input:unknown) => {
  if (typeof input === "string") {
    // console.log(input);
    return 'Es  un string';
  } else if (Array.isArray(input)) {
    // console.log(input);
    return 'Es un array';
  }

  return fail('No hizo match');
  // withoutEnd();
  // fail("Error");
}

console.log(example("Hello World"));
console.log(example([1, 2, 3]));
console.log(example(123)); // aca se debe detener
console.log(example('Hola despues del fail'));

