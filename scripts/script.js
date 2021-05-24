var intensidade = 35
var mudarInten = false

function config(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var config = window.document.body.style

    var data = new Date()
    var horas = data.getHours()
    

    var horario = data.toLocaleTimeString()
    var diaSem = data.toLocaleDateString()

    if(horas >= 0 && horas < 12){
        var mensagem = 'Bom dia!' 
        img.src = "imagens/manha.png"

    }else if(horas < 18){
        var mensagem = 'Boa tarde!'
        img.src = "imagens/tarde.png"
    }else{
        var mensagem = 'Boa noite!'
        img.src = "imagens/noite.png"
    }
    mensagem += ` Hoje é dia ${diaSem} - ${horario}`
    msg.innerHTML = mensagem
}

window.setTimeout("config()")
window.setInterval("config()", 1000)