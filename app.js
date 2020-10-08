const comprarCasco = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve({precio: 250,modelo: 28})
    },1000)
});

const comprarGuantes = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve({
            precio: 45,
            talla: 'M'
            })
    },2000)
});
    
const paseoBici = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve({
            Paseo: 'Parque',
            distancia: 30
            })
    },8000)

});

const irTienda = () =>{
    comprarCasco
        .then(infoCasco =>{
            console.log(infoCasco);
            return comprarCasco
        })
        .then(infoGuantes =>{
            console.log(infoGuantes);
            return comprarGuantes
            
        })
        .then(infoBici =>{
            console.log(infoBici);
            return paseoBici
            
        })
        .then(infoBici =>{
            console.log(infoBici);
            return paseoBici
            
        })
        .catch(error =>{
            console.error(error)
        })
        .finally(()=>{
            console.log("El proceso ha finalizado");
        })
}

irTienda();
