let anyVar: any;

anyVar = 'asd';
anyVar = 123;
anyVar = true;
anyVar = {};

let isNew: boolean = anyVar;

let unknownVar: unknown;
unknownVar = 'asd';
unknownVar = 123;
unknownVar = true;
unknownVar = {};

//No permite asignar una funcion sin valdiar su existencia
//unknownVar.data();

//Requiere validacion del tipo antes de la asignacion
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if(typeof unknownVar === 'boolean') {
  let isNewV2:boolean = unknownVar;
}


const parse = (str: string):unknown => {
  return JSON.parse(str);
}

//unkown es mejor que any

