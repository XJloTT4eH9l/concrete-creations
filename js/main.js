(()=>{var t={135:()=>{var t=document.querySelector(".burger-menu"),c=document.querySelector(".nav-mobile"),e=document.querySelectorAll(".nav-mobile__link");t.addEventListener("click",(function(){t.classList.toggle("burger-menu--active"),c.classList.toggle("nav-mobile--active")})),e.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("burger-menu--active"),c.classList.remove("nav-mobile--active")}))}))},32:()=>{window.addEventListener("click",(function(t){if("card-content"===t.target.dataset.action){var c=t.target,e=c.closest(".product").getAttribute("id"),n=c.querySelector(".product__title"),a=c.querySelector(".product__img"),r=c.querySelector(".product__description").textContent,o=c.querySelector(".product__price"),i=r.split(" ");i.shift();var s=i[0].split("×").map((function(t){return parseInt(t)})),l=parseFloat(i[1]),d=parseFloat(i[2].slice(5,10));s.push(l),s.push(d);var p={id:e,title:n.textContent,imgSrc:a.getAttribute("src"),price:o.textContent,characteristics:s};console.log(i[0]),localStorage.setItem("cardInfo",JSON.stringify(p))}}));var t=String(window.location.href).split("/");if("product-page.html"===t[t.length-1]){var c=document.querySelector(".bread-crumbs__item--last"),e=document.querySelector(".card-content__inner"),n=document.querySelector(".card-content__title"),a=document.querySelector(".card-content__characteristics--length"),r=document.querySelector(".card-content__characteristics--width"),o=document.querySelector(".card-content__characteristics--heigth"),i=document.querySelector(".card-content__characteristics--weigth"),s=document.querySelector(".card-content__characteristics--depth"),l=document.querySelector(".product__price"),d=document.querySelector(".card-content__img"),p=JSON.parse(localStorage.getItem("cardInfo"));e.setAttribute("id",p.id),c.textContent=p.title,n.textContent=p.title,d.src=p.imgSrc,a.innerHTML="Длина: <span>".concat(p.characteristics[0]," мм</span>"),r.innerHTML="Ширина: <span>".concat(p.characteristics[1]," мм</span>"),o.innerHTML="Высота: <span>".concat(p.characteristics[2]," мм</span>"),i.innerHTML="Вес: <span>".concat(p.characteristics[3]," т</span>"),s.innerHTML="Объём: <span>".concat(p.characteristics[4]," м<sup>3</sup></span>"),l.textContent=p.price,console.log(p)}},626:()=>{var t=[];window.addEventListener("click",(function(c){if("addToCart"===c.target.dataset.action){c.preventDefault();var e=c.target.closest(".product"),n=e.querySelector(".product__title"),a=e.querySelector(".product__img"),r=e.querySelector(".product__price"),o={id:e.getAttribute("id"),title:n.textContent,img:a.getAttribute("src"),price:r.textContent};t.push(o),localStorage.setItem("cartGoods",JSON.stringify(t)),alert("Товар: ".concat(o.title," добавлен."))}if("addToCart-ProductPage"===c.target.dataset.action){var i=document.querySelector(".card-content__inner"),s=i.querySelector(".card-content__title"),l=i.querySelector(".card-content__img"),d=i.querySelector(".product__price"),p={id:i.getAttribute("id"),title:s.textContent,img:l.getAttribute("src"),price:d.textContent};t.push(p),localStorage.setItem("cartGoods",JSON.stringify(t)),alert("Товар: ".concat(p.title," добавлен."))}}));var c=String(window.location.href).split("/");if("cart.html"===c[c.length-1]){var e=document.querySelector(".cart__items"),n=document.querySelector(".cart__inner"),a=JSON.parse(localStorage.getItem("cartGoods"));if(null==a){var r=document.createElement("h2");r.classList.add("cart__empty"),r.textContent="Корзина пуста",e.append(r)}else{a.forEach((function(t){var c=document.createElement("div");c.classList.add("cart__item"),c.innerHTML='\n            <img class="cart__img" src="'.concat(t.img,'" alt="">\n            <div class="cart__descr">\n                <p class="cart__title">Название: <span>').concat(t.title,'</span></p>\n                <p class="cart__price">Цена: <span>').concat(t.price,'</span></p>\n            </div>\n            <div class="cart__quantity">\n                <div class="cart__buttons">\n                    <button data-action="minus" class="btn-reset btn cart__btn">-</button>\n                    <span class="cart__amount">1</span>\n                    <button data-action="plus" class="btn-reset btn cart__btn">+</button>\n                </div>\n            </div>\n            <div class="cart__summary">\n                <p class="cart__title">Сумма:</p>\n                <p class="cart__summ">').concat(parseInt(t.price)+" грн",'</p>\n            </div>\n            <button id="').concat(t.id,'" data-action="delete" class="btn-reset btn cart__delete-btn">x</button>\n            '),e.append(c)}));var o=document.createElement("button");o.classList.add("btn-reset","btn","btn--md","btn__accent","cart__order-btn"),o.textContent="Заказать",n.append(o),o.addEventListener("click",(function(){a.length>0&&(localStorage.clear(),document.querySelectorAll(".cart__item").forEach((function(t){return t.remove()})),i(),document.querySelector(".cart__order-btn").remove(),alert("Заказ принят"))})),i()}function i(){var t=document.querySelectorAll(".cart__summ"),c=document.querySelector(".cart__full-price"),e=0;t.forEach((function(t){e+=parseInt(t.textContent)})),c.innerHTML="Итого: <span>".concat(e," грн</span>")}window.addEventListener("click",(function(t){if("minus"===t.target.dataset.action){var c=t.target.closest(".cart__item"),n=c.querySelector(".cart__price"),r=c.querySelector(".cart__summ"),o=t.target.closest(".cart__quantity").querySelector(".cart__amount");o.textContent>1&&(o.textContent=--o.textContent,r.textContent=+o.textContent*parseInt(n.textContent.split(" ")[1])+" грн",i())}if("plus"===t.target.dataset.action){var s=t.target.closest(".cart__item"),l=s.querySelector(".cart__price"),d=s.querySelector(".cart__summ"),p=t.target.closest(".cart__quantity").querySelector(".cart__amount");p.textContent=++p.textContent,d.textContent=+p.textContent*parseInt(l.textContent.split(" ")[1])+" грн",i()}if("delete"===t.target.dataset.action){for(var _=0;_<a.length;_++)if(a[_].id===t.target.id&&(console.log(a[_].id),a.splice(_,1),localStorage.setItem("cartGoods",JSON.stringify(a)),0===a.length)){var u=document.createElement("h2");u.classList.add("cart__empty"),u.textContent="Корзина пуста",e.append(u)}t.target.closest(".cart__item").remove(),i()}}))}},758:()=>{var t=String(window.location.href).split("/");if("catalog.html"===t[t.length-1]){var c=document.querySelectorAll(".product__num"),e=document.querySelector(".catalog-section__inner--page"),n=[{num:1,id:1,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:2,id:1,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"6250 грн/шт",img:"img/plate.png"},{num:3,id:1,title:"Плита П 10.5 (УБК-5)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"3400 грн/шт",img:"img/plate.png"},{num:4,id:1,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5650 грн/шт",img:"img/plate.png"},{num:5,id:2,title:"Плита перекрытия ПБ-97",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate1.png"},{num:6,id:2,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/tray.png"},{num:7,id:2,title:"Плита перекрытия ПБ-95-15-8",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate1.png"},{num:8,id:3,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:9,id:3,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:10,id:3,title:"Плита перекрытия ПБ-95-17-8",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate1.png"},{num:11,id:3,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:12,id:4,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:13,id:4,title:"Плита П 10.5 (УБК-5)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:14,id:5,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:15,id:5,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:16,id:5,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:17,id:5,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:18,id:5,title:"Плита П 10.5 (УБК-5)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:19,id:6,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:20,id:6,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:21,id:6,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:22,id:7,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:23,id:7,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:24,id:7,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:25,id:7,title:"Плита П 10.5 (УБК-5)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"},{num:26,id:7,title:"Лоток Л 20.5 (УБК-2а)",descr:"Д/Ш/В 3080×2060×580 мм Вес 0.175т Объём&nbsp;0.07м3",price:"5200 грн/шт",img:"img/plate.png"}],a=n.filter((function(t){return 1===t.id})),r=n.filter((function(t){return 2===t.id})),o=n.filter((function(t){return 3===t.id})),i=n.filter((function(t){return 4===t.id})),s=n.filter((function(t){return 5===t.id})),l=n.filter((function(t){return 6===t.id})),d=n.filter((function(t){return 7===t.id}));c.forEach((function(t,c){t.textContent=n.filter((function(t){return t.id===c+1})).length})),document.querySelectorAll(".product").forEach((function(t){t.addEventListener("click",(function(t){e.classList.add("catalog-section__inner--flex"),e.innerHTML='\n                <ul class="catalog-section__aside">\n                    <li class="catalog-section__item"><a data-action="catalog1" class="catalog-section__link">Изделия для ОРУ подстанций 35-500 кВ <span class="product__num">'.concat(a.length,'</span><a/></li>\n                    <li class="catalog-section__item"><a data-action="catalog2" class="catalog-section__link">Изделия для инженерных коммуникаций <span class="product__num">').concat(r.length,'</span><a/></li>\n                    <li class="catalog-section__item"><a data-action="catalog3" class="catalog-section__link">Изделия для колодцев канализационных сетей <span class="product__num">').concat(o.length,'</span><a/></li>\n                    <li class="catalog-section__item"><a data-action="catalog4" class="catalog-section__link">Изделия для балластировки магистральных трубопроводов <span class="product__num">').concat(i.length,'</span><a/></li>\n                    <li class="catalog-section__item"><a data-action="catalog5" class="catalog-section__link">Укрепления откосов дорог, русел и кюветов <span class="product__num">').concat(s.length,'</span><a/></li>\n                    <li class="catalog-section__item"><a data-action="catalog6" class="catalog-section__link">Камни бетонные и железобетонные бортовые <span class="product__num">').concat(l.length,'</span><a/></li>\n                    <li class="catalog-section__item"><a data-action="catalog7" class="catalog-section__link">Панели резервуаров, лотки <span class="product__num">').concat(d.length,'</span></a></li>\n                </ul>\n            <div class="catalog-section__main"></div>\n            ');var c=document.querySelector(".catalog-section__main");"catalog1"===t.target.dataset.action&&a.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),"catalog2"===t.target.dataset.action&&r.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),"catalog3"===t.target.dataset.action&&o.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),"catalog4"===t.target.dataset.action&&i.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),"catalog5"===t.target.dataset.action&&s.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),"catalog6"===t.target.dataset.action&&l.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),"catalog7"===t.target.dataset.action&&d.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                    <a href="product-page.html" data-action="card-content" class="product__link">\n                        <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                        <h3 class="product__title">').concat(t.title,'</h3>\n                        <p class="product__description">').concat(t.descr,'</p>\n                        <p class="product__price">').concat(t.price,'</p>\n                        <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                    </a>\n                    '),c.append(e)})),document.querySelectorAll(".catalog-section__link").forEach((function(t){t.addEventListener("click",(function(t){"catalog1"===t.target.dataset.action&&(c.innerHTML="",a.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)}))),"catalog2"===t.target.dataset.action&&(c.innerHTML="",r.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)}))),"catalog3"===t.target.dataset.action&&(c.innerHTML="",o.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)}))),"catalog4"===t.target.dataset.action&&(c.innerHTML="",i.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)}))),"catalog5"===t.target.dataset.action&&(c.innerHTML="",s.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)}))),"catalog6"===t.target.dataset.action&&(c.innerHTML="",l.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)}))),"catalog7"===t.target.dataset.action&&(c.innerHTML="",d.forEach((function(t){var e=document.createElement("div");e.classList.add("product"),e.setAttribute("id","".concat(t.num)),e.innerHTML='\n                            <a href="product-page.html" data-action="card-content" class="product__link">\n                                <img class="product__img" src='.concat(t.img,' alt="concrete tray l 20.5 (УБК-2А)">\n                                <h3 class="product__title">').concat(t.title,'</h3>\n                                <p class="product__description">').concat(t.descr,'</p>\n                                <p class="product__price">').concat(t.price,'</p>\n                                <button data-action="addToCart" class="btn btn__accent btn__short btn__product btn-reset">В корзину</button>\n                            </a>\n                            '),c.append(e)})))}))}))}))}))}},6:()=>{var t=document.querySelectorAll(".detailed"),c=document.querySelector(".news-section"),e=document.querySelectorAll(".news-section__title"),n=document.querySelectorAll(".news-section__img"),a=["Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).","Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.","Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.","Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.","Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).","Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.","Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.","Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.","Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).","Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.","Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.","Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях."];t.forEach((function(t,r){t.addEventListener("click",(function(){console.log("click");var t=document.createElement("div");t.classList.add("modal"),t.innerHTML='\n             <div class="modal__dialog">\n                 <div class="modal__content">\n                     <h4 class="modal__title">'.concat(e[r].textContent,'</h4>\n                     <img class="modal__img" src="').concat(n[r].src,'" alt="">\n                     <p class="modal__text">').concat(a[r],'</p>\n                     <button class="btn-reset modal__closebtn">\n                         <svg class="modal__close">\n                             <use xlink:href="#modal__close">\n                         </svg>\n                     </button>\n                 </div\n             </div>\n         '),c.append(t),document.body.style.overflow="hidden",document.querySelector(".modal__closebtn").addEventListener("click",(function(){t.remove(),document.body.style.overflow=""}))}))}));var r=document.querySelector(".about-production"),o=document.querySelectorAll(".detailed1"),i=document.querySelectorAll(".about-production__title"),s=document.querySelectorAll(".about-production__img");o.forEach((function(t,c){t.addEventListener("click",(function(){console.log("click");var t=document.createElement("div");t.classList.add("modal"),t.innerHTML='\n             <div class="modal__dialog">\n                 <div class="modal__content">\n                     <h4 class="modal__title">'.concat(i[c].textContent,'</h4>\n                     <img class="modal__img" src="').concat(s[c].src,'" alt="">\n                     <p class="modal__text">').concat(a[c],'</p>\n                     <button class="btn-reset modal__closebtn">\n                         <svg class="modal__close">\n                             <use xlink:href="#modal__close">\n                         </svg>\n                     </button>\n                 </div\n             </div>\n         '),r.append(t),document.body.style.overflow="hidden",document.querySelector(".modal__closebtn").addEventListener("click",(function(){t.remove(),document.body.style.overflow=""}))}))}))},892:()=>{var t=document.querySelectorAll(".news-section__btn--show-more"),c=document.querySelectorAll(".news-section__item--more"),e=document.querySelector(".news-section__list--page");t.forEach((function(t){t.addEventListener("click",(function(){t.classList.add("hidden"),c.forEach((function(t){t.classList.toggle("hidden")}));var n=document.createElement("button");n.classList.add("btn","btn__accent","btn-reset","btn__wide","news-section__btn"),n.textContent="Показать меньше",e.append(n),n.addEventListener("click",(function(){n.remove(),c.forEach((function(t){t.classList.toggle("hidden")})),t.classList.remove("hidden")}))}))}))},468:()=>{var t=new Swiper(".swiper-stock-preview",{loop:!0,spaceBetween:10,slidesPerView:7,freeMode:!0,watchSlidesProgress:!0});new Swiper(".swiper-stock-main",{loop:!0,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:t}})},208:()=>{var t=String(window.location.href).split("/");"vacancies.html"===t[t.length-1]&&window.addEventListener("click",(function(t){if("offer"===t.target.dataset.action){var c=document.querySelector(".vacancies"),e=t.target.closest(".vacancies__item"),n=e.querySelector(".vacancies__title").textContent,a=e.querySelector(".vacancies__descr").textContent,r=e.querySelector(".vacancies__salary").textContent,o=e.querySelector(".vacancies__requir").textContent.split("/"),i=document.createElement("div");i.classList.add("modal"),i.innerHTML='\n                <div class="modal__dialog">\n                <div class="modal__content modal__content--vacancies">\n                    <h3 class="vacancies__title vacancies__title--modal">'.concat(n,'</h3>\n                    <p class="vacancies__descr vacancies__descr--modal">').concat(a,'</p>\n                    <h4 class="vacancies__requirements">Требования:</h4>\n                    <ul class="purchases__list vacancies__reqs"></ul>\n                    <p class="vacancies__salary">').concat(r,'</p>\n                    <button class="btn-reset modal__closebtn">\n                        <svg class="modal__close">\n                            <use xlink:href="#modal__close">\n                        </svg>\n                    </button>\n                </div\n            </div>\n            '),c.append(i);var s=document.querySelector(".modal__content--vacancies").querySelector(".vacancies__reqs");o.forEach((function(t){var c=document.createElement("li");c.classList.add("purchases__item","vacancies__requirment"),c.textContent=t,s.append(c)})),document.body.style.overflow="hidden",document.querySelector(".modal__closebtn").addEventListener("click",(function(){i.remove(),document.body.style.overflow=""}))}}))}},c={};function e(n){var a=c[n];if(void 0!==a)return a.exports;var r=c[n]={exports:{}};return t[n](r,r.exports,e),r.exports}(()=>{"use strict";e(135),e(6),e(468),e(892),e(208),e(758),e(626),e(32)})()})();