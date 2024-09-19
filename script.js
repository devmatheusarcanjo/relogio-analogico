const ponteiroHora = document.getElementById("ponteiro-hora")
  const ponteiroSegundo = document.getElementById("ponteiro-segundo")
  const ponteiroMinuto = document.getElementById("ponteiro-minuto")
  
  const h12 = -90;
  const incSM = 360 / 60;
  const incH = 360 / 12;
       
       
  atualizarRelogio()
   
  setInterval(() => {     
     atualizarRelogio()              
  },1000)


function atualizarRelogio() {
     
     const data = new Date();
     const hora = data.getHours();
     const minuto = data.getMinutes();
     const segundo = data.getSeconds();

                   
     const grausSegundo = h12 + (incSM * segundo);
     ponteiroSegundo.style.transform = `rotate(${grausSegundo}deg)`
     
     
     const grausMinuto = h12 + (incSM * minuto) + (incSM / 60 * segundo);
     ponteiroMinuto.style.transform = `rotate(${grausMinuto}deg)`
    
     
     const grausHora = h12 + (incH * hora) + (incH / 60 * minuto);
     ponteiroHora.style.transform = `rotate(${grausHora}deg)`
        
}