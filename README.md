PROJETO CERTIFICAÇÃO 2 – DEVSTART

VISÃO GERAL

Este repositório contém o projeto desenvolvido para a Certificação 2 do programa DevStart, com foco na aplicação de Programação Orientada a Objetos (POO) em JavaScript.

O projeto implementa uma classe que representa um atleta, permitindo o cálculo de categoria etária, IMC e média válida de notas, além da organização e serialização dos dados em formato JSON.

TECNOLOGIAS

JavaScript (ES6+)

Node.js

FUNCIONALIDADES

Cadastro de atleta com dados básicos

Cálculo automático da categoria por idade

Cálculo do Índice de Massa Corporal (IMC)

Cálculo da média válida das notas

Retorno dos dados estruturados em formato JSON

ESTRUTURA DO PROJETO
/
├── atleta.js
└── README.md

DETALHES DA IMPLEMENTAÇÃO
CLASSE ATLETA

A classe Atleta encapsula os dados e comportamentos relacionados a um atleta.

ATRIBUTOS

nome: Nome do atleta

idade: Idade do atleta

peso: Peso em quilogramas

altura: Altura em metros

notas: Array de notas numéricas

REGRAS DE NEGÓCIO

CATEGORIA POR IDADE

Faixa Etária	Categoria
9 a 11	Infantil
12 a 13	Juvenil
14 a 15	Intermediário
16 a 30	Adulto
Outros	Sem categoria

CÁLCULO DO IMC

IMC = peso / (altura * altura)


CÁLCULO DA MÉDIA VÁLIDA

Ordena as notas em ordem crescente

Remove a menor e a maior nota

Calcula a média das três notas centrais

EXEMPLO DE USO
const joaozinho = new Atleta('Joãozinho', 10, 50, 1.5, [10, 9, 8, 7, 6]);
console.log(joaozinho.toJson());

SAÍDA ESPERADA
{
  "nome": "Joãozinho",
  "idade": 10,
  "peso": 50,
  "altura": 1.5,
  "notas": [6, 7, 8, 9, 10],
  "categoria": "Infantil",
  "imc": 22.22,
  "media": 8
}

COMO EXECUTAR O PROJETO

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git


Acesse o diretório do projeto:

cd seu-repositorio


Execute o arquivo:

node atleta.js

AUTOR

Projeto desenvolvido por Chagas Barros Curso: Desenvolvimento FrontEnd Programa: Devstart
