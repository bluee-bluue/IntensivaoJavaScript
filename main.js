import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { atualizarPrecocarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecocarrinho();
renderizarProdutosCarrinho();
inicializarFiltros();