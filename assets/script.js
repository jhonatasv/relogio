/*
function carregandoPagina() { 
    let relogio = document.querySelector('#relogio')
    let image = document.querySelector('#img')
    let data = new Date()
    let h = data.getHours()


    if (h >= 6 && h <= 12 ) { 
       relogio.innerHTML = 'Dia' 

    } else if (h >= 13 && h <= 18) {
        relogio.innerHTML = `tarde`

    } else if (h >= 19 && h <= 0 ) { // não funcionar??
        relogio.innerHTML = `Noite`

    } else  if (h >= 1 && h <= 5) {
        relogio.innerHTML = `madrugada`
    }
    
} */

function carregandoPagina() { 
    let relogio = document.querySelector('#relogio')
    let img = document.querySelector('#img')
    let data = new Date()
    let h = data.getHours()

    if (h >= 1 && h <= 5) { 
       relogio.innerHTML = 'madrugada' 
       img.src = 'assets/img/madrugada.jpg'

    } else if (h >= 6 && h <= 12) {
        relogio.innerHTML = `manha`
        img.src = 'assets/img/manha.jpg'

    } else if (h >= 13 && h <= 18) {
        relogio.innerHTML = `tarde`
        img.src = 'assets/img/tarde.jpg'
    } else {
        relogio.innerHTML = `noite`
        img.src = 'assets/img/noite.jpg'
    }
    
}

