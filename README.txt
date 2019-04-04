---------------------------------------------------------- INTRODUÇÃO -----------------------------------------------------------

ECS6: Quem decide/formula novas funcionalidades do JS, por ser sempre atualizada (anualmente). ESC6 != de JS

Versões: ESC = Ano + 1... Ex: ES2015 -> ESC6, ES2016 -> ESC7, ES2017 -> ESC8

BABEL: Pega o códgo mais atualizado nas novas funcionalidades e converte num código, qual todos os navegadores entendam. Reescrevendo o código JS.

Webpack: Servidor de desenvolvimento com o conceito de LiveReload, onde atualiza o navegador e ativa o Babel no momento em que o nosso codigo é alterado e também permite que possamos realizar import e export de código JS.

Classes:

Arrow Functions: Novo modelo de criação de funções anonimas

Desestruturação: Recuperar propriedades de objetos e arrays de forma mais fácil

Rest / Spread: Fornmas de manipular as propriedades e informações dentro de objetos e arrays

Import / Export: Importar e exportar funcionalidades de um arquivo JS para outro, sem precisar ficar taggeando toda hora

Async / Await: Vai fornecer uma API nova para trabalhar com programação assíncrona usando JS


--------------------------------------------------- CONFIGURAÇÃO DE AMBIENTE ----------------------------------------------------

Instalar NODE
Instalar YARN - Gerenciador de pacotes do JS

----------------------------------------------------- INICIANDO O PROJETO -------------------------------------------------------

yarn init 
yarn add @babel/cli
yarn add @babel/preset-env -> Qual o ambiente utilizado no momento para converter as feats do ES6 num JS para qual o nav leia
yarn add @babel/core 
yarn add @babel/plugin-proposal-object-rest-spread