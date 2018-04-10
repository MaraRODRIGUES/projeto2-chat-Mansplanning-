// let sim = document.getElementById("yes");
// yes.onclick = link;

// let html = function(){
//     location.href="http://google.com.br"
//     console.log("ok");
// };

//



// yes.addEventListener("click", html ());

var acertos = 0;
var erros=0;
var total = 10;
var p = 0;
var r = 0;

//Criando um array para armazenar as imagens
let bancoDeImgs = [
    "01-sim.png", "02-sim.png", "03-sim.png", "04-sim.png", "05-sim.png", "06-sim.png", "07-sim.png", "08-sim.png", "09-sim.png", "10-sim.png"
];

let indiceBancoImg=0; //contador começando com 0;

let i = 0;
document.getElementById("imagem").src= "./assets/img/" + bancoDeImgs[i];
//buscando o id no html/buscando a imagem no diretório/ ponto concatena método/ 

function onclick(){
    i++
    document.querySelector("#imagem").src = "./assets/img/" + imagem[i];
}

document.querySelectorAll(".action").forEach(function(current, idx, callback)) {
    current.addEventListener("click", onclick);
} //pega o contador e o adiciona na lista de eventos ao click.








//Armazenando os clicks




