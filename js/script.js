let palavras = ["banana", "morango", "kimi", "tamarindo","abacate","acerola","abacaxi"];

let frutaAdicionada = JSON.parse(localStorage.getItem("palavras")) || []
let inputFruta = document.querySelector(".area-texto");
let todasFrutas = palavras.concat(frutaAdicionada);

let palavra = todasFrutas[parseInt(Math.random() * todasFrutas.length)];

let chances = 6;
let acertos = 0;

let imagem = 0;

let posicao;



for (posicao = 0; posicao < palavra.length; posicao++) {
     let span = document.createElement("span");
    span.setAttribute('id', posicao);
    console.log(palavra);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letras = alfabeto.split("");


for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);

    botao.appendChild(letra);
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
    
    
}

function escolheLetra(letra) {

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        if (letra === palavra[posicao]) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class', 'certa');
            botao.removeAttribute('onclick');
               

            acertos++;
            acertou = true;
                      
            
        }
    }
   
    if (acertou === false) {
        imagem++;
       
        document.getElementById("forca").src = "/img/forca" + imagem + ".png";
        
        var botao = document.getElementById(letra);
        
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');
        
              chances--;
    }
           
    if (chances === 0) {
        
            let mensagem = document.createElement("p");
            let t1 = document.createTextNode("Que pena você perdeu!");
            mensagem.appendChild(t1);           
                
            
            let botao = document.createElement("button");
            let t2 = document.createTextNode("jogar novamente");
        
            botao.appendChild(t2);
            botao.setAttribute('class', 'novo-bt');
            botao.setAttribute('onclick', 'window.location.reload()');
            

            let div = document.getElementById("novo");
            div.appendChild(mensagem);
            div.appendChild(botao);
    
    }
    

    if (acertos === palavra.length) {

            let mensagem = document.createElement("p");
            let t1 = document.createTextNode("Que legal você venceu!");
            mensagem.appendChild(t1);
            
                
            
            let botao = document.createElement("button");
            let t2 = document.createTextNode("jogar novamente");

        
            botao.appendChild(t2);
            botao.setAttribute('class', 'novo-bt');
            botao.setAttribute('onclick', 'window.location.reload()');
        

            let div = document.getElementById("novo");
            div.appendChild(mensagem);
            div.appendChild(botao);
    }
}


    function adicionaFruta() {
        if(inputFruta.value==''){
            console.log("Não aceita valor vazio")
            inputFruta.setAttribute('placeholder','não pode estar vazio')
        }else{
            palavras.push(inputFruta.value);
            window.location.assign("index.html");
            console.log(adicionaFruta);
        }

        if(inputFruta.value.length != 0) {
            frutaAdicionada.push(inputFruta.value);
            localStorage.setItem("palavras", JSON.stringify(frutaAdicionada));
            palavras.push(frutaAdicionada.value);
            window.location.assign("index.html");
            console.log(adicionaFruta);
            
    }
}

