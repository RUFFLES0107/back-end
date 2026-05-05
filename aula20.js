//Um Personagem de RPG

const personagens = 
[
    {
        nome: "Aric",
        classe: "Guerreiro",
        nivel: 12,
        pontos_vida: 150.0,
        pontos_mana: 20.0,
        inventario: ["Espada Longa", "Escudo de Ferro", "Poção de Vida"],
        esta_vivo: "True",
    },
    {
        nome: "Luna",
        classe: "Mago",
        nivel: 15,
        pontos_vida: 80.5,
        pontos_mana: 250.0,
        inventario: ["Cajado de Cristal", "Livro de Feitiços", "Pergaminho"],
        esta_vivo: "True",
    },
    {
        nome: "Thalys",
        classe: "Arqueiro",
        nivel: 10,
        pontos_vida: 110.0,
        pontos_mana: 45.5,
        inventario: ["Arco Composto", "Aljava de Flechas", "Faca de Caça"],
        esta_vivo: "True",
    },
    {
        nome: "Grog",
        classe: "Guerreiro",
        nivel: 8,
        pontos_vida: 200.0,
        pontos_mana: 0.0,
        inventario: ["Machado de Batalha", "Capacete de Chifres"],
        esta_vivo: "True",
    },
    {
        nome: "Zaphira",
        classe: "Mago",
        nivel: 20,
        pontos_vida: 0.0,
        pontos_mana: 300.0,
        inventario: ["Varinha de Fogo", "Anel Arcano"],
        esta_vivo: "False",
    },
    {
        nome: "Finn",
        classe: "Arqueiro",
        nivel: 5,
        pontos_vida: 95.0,
        pontos_mana: 30.0,
        inventario: ["Besta Leve", "Manto Verde", "Maçã"],
        esta_vivo: "True",
    },
    {
        nome: "Morgana",
        classe: "Mago",
        nivel: 18,
        pontos_vida: 92.3,
        pontos_mana: 180.0,
        inventario: ["Orbe de Escuridão", "Capa de Veludo"],
        esta_vivo: "True",
    },
    {
        nome: "Dorn",
        classe: "Guerreiro",
        nivel: 14,
        pontos_vida: 175.5,
        pontos_mana: 15.0,
        inventario: ["Martelo de Guerra", "Armadura Pesada"],
        esta_vivo: "True",
    },
    {
        nome: "Lira",
        classe: "Arqueiro",
        nivel: 7,
        pontos_vida: 105.0,
        pontos_mana: 60.0,
        inventario: ["Arco Curto", "Harpa de Madeira"],
        esta_vivo: "True",
    },
    {
        nome: "Kael",
        classe: "Mago",
        nivel: 2,
        pontos_vida: 50.0,
        pontos_mana: 40.0,
        inventario: ["Cajado Quebrado", "Pão Amanhecido"],
        esta_vivo: "True",
    }
]
const personagensJSON = JSON.stringify(personagens)
console.log(personagensJSON)

const fs = require("fs")
fs.writeFileSync("personagens.json",personagensJSON)

const personagensArquivo = require("./personagens.json")