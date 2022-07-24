export const createProduct = (
  id: string | number,
  isNew: boolean = true, //la forma para asignar valores por defecto
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew
  };
}


const p1 = createProduct("123", true, 12);
console.log(p1);

const p2 = createProduct("124");
console.log(p2);

const p3 = createProduct("124", false,0);
console.log(p3);

const p4 = createProduct("124", true,1000);
console.log(p4);
