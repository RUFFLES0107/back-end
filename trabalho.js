

const produtos = ["Arroz", "Feijão", "Café", "Açúcar", "Óleo", "Leite", "Ovos", "Pão", "Manteiga", "Papel Higiênico"]
const valores = ["R$ 28,00", "R$ 8,50", "R$ 16,00", "R$ 4,50", "R$ 6,50", "R$ 5,00", "R$ 18,00", "R$ 9,00", "R$ 12,00", "R$ 22,00"]
const estoque = ["5 unidades", "2 unidades", "1 unidade", "4 unidades", "3 unidades", "12 unidades", "24 unidades", "0 unidades", "6 unidades", "10 unidades"]


function mostrarESTOQUE(){
    produtos.forEach((produto) => {
        console.log(produto)
    })
    valores.forEach((valor) => {
        console.log(valor)
    })
}
mostrarESTOQUE()