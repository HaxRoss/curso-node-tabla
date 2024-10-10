

const fs = require('node:fs');

const crearArchivo = async( base = 5, listar = false , hasta = 10 ) => {

    try {
        
        
        let salida = '';
        
    
        for(let i=1; i<=hasta; i++){
            
            salida += `${base} * ${i} = ${base*i}\n`
        
        }
    
        if (listar){
            console.log(`=============================`);
            console.log(`tabla de multiplicacion del ${base}`);
            console.log(`=============================`);
            console.log(salida);
        } 
        
    
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
        
        return (`tabla-${base}.txt creada`);
    
    } catch (err) {
        return err
    }

   
}

module.exports = {
    crearArchivo 
}