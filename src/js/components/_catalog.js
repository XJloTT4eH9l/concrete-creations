const locationCata = String(window.location.href).split('/');

if(locationCata[locationCata.length - 1] === 'catalog.html') {
    const goodsNums = document.querySelectorAll('.product__num');
    const catalogInner = document.querySelector('.catalog-section__inner--page');
    const catalogGoods = [
        {num: 1, id: 1, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 2, id: 1, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '6250 грн/шт', img: 'img/plate.png'},
        {num: 3, id: 1, title: 'Плита П 10.5 (УБК-5)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '3400 грн/шт', img: 'img/plate.png'},
        {num: 4, id: 1, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5650 грн/шт', img: 'img/plate.png'},
        {num: 5, id: 2, title: 'Плита перекрытия ПБ-97', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate1.png'},
        {num: 6, id: 2, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/tray.png'},
        {num: 7, id: 2, title: 'Плита перекрытия ПБ-95-15-8', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate1.png'},
        {num: 8, id: 3, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 9, id: 3, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 10, id: 3, title: 'Плита перекрытия ПБ-95-17-8', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate1.png'},
        {num: 11, id: 3, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 12, id: 4, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 13, id: 4, title: 'Плита П 10.5 (УБК-5)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 14, id: 5, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 15, id: 5, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 16, id: 5, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 17, id: 5, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 18, id: 5, title: 'Плита П 10.5 (УБК-5)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 19, id: 6, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 20, id: 6, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 21, id: 6, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 22, id: 7, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 23, id: 7, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 24, id: 7, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 25, id: 7, title: 'Плита П 10.5 (УБК-5)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
        {num: 26, id: 7, title: 'Лоток Л 20.5 (УБК-2а)', descr: 'Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3', price: '5200 грн/шт', img: 'img/plate.png'},
    ];
    const catalog1 = catalogGoods.filter((item) => item.id === 1);
    const catalog2 = catalogGoods.filter((item) => item.id === 2);
    const catalog3 = catalogGoods.filter((item) => item.id === 3);
    const catalog4 = catalogGoods.filter((item) => item.id === 4);
    const catalog5 = catalogGoods.filter((item) => item.id === 5);
    const catalog6 = catalogGoods.filter((item) => item.id === 6);
    const catalog7 = catalogGoods.filter((item) => item.id === 7);

    goodsNums.forEach((elem, i) => {
        elem.textContent = catalogGoods.filter((item) => item.id === i+1).length;
    });

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click' , (event) => {
            
            catalogInner.classList.add('catalog-section__inner--flex');
            catalogInner.innerHTML = `
                <ul class="catalog-section__aside">
                    <li class="catalog-section__item"><a data-action="catalog1" class="catalog-section__link">Изделия для ОРУ подстанций 35-500 кВ <span class="product__num">${catalog1.length}</span><a/></li>
                    <li class="catalog-section__item"><a data-action="catalog2" class="catalog-section__link">Изделия для инженерных коммуникаций <span class="product__num">${catalog2.length}</span><a/></li>
                    <li class="catalog-section__item"><a data-action="catalog3" class="catalog-section__link">Изделия для колодцев канализационных сетей <span class="product__num">${catalog3.length}</span><a/></li>
                    <li class="catalog-section__item"><a data-action="catalog4" class="catalog-section__link">Изделия для балластировки магистральных трубопроводов <span class="product__num">${catalog4.length}</span><a/></li>
                    <li class="catalog-section__item"><a data-action="catalog5" class="catalog-section__link">Укрепления откосов дорог, русел и кюветов <span class="product__num">${catalog5.length}</span><a/></li>
                    <li class="catalog-section__item"><a data-action="catalog6" class="catalog-section__link">Камни бетонные и железобетонные бортовые <span class="product__num">${catalog6.length}</span><a/></li>
                    <li class="catalog-section__item"><a data-action="catalog7" class="catalog-section__link">Панели резервуаров, лотки <span class="product__num">${catalog7.length}</span></a></li>
                </ul>
            <div class="catalog-section__main"></div>
            `;
            let catalogSectionMain = document.querySelector('.catalog-section__main');
            if(event.target.dataset.action === 'catalog1') {
                catalog1.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            if(event.target.dataset.action === 'catalog2') {
                catalog2.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            if(event.target.dataset.action === 'catalog3') {
                catalog3.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            if(event.target.dataset.action === 'catalog4') {
                catalog4.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            if(event.target.dataset.action === 'catalog5') {
                catalog5.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            if(event.target.dataset.action === 'catalog6') {
                catalog6.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            if(event.target.dataset.action === 'catalog7') {
                catalog7.forEach(item => {
                    const element = document.createElement('div');
                    element.classList.add('product');
                    element.setAttribute('id', `${item.num}`);
                    element.innerHTML = `
                    <a href="product-page.html" data-action="card-content" class="product__link">
                        <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                        <h3 class="product__title" data-action="card-content">${item.title}</h3>
                        <p class="product__description" data-action="card-content">${item.descr}</p>
                        <p class="product__price" data-action="card-content">${item.price}</p>
                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                    </a>
                    `;
                    catalogSectionMain.append(element);
                });
            }
            const catalogSectionLink = document.querySelectorAll('.catalog-section__link');
            catalogSectionLink.forEach(item => {
                item.addEventListener('click', (e) => {
                    if(e.target.dataset.action === 'catalog1') {
                        catalogSectionMain.innerHTML = '';
                        catalog1.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price" data-action="card-content">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                    if(e.target.dataset.action === 'catalog2') {
                        catalogSectionMain.innerHTML = '';
                        catalog2.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price" data-action="card-content">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                    if(e.target.dataset.action === 'catalog3') {
                        catalogSectionMain.innerHTML = '';
                        catalog3.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price data-action="card-content"">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                    if(e.target.dataset.action === 'catalog4') {
                        catalogSectionMain.innerHTML = '';
                        catalog4.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price" data-action="card-content">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                    if(e.target.dataset.action === 'catalog5') {
                        catalogSectionMain.innerHTML = '';
                        catalog5.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price" data-action="card-content">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                    if(e.target.dataset.action === 'catalog6') {
                        catalogSectionMain.innerHTML = '';
                        catalog6.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price" data-action="card-content">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                    if(e.target.dataset.action === 'catalog7') {
                        catalogSectionMain.innerHTML = '';
                        catalog7.forEach(item => {
                            const element = document.createElement('div');
                            element.classList.add('product');
                            element.setAttribute('id', `${item.num}`);
                            element.innerHTML = `
                            <a href="product-page.html" data-action="card-content" class="product__link">
                                <img class="product__img" data-action="card-content" src=${item.img} alt="concrete tray l 20.5 (УБК-2А)">
                                <h3 class="product__title" data-action="card-content">${item.title}</h3>
                                <p class="product__description" data-action="card-content">${item.descr}</p>
                                <p class="product__price" data-action="card-content">${item.price}</p>
                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>
                            </a>
                            `;
                            catalogSectionMain.append(element);
                        });
                    }
                });
            });
        });
    });
}
console.log()