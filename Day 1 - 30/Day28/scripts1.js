// Declaração de um array de objetos, cada objeto contém uma tag HTML e um texto
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

// Seleciona o elemento do DOM com a classe 'container'
const container = document.querySelector(".container");

// Cria um novo elemento div que servirá como contêiner para os novos elementos
const div = document.createElement("div");

// Loop através do array 'elementos'
for (let i = 0; i < elementos.length; i++) {
  // Desestruturação do objeto atual para obter a tag e o texto
  let { tag, texto } = elementos[i];

  // Cria um novo elemento HTML com base na tag fornecida (p, div, footer, section)
  let creatTag = document.createElement(tag);

  // Cria um nó de texto com o conteúdo fornecido
  let createText = document.createTextNode(texto);

  // Adiciona o nó de texto ao elemento HTML criado
  creatTag.appendChild(createText);

  // Adiciona o elemento HTML (com o texto) ao contêiner 'div'
  div.appendChild(creatTag);
}

// Adiciona a 'div' (contendo todos os novos elementos HTML) ao contêiner principal no DOM
container.appendChild(div);