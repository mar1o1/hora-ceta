function carregar() { 
let msg = document.getElementById("msg");
let foto = document.getElementById("imagem");
let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let segundo = data.getSeconds();


 // atualiza a hora a cada 60 segundos
setInterval(function(){
    segundo++;
    if(segundo == 60){
        segundo = 00
        minuto++;
        if(minuto == 60){
            minuto = 0;
            hora++;
            if(hora == 24){
                hora = 0;
            }
        }
    }
msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} <br>` 
if (hora >= 0 && hora < 12) {
    foto.src = "manha.png";
    msg.innerHTML += "Bom dia!";
    document.body.style.background = "#e8a09d";
} else if (hora >= 12 && hora < 18) {
    foto.src = "tarde.png";
    msg.innerHTML += "Boa tarde!";
    document.body.style.background = "#f5b154";
} else {
    foto.src = "noite.png";
    msg.innerHTML += "Boa noite!";
    document.body.style.background = "#132a3c";
}
}
, 1000);
}