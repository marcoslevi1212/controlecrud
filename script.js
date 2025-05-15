document.getElementById("produto-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const preco = parseFloat(document.getElementById("preco").value);

  if (!nome || quantidade <= 0 || preco <= 0) {
    alert("Preencha os campos corretamente!");
    return;
  }

  adicionarProduto(nome, quantidade, preco);
  this.reset();
});

function adicionarProduto(nome, quantidade, preco) {
  const tabela = document.querySelector("#tabela-produtos tbody");
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${nome}</td>
    <td>${quantidade}</td>
    <td>R$ ${preco.toFixed(2)}</td>
    <td>
      <button onclick="editarProduto(this)">Editar</button>
      <button onclick="removerProduto(this)">Remover</button>
    </td>
  `;

  tabela.appendChild(linha);
}

function removerProduto(botao) {
  const linha = botao.parentElement.parentElement;
  linha.remove();
}

function editarProduto(botao) {
  const linha = botao.parentElement.parentElement;
  const nome = linha.children[0].innerText;
  const quantidade = linha.children[1].innerText;
  const preco = linha.children[2].innerText.replace("R$ ", "").replace(",", ".");

  document.getElementById("nome").value = nome;
  document.getElementById("quantidade").value = quantidade;
  document.getElementById("preco").value = preco;

  linha.remove();
}