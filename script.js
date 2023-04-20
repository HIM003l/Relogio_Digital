const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr > 17 || hr < 6){
        document.body.style.background = 'linear-gradient(120deg, #280BE3, #ff2525da)'
    }

        if(hr < 10){
           hr = '0' + hr; 
        } 
        if(min < 10){
            min = '0' + min;
        }
        if(s < 10){
            s = '0' + s;
        }


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

// Chamar a função de atualização inicialmente
atualizarRelogio();

// Atualizar o relógio a cada segundo (1000 milissegundos)
const relogio = setInterval(atualizarRelogio, 1000);