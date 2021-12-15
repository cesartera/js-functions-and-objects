console.log("Vamos falar de funções!");

// if(Expressao booleana){
//     //Bloco de Código
// }

// while (Expressao booleana){
//     //Bloco de Código
// }


//FUNÇÕES - SINTAXE

//Definição de uma função
function executarAlgo(){
    //Bloco de Código que eu quero executar depois
    console.log("Mostrar Algo");
}

//Chamada de uma função
executarAlgo();

for(i=0; i<=10; i++){
    console.log(i);
}

executarAlgo();

//Função com Parametros
function mostrarNome(nome){
    console.log("Meu nome é: " + nome)
}

//Chamada de função com Argumento
mostrarNome("César");

mostrarNome("Rodrigo");

function mostrarNomeCompleto(nome, sobrenome){
    console.log("Meu nome completo é: " + nome + " " + sobrenome )
}

mostrarNomeCompleto("Martins", "César");

//Retorno --> Return

function dez(){
    return 10;
}

console.log(dez(), "Chamada da função dez()");

console.log(dez() + 8);

//Exemplo de Escala de TEmperatura
function mostrarTemperatura(temp, escala){
    if(escala === "C"){
        console.log ("A temperatura é: " + temp + "º Celsius");
    } else if(escala === "F"){
        console.log ("A temperatura é: " + temp + "º Fahreinheit");
    }
}

mostrarTemperatura(100, "C");
mostrarTemperatura(270, "F");
mostrarTemperatura(-30, "C");

//Função Indefinida
function multiplicar(x, y){
    var produto = x*y;
    return produto;
}

console.log(multiplicar(2,4), "chamada da função multiplicar");

function exemplo(input){
    if(input == "zero"){
        return 0;
    }
    console.log("Saiu do IF")
    return 1;
}

console.log(exemplo("zero"), "Isso aqui deve retornar 0")
console.log(exemplo("dois"), "Isso aqui deve retornar 1")


function calcularMedia(nota1, nota2, nota3){
    var media = (nota1 + nota2 + nota3)/3;

    // return "Nem entrei no IF"

    if(media >= 7){
        return "Aprovado";
    }else if(media >= 5){
        return "Em Recuperação";
    }else {
        return "Reprovado"
    }
}

console.log(calcularMedia(8,8,8))
console.log(calcularMedia(6,6,6))
console.log(calcularMedia(4,4,4))

//Escopo em Funções
var x = 2;

function mostrarX() {
    console.log("O valor de X é: " + x)
    var y = 3;
    console.log("E o valor de Y é: " + y);
}

mostrarX();

function ePar(num) {
    if (num % x === 0){
        console.log("é par")
    } else{
        console.log("É impar")
    }
}

ePar(5, "5 é par??");
ePar(7, "7 é par??");


//OBJETOS em JS
const arrCarro = ["Ford", "Ka", 2020, 30000];
console.log(arrCarro); // Exibe o Array todo
console.log(arrCarro[0]);// Exibe "Ford"

const objCarro = {marca: "Ford", modelo:"Ka", ano: 2020, km: 30000}
console.log(objCarro);

console.log(objCarro.marca, "--> objCarro.marca");

//Adicionando uma chave a um Objeto
objCarro.cor = "prata";
console.log(objCarro);

//Alterando um valor de uma chave em um Objeto
objCarro.km = "Trinta Mil Km";
console.log(objCarro);

//remover uma chave de um Objeto
delete objCarro.marca;
console.log(objCarro);

const objMoto = {
    marca: "honda",
    modelo: "CB500",
    ano: 2021,

    ligar(){
        console.log("Vruuummmmmmmm!")
    }
}

console.log(objMoto);

//Arrays são objetos
const arrayExemplo = ["Olá", "Mundo"];
const objExemplo = {0: "Olá", 1:"Mundo"};

if (arrayExemplo[0] === objExemplo["0"]){
    console.log("É Igualzinho!!!")
}

//Outra notação ["nome da chave"];
console.log(objCarro["ano"]); 
console.log(objCarro.ano); 


//JSON - JavaScript Object Notation

//JSON.stringify --> Transforma um Objeto JS em JSON
var jsonCarro = JSON.stringify(objCarro);
console.log(jsonCarro, "Isso aqui é um JSON");

//JSON.parse --> Transforma um JSON em um Objeto JS
var objTransformado = JSON.parse(jsonCarro);
console.log(objTransformado, "Isso é um objeto que já foi um JSON");



//RESOLUÇÃO EX - 16 DA AULA 7

//Array dado:
const carrinho = ["tenis", 349, "jaqueta", 199, "camiseta", 79, "calça", 99]

//EXERCICIO 12
for(i=0; i<carrinho.length; i=i+2){
    console.log("O preço do item "+ carrinho[i] + " é: " + carrinho[i+1]);
};

//EXERCICIO 13
let totalCarrinho = 0
for(i=1; i<carrinho.length; i=i+2){
    totalCarrinho = totalCarrinho + carrinho[i];
};
console.log("O total do carrinho é: " + totalCarrinho);

//EXERCICIO 14
carrinho[3] = 159;
carrinho[7] = 89
console.log(carrinho);

//EXERCICIO 15
carrinho.push("frete", 19.90);
console.log(carrinho);

//EXERCICIO 16
totalCarrinho = 0;
for(i=1; i<carrinho.length; i=i+2){
    totalCarrinho = totalCarrinho + carrinho[i];
};
console.log("O total do carrinho é: " + totalCarrinho);


if(totalCarrinho >= 500){
    //Retirar o frete.
    totalCarrinho = totalCarrinho-carrinho[carrinho.length-1];
}

console.log("O total do carrinho sem o frete é: " + totalCarrinho);


//EXERCICIO 17
// Dado os parâmetros de temperatura x estado da água:

// Sólido - Menor que 0 ºC
// Líquido - Entre 0 e 100 ºC
// Gasoso - Maior que 100 ºC

// - 7
// 90
// 130



function mostrarEstado (temperaturaAgua){
    if(temperaturaAgua > 100) {
        console.log("A temperatura da Água é: " + temperaturaAgua + ". E seu estado é gasoso")
    }else if(temperaturaAgua >= 0){
        console.log("A temperatura da Água é: " + temperaturaAgua + ". E seu estado é líquido")
    }else{
        console.log("A temperatura da Água é: " + temperaturaAgua + ". E seu estado é sólido")
    }
}

mostrarEstado(-7);
mostrarEstado(90);
mostrarEstado(130);
























