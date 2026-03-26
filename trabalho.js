
const produtos = ["Arroz", "Feijão", "Café", "Açúcar", "Óleo", "Leite", "Ovos", "Pão", "Manteiga", "Papel Higiênico"]
const valores = ["R$ 28,00", "R$ 8,50", "R$ 16,00", "R$ 4,50", "R$ 6,50", "R$ 5,00", "R$ 18,00", "R$ 9,00", "R$ 12,00", "R$ 22,00"]
const estoque = ["5 unidades", "2 unidades", "1 unidade", "4 unidades", "3 unidades", "12 unidades", "24 unidades", "0 unidades", "6 unidades", "10 unidades"]


function mostrarESTOQUE() {
    let contador = 0
  while(contador <produtos.length){
      console.log(produtos[contador] + " - " + valores[contador] + " - " + estoque[contador])
contador++
  }
}

function adicionarPRODUTO() {
    produtos.push("Macarrão")
    valores.push("R$ 17,00")
    estoque.push("23 unidades")
}

function remorerPRODUTO(){
    produtos.splice(10, 1)
    valores.splice(10, 1)
    estoque.splice(10, 1)
}


mostrarESTOQUE()

adicionarPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()

remorerPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()