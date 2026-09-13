// INICIO EXERCICIO 01

console.log ("==========EXERCICIO 01==========")
console.log ()

console.log ("CRIAR VARIAVEIS E EXIBIR NA TELA COM FORMATAÇÃO")
let nomeUsuario = "Nick"
let idadeUsuario = 21
let cidadeUsuario = "Não-Me-Toque"

console.log ()
console.log ("VARIAVEIS:")
console.log ("Nome: " + nomeUsuario)
console.log ("Idade: " + idadeUsuario)
console.log ("Cidade: " + cidadeUsuario)
console.log ()

console.log ("FRASE FORMATADA: ")
console.log(nomeUsuario + ", " + idadeUsuario + " anos, mora em " + cidadeUsuario + ".")

// FIM EXERCICIO 01

console.log () 
console.log ()

// INICIO EXERCICIO 02

console.log ("==========EXERCICIO 02==========")
console.log ()

console.log ("EXIBIR O TIPO DAS SEGUINTES VARIAVEIS:")
let respostas = ["25", 25, true, null, undefined]
console.log (respostas)
console.log ()

console.log(typeof(respostas[0]))
console.log(typeof(respostas[1]))
console.log(typeof(respostas[2]))
console.log(typeof(respostas[3]))
console.log(typeof(respostas[4]))

// FIM EXERCICIO 02

console.log ()
console.log ()

// INICIO EXERCICIO 03

console.log ("==========EXERCICIO 03==========")
console.log ()

let valorProduto = 49.90
let valorFrete = 12.50

valorTotal = valorProduto + valorFrete
console.log ("Valor do produto R$ " + valorProduto)
console.log ("Valor do frete R$ " + valorFrete)
console.log ("O valor total do produto com o frete é R$ " + valorTotal)

console.log ()

console.log ("O valor total é maior que R$ 50,00? ")
if (valorTotal > 50) {
    console.log (true)
}

else {
    console.log (false)
}

console.log ()

console.log ("O VALOR DO PRODUTO É IGUAL A '49,90' EM TIPAGEM?")

let tipo = "49,90"

if (typeof(valorProduto) == typeof(tipo)) {
    console.log ("O valor do produto tem a mesma tipagem que '49,90'.")
}

else {
    console.log ("O valor do produto não possui a mesma tipagem que '49,90'.")
    console.log ("Tipo do valor do produto: " + typeof (valorProduto))
    console.log ("Tipo do valor solicitado: " + typeof (tipo))
}

// FIM EXERCICIO 03