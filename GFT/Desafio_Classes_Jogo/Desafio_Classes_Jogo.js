class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = null;
        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        }
        return console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
let heroi1 = new hero('Allyson', 28, 'ninja');

heroi1.atacar();