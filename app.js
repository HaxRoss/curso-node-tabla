const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')


console.clear();

// console.log(argv);

// option ('l)
//listar
//boolean
//default: false

crearArchivo ( argv.b, argv.l,argv.h ) 
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ))
    .catch( err => console.log( err ));

    //   "base-3":"node app --base=3"