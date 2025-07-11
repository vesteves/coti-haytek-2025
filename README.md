# Projeto Haytek

- Módulo de autenticação;
- Módulo de usuário protegido por token de autenticação;
- Banco MongoDB integrado;

- Módulo de produto
-- campos: codigo (texto), nome (texto), preço (inteiro)
- Módulo de categoria
-- campos: nome (texto), posicao (inteiro)
- Módulo CategoriaProduto
-- campos: produtoID (fk), categoriaID (fk)
- Módulo de estoque
-- campos: produtoId (FK), quantidade (inteiro), armazem (texto),
- Módulo de cliente
-- campos: usuarioId (fk), nome (texto), cnpj (texto), email (texto), endereco (texto), cadeia (texto)
- Módulo de pedido de compra
-- campos: clienteId (FK), items ([
    lista de produtoId (fk),
    quantidade (inteiro),
    preco (inteiro),
    armazem (texto)
]), 
