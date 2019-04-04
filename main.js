const usuario = {
  nome: "Fulano",
  idade: "20",
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

//Esta forma é muito verbosa, podemos usar desestruturação.

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//ou podemos usar dentro de uma function()
//criamos a function de leitura, esperando por parâmetro um array de dados, que deve ser o que queremos ler no objeto esperado
function mostrarUsuario({ nome, idade, endereco: { cidade } }) {
  console.log(nome, idade, cidade);
}

//chamamos a function passando o objeto que queremos ler por parâmetro
mostrarUsuario(usuario);