// Dados de exemplo para os produtos
const products = {
    doces: [
        {
            name: "Cone de Oreo",
            description: "Casquinha de baunilha banhada por dentro e por fora com chocolate branco cravejado de Oreo.",
            price: "R$ 5,00",
            imageUrl: "https://via.placeholder.com/100"
        },
        {
            name: "Brigadeiro",
            description: "Deliciosa sobremesa de chocolate, coberta com granulado.",
            price: "R$ 3,00",
            imageUrl: "https://via.placeholder.com/100"
        },
        {
            name: "Pudim",
            description: "Pudim de leite condensado com calda de caramelo.",
            price: "R$ 6,00",
            imageUrl: "https://via.placeholder.com/100"
        }
    ],
    bolos: [
        {
            name: "Bolo de Chocolate",
            description: "Bolo fofinho de chocolate com cobertura de brigadeiro.",
            price: "R$ 15,00",
            imageUrl: "https://via.placeholder.com/100"
        },
        {
            name: "Bolo de Morango",
            description: "Bolo de morango com cobertura de chantilly.",
            price: "R$ 12,00",
            imageUrl: "https://via.placeholder.com/100"
        }
    ]
};

let cart = []; // Carrinho de compras

// Função para renderizar os produtos
function renderProducts(category) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ""; // Limpa a lista antes de adicionar novos produtos
    const productsToRender = products[category];

    productsToRender.forEach(product => {
        const productHTML = `
            <div class="col-md-4 d-flex mb-3">
                <div class="product-image bg-secondary" style="width: 100px; height: 100px; background-image: url('${product.imageUrl}'); background-size: cover;"></div>
                <div class="ms-3">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <span class="badge bg-danger">${product.price}</span>
                    <button class="btn btn-primary mt-2" onclick="addToCart('${product.name}', '${product.price}')">Adicionar ao carrinho</button>
                </div>
            </div>
        `;
        productList.innerHTML += productHTML;
    });
}

// Função para adicionar ao carrinho
function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} foi adicionado ao carrinho!`);
}

// Funcionalidade de filtro de pesquisa
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const activeCategory = document.querySelector('#categoryTabs .nav-link.active').getAttribute('data-category');
    const filteredProducts = products[activeCategory].filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    const productList = document.getElementById('productList');
    productList.innerHTML = ""; // Limpa a lista antes de adicionar os produtos filtrados

    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="col-md-4 d-flex mb-3">
                <div class="product-image bg-secondary" style="width: 100px; height: 100px; background-image: url('${product.imageUrl}'); background-size: cover;"></div>
                <div class="ms-3">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <span class="badge bg-danger">${product.price}</span>
                    <button class="btn btn-primary mt-2" onclick="addToCart('${product.name}', '${product.price}')">Adicionar ao carrinho</button>
                </div>
            </div>
        `;
        productList.innerHTML += productHTML;
    });
});

// Inicializa com a categoria "doces"
renderProducts('doces');

// Adicionar funcionalidade para alternar entre as categorias
const tabs = document.querySelectorAll('#categoryTabs .nav-link');
tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Ativar a aba clicada
        tabs.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        // Desabilitar a outra aba
        tabs.forEach(item => item.classList.remove('disabled'));
        this.classList.add('disabled');

        // Obter a categoria selecionada
        const category = this.getAttribute('data-category');
        renderProducts(category);
    });
});
