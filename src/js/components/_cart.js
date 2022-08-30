const allCartItems = [];
window.addEventListener('click', (event) => {
    if(event.target.dataset.action === 'addToCart') {
        event.preventDefault();
        const card = event.target.closest('.product');
        const cardTitle = card.querySelector('.product__title');
        const cardImgUrl = card.querySelector('.product__img');
        const cardPrice = card.querySelector('.product__price');
        const cardObj = {
            id: card.getAttribute('id'),
            title: cardTitle.textContent,
            img: cardImgUrl.getAttribute('src'),
            price: cardPrice.textContent
        }
        allCartItems.push(cardObj);
        localStorage.setItem('cartGoods', JSON.stringify(allCartItems));
        alert(`Товар: ${cardObj.title} добавлен.`);
    }
    if(event.target.dataset.action === 'addToCart-ProductPage') {
        const product = document.querySelector('.card-content__inner');
        const productTitle = product.querySelector('.card-content__title');
        const productImage = product.querySelector('.card-content__img');
        const productPrice = product.querySelector('.product__price');

        const producObject = {
            id: product.getAttribute('id'),
            title: productTitle.textContent,
            img: productImage.getAttribute('src'),
            price: productPrice.textContent 
        }
        allCartItems.push(producObject);
        localStorage.setItem('cartGoods', JSON.stringify(allCartItems));
        alert(`Товар: ${producObject.title} добавлен.`);
    }
});


let cartLocaiton = String(window.location.href).split('/');


if(cartLocaiton[cartLocaiton.length - 1] === 'cart.html') {
    const cartItems = document.querySelector('.cart__items');
    const cartInner = document.querySelector('.cart__inner');
    let cartGoods = JSON.parse(localStorage.getItem('cartGoods'));
    if(cartGoods === null || cartGoods === undefined) {
        const cartEmpty = document.createElement('h2');
        cartEmpty.classList.add('cart__empty');
        cartEmpty.textContent = 'Корзина пуста';
        cartItems.append(cartEmpty);
        
    } else {
        cartGoods.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart__item');
            cartItem.innerHTML = `
            <img class="cart__img" src="${item.img}" alt="">
            <div class="cart__descr">
                <p class="cart__title">Название: <span>${item.title}</span></p>
                <p class="cart__price">Цена: <span>${item.price}</span></p>
            </div>
            <div class="cart__quantity">
                <div class="cart__buttons">
                    <button data-action="minus" class="btn-reset btn cart__btn">-</button>
                    <span class="cart__amount">1</span>
                    <button data-action="plus" class="btn-reset btn cart__btn">+</button>
                </div>
            </div>
            <div class="cart__summary">
                <p class="cart__title">Сумма:</p>
                <p class="cart__summ">${parseInt(item.price) + ' грн'}</p>
            </div>
            <button id="${item.id}" data-action="delete" class="btn-reset btn cart__delete-btn">x</button>
            `;
            cartItems.append(cartItem);
        });
        const orderBtn = document.createElement('button');
        orderBtn.classList.add('btn-reset', 'btn', 'btn--md', 'btn__accent', 'cart__order-btn');
        orderBtn.textContent = 'Заказать';
        cartInner.append(orderBtn);
        orderBtn.addEventListener('click', makeOrder);

        showSummary();
    }
    window.addEventListener('click', (event) => {
        if(event.target.dataset.action === 'minus') {
            const cartItem = event.target.closest('.cart__item');
            const cartPrice = cartItem.querySelector('.cart__price');
            const cartSumm = cartItem.querySelector('.cart__summ');
            const cartQuanity = event.target.closest('.cart__quantity');
            const counter = cartQuanity.querySelector('.cart__amount');

            if(counter.textContent > 1) {
                counter.textContent = --counter.textContent;
                cartSumm.textContent = +counter.textContent * parseInt(cartPrice.textContent.split(' ')[1]) + ' грн';
                showSummary();
            }
        }
        if(event.target.dataset.action === 'plus') {
            const cartItem = event.target.closest('.cart__item');
            const cartPrice = cartItem.querySelector('.cart__price');
            const cartSumm = cartItem.querySelector('.cart__summ');
            const cartQuanity = event.target.closest('.cart__quantity');
            const counter = cartQuanity.querySelector('.cart__amount');

            counter.textContent = ++counter.textContent;
            cartSumm.textContent = +counter.textContent * parseInt(cartPrice.textContent.split(' ')[1]) + ' грн';
            showSummary();
        }
        if(event.target.dataset.action === 'delete') {

            for(let i = 0; i < cartGoods.length; i++) {
                if(cartGoods[i].id === event.target.id) {
                    console.log(cartGoods[i].id)
                    cartGoods.splice(i, 1);
                    localStorage.setItem('cartGoods', JSON.stringify(cartGoods));
                    if(cartGoods.length === 0) {
                        const cartEmpty = document.createElement('h2');
                        cartEmpty.classList.add('cart__empty');
                        cartEmpty.textContent = 'Корзина пуста';
                        cartItems.append(cartEmpty);
                    }
                }
            }

            const cartItem = event.target.closest('.cart__item');
            cartItem.remove();
            showSummary();
        }
    });

    function removeCartGoods() {
        const cartItems = document.querySelectorAll('.cart__item');
        cartItems.forEach(item => item.remove());
    }

    function showSummary() {
        const prices = document.querySelectorAll('.cart__summ');
        const fullPrice = document.querySelector('.cart__full-price');
        let price = 0;

        prices.forEach(item => {
            price += parseInt(item.textContent);
        });

        fullPrice.innerHTML = `Итого: <span>${price} грн</span>`;
    }
    function makeOrder() {
        if(cartGoods.length > 0) {
            localStorage.clear();
            removeCartGoods();
            showSummary();
            document.querySelector('.cart__order-btn').remove();
            alert('Заказ принят');
        }
    }
}