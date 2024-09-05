var valorTotal = [0,0];
var valorProduto = [50.00,30.00];
var qtd = [0,0];

function adicionarItem(item){
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);
    qtd [item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
// innerhtml é pq irá buscar no documento html...
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();

}

function removerItem(item){
  // O item será removido apenas se for maior que 0...  
   if(qtd[item] > 0){
    qtd[item] -=1;
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
    

    }
}


// vamos adicionar o total do carrinho, item 0 e 1

function valorCompra(){
    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;

    for(var i = 0; i < valorTotal.length; i++){
        valor+= valorTotal[i];
       
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);

}