window.addEventListener('click', (event) => {
    if(event.target.dataset.action === 'card-content') {
        const productLink = event.target;
        const productId = productLink.closest('.product').getAttribute('id');
        const productTitle = productLink.querySelector('.product__title');
        const productImg = productLink.querySelector('.product__img');
        const productDescr = productLink.querySelector('.product__description').textContent;
        const productPrice = productLink.querySelector('.product__price');
        

        let deskrArr = productDescr.split(' ');
        deskrArr.shift();
        let characteristics = deskrArr[0].split('×').map(item => parseInt(item));
        const weigth = parseFloat(deskrArr[1]);
        const depth = parseFloat(deskrArr[2].slice(5, 10));
        characteristics.push(weigth);
        characteristics.push(depth);
        
        const productData = {
            id: productId,
            title: productTitle.textContent,
            imgSrc: productImg.getAttribute('src'),
            price: productPrice.textContent,
            characteristics: characteristics
        };
        console.log(deskrArr[0]);
        localStorage.setItem('cardInfo', JSON.stringify(productData));
    }
});

const productPageLocation = String(window.location.href).split('/');
if(productPageLocation[productPageLocation.length - 1] === 'product-page.html') {
    const breadCrumb = document.querySelector('.bread-crumbs__item--last');
    const cardContentInner = document.querySelector('.card-content__inner');
    const cardTitle = document.querySelector('.card-content__title');
    const cardLength = document.querySelector('.card-content__characteristics--length');
    const cardWidth = document.querySelector('.card-content__characteristics--width');
    const cardHeight = document.querySelector('.card-content__characteristics--heigth');
    const cardWeight = document.querySelector('.card-content__characteristics--weigth');
    const cardDepth = document.querySelector('.card-content__characteristics--depth');
    const cardPrice = document.querySelector('.product__price')
    const cardImg = document.querySelector('.card-content__img');
    const cardInfo = JSON.parse(localStorage.getItem('cardInfo'));

    cardContentInner.setAttribute('id', cardInfo.id);
    breadCrumb.textContent = cardInfo.title;
    cardTitle.textContent = cardInfo.title;
    cardImg.src = cardInfo.imgSrc;
    cardLength.innerHTML = `Длина: <span>${cardInfo.characteristics[0]} мм</span>`;
    cardWidth.innerHTML = `Ширина: <span>${cardInfo.characteristics[1]} мм</span>`;
    cardHeight.innerHTML = `Высота: <span>${cardInfo.characteristics[2]} мм</span>`;
    cardWeight.innerHTML = `Вес: <span>${cardInfo.characteristics[3]} т</span>`;
    cardDepth.innerHTML = `Объём: <span>${cardInfo.characteristics[4]} м<sup>3</sup></span>`;
    cardPrice.textContent = cardInfo.price;

    console.log(cardInfo);
}