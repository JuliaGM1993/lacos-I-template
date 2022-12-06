// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


// Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

// Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
// O resultado deve ser: 70

// let num = Number(prompt = "Digite um número")

// let resultadoSoma = 0

// while(num !== 0){
//     resultadoSoma = resultadoSoma + num
//     num = Number(prompt("Digite um número"))
// }

// console.log(resultadoSoma)

//EXERCÍCIO 2

// Vamos escrever um programa que recebe um número por input de usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

// let numero = Number(prompt("Digite um número"))

// for(let i = 0; i <= numero; i++){
//     console.log(i)
// }

//EXERCÍCIO 3

// Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
// “O número do índice ${indice} é ${numero[indice]}”

// let array = [5,3,8,5,1,6,9]

// for(let i = 0; i < array.length; i++){
//     console.log(`O número do índice ${i} é ${array[i]}`)
// }

//EXERCÍCIO DE FIXAÇÃO

// 1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
// “A”: Administrador;
// “B”: Usuário comum;
// “C”: Usuário assinante
// Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
// Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa.

// let tipoDeUsuario = prompt("Digite o tipo de usuário: A, B ou C").toUpperCase()

// while(tipoDeUsuario !== "A"){
//     alert("Acesso negado")
//    tipoDeUsuario = prompt("Digite o tipo de usuário: A, B ou C").toUpperCase()
// }
// alert("Boas vindas, admin")

//EXERCÍCIO DE FIXAÇÃO
// let numero = 2

// for(let i = 1; i <= 10; i++){
//    console.log(`${i} x ${numero} = ${i*numero}`)
// }

//EXERCÍCIO DE FIXAÇÃO
// let array = ["Julia","Gabriel","João","Maria","Fernanda"]

// for(let i = 0; i < array.length; i++){
//     console.log(`Strings do exercício ${i}: 
//     ${array[i].toUpperCase()}`)
// }

