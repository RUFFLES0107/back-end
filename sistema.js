

const personagensArquivo = require("./personagens.json")
const personagensArquivoJSON = JSON.stringify(personagensArquivo)


function divisao_normal(){
    console.log("\n"+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PERSONAGENS NORMAL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+"\n")
}

function divisao_add(){
    console.log("\n"+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PERSONAGENS ADICIONADO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+"\n")
}

function divisao_filtro(){
    console.log("\n"+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PERSONAGENS FILTRADO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+"\n")
}



function mostrar_Personagem(){

    personagensArquivo.forEach((Personagem)=>{
        console.log(Personagem.nome + 
            " - classe: " + Personagem.classe + 
            " - nivel: " + Personagem.nivel +
            " - pontos de vida: " + Personagem.pontos_vida +
            " - pontos de mana: " + Personagem.pontos_mana +
            " - inventario: " + Personagem.inventario + 
            " - esta vivo: " + Personagem.esta_vivo)
    })
    
    }
    
    
    function add_personagem (nome,classe,nivel,pontos_vida,pontos_mana,inventario,esta_vivo){
    
    personagensArquivo.push({
    
        nome: nome,
        classe: classe,
        nivel:nivel,
        pontos_vida: pontos_vida,
        pontos_mana: pontos_mana,
        inventario: inventario,
        esta_vivo: esta_vivo

        
    })
   

}
    



function filtro(){
    console.log("\n##### Personagens com 105 de Vida #####\n")

    const personagensFiltrados = personagensArquivo.filter(
        (p) => Number(p.pontos_vida) === 105
    )

    personagensFiltrados.forEach((p)=>{
        console.log(
            `${p.nome} | Classe: ${p.classe} | Nível: ${p.nivel} | Vida: ${p.pontos_vida} | Mana: ${p.pontos_mana}`
        )
    })
}



function Desconto_vida(){
    console.log("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Personagens com 15% de Desconto de Vida !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n")
    
    const personagensComDesconto = personagensArquivo.map((Personagem)=> {
        return {
            ...Personagem,
            pontos_vida: Number(Personagem.pontos_vida) * 0.85
        }
    })

    personagensComDesconto.forEach((p)=>{
        console.log(
            `${p.nome} | Classe: ${p.classe} | Vida: ${p.pontos_vida.toFixed(2)}`
        )
    })
}


    divisao_normal()
    mostrar_Personagem()
    divisao_add()
    add_personagem("Charles","Pugilista",72,103,0,"luva de boxe, braçadeira","True")
    mostrar_Personagem()
    divisao_filtro()
    filtro()
    Desconto_vida()