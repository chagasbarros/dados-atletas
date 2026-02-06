# Projeto Certificação 2 – DevStart

## Visão Geral

Projeto desenvolvido para a **Certificação 2 do programa DevStart**, aplicando conceitos de **Programação Orientada a Objetos (POO)** em JavaScript. O sistema implementa uma classe para gerenciamento de atletas, realizando cálculos automáticos de categoria etária, IMC e média de notas.

## Tecnologias

- JavaScript (ES6+)

## Funcionalidades

- Cadastro completo de atletas
- Cálculo automático de categoria por faixa etária
- Cálculo do Índice de Massa Corporal (IMC)
- Cálculo da média válida de notas (descartando extremos)
- Serialização de dados em formato JSON

## Estrutura do Projeto
```
.
├── atleta.js
└── README.md
```

## Implementação

### Classe Atleta

A classe `Atleta` encapsula dados e comportamentos relacionados aos atletas.

#### Atributos

| Atributo | Tipo |
|----------|------|
| `nome` | String | 
| `idade` | Number | 
| `peso` | Number | 
| `altura` | Number | 
| `notas` | Array |

### Regras de Negócio

#### Categorização por Idade

| Faixa Etária | Categoria |
|--------------|-----------|
| 9 a 11 anos | Infantil |
| 12 a 13 anos | Juvenil |
| 14 a 15 anos | Intermediário |
| 16 a 30 anos | Adulto |
| Outras idades | Sem categoria |

#### Cálculo do IMC
```
IMC = peso ÷ (altura × altura)
```


#### Cálculo da Média Válida

1. Ordena as notas em ordem crescente
2. Remove a **menor** e a **maior** nota
3. Calcula a média das **três notas centrais**

## Exemplo de Uso
```javascript
const joaozinho = new Atleta(
  'Joãozinho',
  10,
  50,
  1.5,
  [10, 9, 8, 7, 6]
);

console.log(joaozinho.toJson());
```

### Saída Esperada
```json
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
```

## Como Executar

1. **Clone o repositório:**
```bash
   git clone https://github.com/chagasbarros/dados-atletas.git
```

2. **Acesse o diretório:**
```bash
   cd seu-repositorio
```

3. **Execute o projeto:**
```bash
   node atleta.js
```

## Aprendizados

Este projeto consolidou conhecimentos em:

- Programação Orientada a Objetos em JavaScript
- Encapsulamento de dados e métodos
- Manipulação de arrays e ordenação
- Cálculos matemáticos e validações
- Formatação e serialização de dados (JSON)

## Autor

**Chagas Barros**  
Curso: Desenvolvimento Front-End  
Programa: DevStart

---

Se este projeto foi útil, considere dar uma estrela no repositório!
