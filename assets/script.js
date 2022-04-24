const data = new Date()
let h = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()



function carregandoPagina() { 
    let div = document.querySelector('#relogio')
    let img = document.querySelector('#img')


    let link = document.querySelector('#link')
    let p = document.querySelector('#paragrafo')

    if (h >= 1 && h <= 5) { 
        div.innerHTML = 'madrugada' 
        img.src = 'assets/img/madrugada.jpg'
        document.body.style.backgroundColor = '#2D333B'
        link.style.color = 'white'
        p.style.color = 'white'

    } else if (h >= 6 && h <= 12) {
        div.innerHTML = `manha`
        img.src = 'assets/img/manha.jpg'

    } else if (h >= 13 && h <= 18) {
        div.innerHTML = `tarde`
        img.src = 'assets/img/tarde.jpg'
        document.body.style.backgroundColor = '#f2a663ef'

    } else {
        div.innerHTML = `noite`
        img.src = 'assets/img/noite.jpg'
        document.body.style.backgroundColor = '#35302fc9'
        link.style.color = 'white'
        p.style.color = 'white'
    }
    
}






/*
const data = new Date()
let h = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()



function carregandoPagina() { 
    let relogio = document.querySelector('#relogio')
    let img = document.querySelector('#img')

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
*/



// function carregandoPagina() { 
//     let relogio = document.querySelector('#relogio')
//     let img = document.querySelector('#img')
//     let data = new Date()
//     let h = 19 //data.getHours()


//     if (h >= 6 && h <= 12 ) { 
//        relogio.innerHTML = 'manha' 
//         img.src = 'assets/img/manha.jpg'

//     } else if (h >= 13 && h <= 18) {
//         relogio.innerHTML = `tarde`
//         img.src = 'assets/img/tarde.jpg'

//     } else if (h >= 19 && h <= 0 ) { // não funcionar?
//         relogio.innerHTML = `Noite`
//         img.src = 'assets/img/noite.jpg'

//     } else  if (h >= 1 && h <= 5) {
//         relogio.innerHTML = `madrugada`
//         img.src = 'assets/img/madrugada.jpg'
//     }
    
// }

