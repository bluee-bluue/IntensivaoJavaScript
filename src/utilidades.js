export const catalogo = [
  {
    id: "1",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Journey Staff Branca",
    preco: 70,
    imagem: "product-1.jpg",
    feminino: false,
    tamanho: "M"
  },
  {
    id: "2",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Emba Preta",
    preco: 65,
    imagem: "product-2.jpg",
    feminino: false,
    tamanho: "GG"
  },
  {
    id: "3",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Estampada Preta",
    preco: 75,
    imagem: "product-3.jpg",
    feminino: false,
    tamanho: "M"
  },
  {
    id: "4",
    marca: "Onbongo",
    nome: "Bolsa Onbongo Shoulder Bag Staff Preta",
    preco: 245,
    imagem: "product-4.jpg",
    feminino: false,
    tamanho: "GG"
  },
  {
    id: "5",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Team Staff Branca",
    preco: 75,
    imagem: "product-5.jpg",
    feminino: false,
    tamanho: "P"
  },
  {
    id: "6",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Feminina Slices Preta",
    preco: 50,
    imagem: "product-6.jpg",
    feminino: true,
    tamanho: "P"
  },
  {
    id: "7",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Feminina Flag Rosa",
    preco: 50,
    imagem: "product-7.jpg",
    feminino: true,
    tamanho: "G"
  },
  {
    id: "8",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Feminina Rain Preta",
    preco: 50,
    imagem: "product-8.jpg",
    feminino: true,
    tamanho: "G"
  },
  {
    id: "9",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Feminina Estampada Preta",
    preco: 60,
    imagem: "product-9.jpg",
    feminino: true,
    tamanho: "G"
  },
  {
    id: "10",
    marca: "Onbongo",
    nome: "Camiseta Onbongo Feminina Estampada Azul Claro",
    preco: 60,
    imagem: "product-10.jpg",
    feminino: true,
    tamanho: "G"
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById(idContainerHTML);

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: ${produto.tamanho}</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}