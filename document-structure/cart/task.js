document.addEventListener('DOMContentLoaded', () => {
    const cartProducts = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');
  
    // Функция для обновления количества товара в корзине
    function updateCartItem(productId, quantity) {
        const cartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        if (cartItem) {
            const countElement = cartItem.querySelector('.cart__product-count');
            countElement.textContent = quantity;
        } else {
            addItemToCart(productId, quantity);
        }
    }

    // Функция для добавления товара в корзину
    function addItemToCart(productId, quantity) {
        const product = document.querySelector(`.product[data-id="${productId}"]`);
        const image = product.querySelector('.product__image').src;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart__product');
        cartItem.setAttribute('data-id', productId);
        cartItem.innerHTML = `
            <img class="cart__product-image" src="${image}" alt="product image">
            <div class="cart__product-count">${quantity}</div>
        `;
        
        cartProducts.appendChild(cartItem);
    }

    // Обработчик кнопки "Добавить в корзину"
    products.forEach(product => {
        const addButton = product.querySelector('.product__add');
        const quantityControlInc = product.querySelector('.product__quantity-control_inc');
        const quantityControlDec = product.querySelector('.product__quantity-control_dec');
        const quantityValue = product.querySelector('.product__quantity-value');
        
        let quantity = parseInt(quantityValue.textContent);

        // Увеличение количества
        quantityControlInc.addEventListener('click', () => {
            quantity++;
            quantityValue.textContent = quantity;
        });

        // Уменьшение количества
        quantityControlDec.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityValue.textContent = quantity;
            }
        });

        // Добавление товара в корзину
        addButton.addEventListener('click', () => {
            updateCartItem(product.dataset.id, quantity);
        });
    });
});
