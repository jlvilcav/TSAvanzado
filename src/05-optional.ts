export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number //Los parametros opcionales siempre van al final de las declaraciones
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  };
}
//Para el operador || se usa el ternario
// 0 === false
// '' === false
// fasle === false

//Para evitar la ambiguedad se usa el ??

const p1 = createProduct("123", true, 12);
console.log(p1);

const p2 = createProduct("124");
console.log(p2);

const p3 = createProduct("124", false,0);
console.log(p3);
