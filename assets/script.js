setInterval(function() {
    const data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    let saidaHora = document.querySelector('#hora')
    let saidaMin = document.querySelector('#min')
    let saidaSeg = document.querySelector('#seg')

    hora = zero(hora)
    min = zero(min)
    seg = zero(seg)

    saidaHora.textContent = `${hora}`
    saidaMin.textContent = `${min}`
    saidaSeg.textContent = `${seg}`

},1000)

function zero(tempo) {
    if(tempo < 10) {
        tempo = '0' + tempo
    } return tempo;
}

function carregandoPagina() {
    const data = new Date()
    let h = data.getHours()
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#img')
    
    let link = document.querySelector('#link')
    let p = document.querySelector('#paragrafo')
    
    if (h >= 1 && h <= 5) {
        msg.textContent = 'madrugada'
        img.src = 'assets/img/madrugada.jpg'
        document.body.style.backgroundColor = '#2D333B'
        link.style.color = 'white'
        p.style.color = 'white'

    } else if (h >= 6 && h <= 12) {
        msg.textContent = `manha`
        img.src = 'assets/img/manha.jpg'
        document.body.style.background = '#97A0A6'
        
    } else if (h >= 13 && h <= 18) {
        msg.textContent = `tarde`
        img.src = 'assets/img/tarde.jpg'
        document.body.style.backgroundColor = '#f2a663ef'
        
    } else {
        msg.textContent = `noite`
        img.src = 'assets/img/noite.jpg'
        document.body.style.backgroundColor = '#35302fc9'
        link.style.color = 'white'
        p.style.color = 'white'
    }
    
}

