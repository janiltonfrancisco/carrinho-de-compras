Carrinho de Compras - Projeto em HTML, CSS e JavaScript

Preview do Carrinho de Compras

Um carrinho de compras interativo desenvolvido com HTML, CSS e JavaScript puro, utilizando Bootstrap para o layout responsivo.

Funcionalidades:

1. Adicionar/remover itens do carrinho

2. Cálculo automático do subtotal

3. Interface responsiva

4. Contador de quantidade por item

5. Exibição do valor total da compra

Tecnologias Utilizadas:
  
-HTML5

-CSS3

-JavaScript (ES6)

-Bootstrap 4

-Font Awesome (ícones)

Estrutura do Projeto:

carrinho-compras/
├── index.html

├── css/

│   └── cart.css

├── js/

│   └── cart.js

├── README.md


Como Usar:

-Clone o repositório ou faça o download dos arquivos

-Abra o arquivo index.html no seu navegador

-Interaja com os botões "+" e "-" para ajustar as quantidades

-Observe o cálculo automático dos valores

Funcionamento do Código:

-O JavaScript implementa três funções principais:

-adicionarItem(item) - Incrementa a quantidade de um item e recalcula o total

-removerItem(item) - Decrementa a quantidade de um item (se > 0) e recalcula o total

-valorCompra() - Calcula o subtotal de todos os itens no carrinho

Personalização

Para adicionar mais produtos:

Adicione um novo elemento HTML com a estrutura produtoX (onde X é o índice)


Atualize os arrays no JavaScript:

valorProduto - Adicione o preço do novo produto

valorTotal - Adicione uma posição inicial (0)

qtd - Adicione uma posição inicial (0)
