

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
const filtro = personagensArquivo.filter((Personagem) => Personagem.pontos_vida == 105.0 )
console.log(filtro)
}





    divisao_normal()
    mostrar_Personagem()
    divisao_add()
    add_personagem("Charles","Pugilista",72,103,0,"luva de boxe, braçadeira","True")
    mostrar_Personagem()
    divisao_filtro()
    filtro()