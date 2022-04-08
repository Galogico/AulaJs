console.log("eae meu nobre");
function OnClickHandler(){
    var pass = document.getElementById('senha').value
    if(pass == 'super123'){
        alert('Bem Vindo')
    }
    else{
        alert('Tente Novamente')
    }
}

// SWITCH CASE
function Validadora(){
    var op = document.getElementById('opcoes').value
    console.log(op);
    switch(op){
        case '1':
            alert('Você comprou uma coxinha');
            break;
        case'2':
            alert('Açai com morango');
            break;
        case'3':
            alert('tomate maduro')
            break;
        deafult:
            alert('nada')
            break;
    }
}

//CONTADOR
var cliques= 0;

function clicado(){
    updateDisplay(++cliques);
}
function reset(){
    cliques = 0;
    updateDisplay(cliques);
}
function updateDisplay(val){
    document.getElementById("contador").innerHTML =val;
}

//FOR

function Produtos(){
    var qtdInput = document.getElementById('qtd').value;
    var htmlfinal = '';
    for(var i=0;i < qtdInput;i++){
        htmlfinal += 'Nome do Produto: <input> <br/>';
    }
    document.getElementById("pedidos").innerHTML = htmlfinal;
}

//WHILE
function Sorteio(){
var num = Math.floor(Math.random() * 10);
    console.log(num);
    htmlFinal2 = '';

    while (num !=2){
        htmlFinal2 +=num;
        num = Math.floor(Math.random()*10);
    }

    document.getElementById('numeros').innerHTML = htmlFinal2;
}