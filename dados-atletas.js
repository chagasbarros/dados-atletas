class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calcularCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return 'Infantil'
        } else if (this.idade >= 12 && this.idade <= 13) {
            return 'Juvenil'
        } else if (this.idade >= 14 && this.idade <= 15) {
            return ' Intermediario'
        } else if (this.idade >= 16 && this.idade <= 30) {
            return 'Adulto'
        } else {
            return 'Sem categoria'
        }
    }
    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }
    calculaMediaValida() {
        const notasOrdenadas = this.notas.sort((a, b) => a - b);
        const notasValidas = notasOrdenadas.slice(1, 4);
        const soma = notasValidas.reduce((total, nota) => total + nota, 0);
        return soma / notasValidas.length;
    }
    obtemNomeAtleta() {
        return `Nome: ${this.nome}`;
    }
    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`;
    }
    obtemPesoAtleta() {
        return `Peso: ${this.peso}`;
    }
    obtemAlturaAtleta() {
        return `Altura: ${this.altura}`;
    }
    obtemNotasAtleta() {
        return `Notas: ${this.notas}`;
    }
    obtemCategoria() {
        return this.calcularCategoria();
    }
    obtemIMC() {
        return this.calculaIMC();
    }
    obtemMediaValida() {
        return `Media: ${this.calculaMediaValida()}`;
    }
    toJson() {
        return {
            nome: this.nome,
            idade: this.idade,
            peso: this.peso,
            altura: this.altura,
            notas: this.notas,
            categoria: this.calcularCategoria(),
            imc: this.calculaIMC(),
            media: this.calculaMediaValida()
        }
    }

}

const joaozinho = new Atleta('Joãozinho', 10, 50, 1.5, [10, 9, 8, 7, 6]);
console.log(joaozinho.toJson());

