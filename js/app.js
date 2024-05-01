let totalGeral;
limpar();

function adicionar() {
    //1. Recuperar valores: nome do produto, quantidade e preço;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // alert(nomeProduto);
    // alert(valorProduto);
    // alert(quantidade.value);

    //2. Calcular o valor do preço conforme a quantidade;
    let preco = quantidade * valorProduto;
    // alert(preco);

    //3. Adicionar no carrinho;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

    //4. Atualizar o subtotal de toda a compra;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = '';
}

//5. Limpar informações: produtos no carrinho e valor total;

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}