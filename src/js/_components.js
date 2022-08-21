window.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.burger-menu');
    const navMobile = document.querySelector('.nav-mobile');
    const navMobileLink = document.querySelectorAll('.nav-mobile__link');


    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger-menu--active');
        navMobile.classList.toggle('nav-mobile--active');
    });
    navMobileLink.forEach((item) => {
        item.addEventListener('click', e => {
            burgerBtn.classList.remove('burger-menu--active');
            navMobile.classList.remove('nav-mobile--active');
        });
    });

    //Modal main page
    const detailed = document.querySelectorAll('.detailed');
    const newsSection = document.querySelector('.news-section');
    const newsSectionTitle = document.querySelectorAll('.news-section__title');
    const newsSectionImg = document.querySelectorAll('.news-section__img');
    const modalText = [
        'Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).',

        'Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.',

        'Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.',

        'Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.',
        
        'Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).',

        'Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.',

        'Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.',

        'Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.',
        
        'Армирование конструкций выполняется, как правило, отдельными стальными стержнями или сетками, каркасами. Диаметр стержней и характер их расположения определяется расчётами. При этом соблюдается следующий принцип — арматура устанавливается в растянутые зоны бетона либо в сжатые зоны при недостаточной прочности последней, а также по конструктивным соображениям. При расчёте железобетонных изгибаемых элементов основной целью является определение требуемой площади рабочей арматуры в соответствии с заданными усилиями (прямая задача) или определение действительной несущей способности элемента по заданным геометрическим и прочностным параметрам (обратная задача).',

        'Наш завод ЖБИ основан в 2015 году В самом начале мы научились продавать и организовывать логистику для потребителей железобетонных изделий. Затем мы пошли дальше. Что бы ни утонуть в современном, быстроменяющемся рынке ЖБИ изделий, где вытесняются посредники государственными структурами и пожеланиями потребителей, коллективом ООО «ЗДСК» принято решение, об организации производства ЖБИ изделий.',

        'Недостатком заводского способа изготовления является невозможность выпускать широкий ассортимент конструкций. Особенно это относится к разнообразию форм изготавливаемых конструкций, которые ограничиваются типовыми опалубками. Фактически на заводах ЖБИ изготавливаются только конструкции, требующие массового применения. В свете этого обстоятельства, широкое внедрение технологии сборного железобетона приводит к появлению большого количества однотипных зданий, что, в свою очередь, приводит к уменьшению затрат на строительство. Такое явление наблюдалось в СССР в период массового строительства.',

        'Сущность сборных железобетонной конструкций, против монолитных, состоит в том, что конструкции изготавливаются на заводах ЖБИ (железобетонных изделий), а затем доставляются на стройплощадку и монтируются в проектное положение. Основное преимущество технологии сборного железобетона в том, что ключевые технологические процессы происходят на заводе. Это позволяет достичь высоких показателей по срокам изготовления и качеству конструкций. Кроме того, изготовление предварительно напряжённых ЖБК возможно, как правило, только в заводских условиях.'
    ];

    detailed.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('click');
            const element = document.createElement('div');
            element.classList.add('modal');

            element.innerHTML = `
                <div class="modal__dialog">
                    <div class="modal__content">
                        <h4 class="modal__title">${newsSectionTitle[index].textContent}</h4>
                        <img class="modal__img" src="${newsSectionImg[index].src}" alt="">
                        <p class="modal__text">${modalText[index]}</p>
                        <button class="btn-reset modal__closebtn">
                            <svg class="modal__close">
                                <use xlink:href="#modal__close">
                            </svg>
                        </button>
                    </div
                </div>
            `;

            newsSection.append(element);
            document.body.style.overflow = 'hidden';

            const closeBtn = document.querySelector('.modal__closebtn');

            closeBtn.addEventListener('click', () => {
                element.remove();
                document.body.style.overflow = '';

            });
        });
    });

    //Modal about production page
    const aboutProd = document.querySelector('.about-production');
    const detailed1 = document.querySelectorAll('.detailed1');
    const aboutProdTitle = document.querySelectorAll('.about-production__title');
    const aboutProdImg = document.querySelectorAll('.about-production__img');

    detailed1.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('click');
            const element = document.createElement('div');
            element.classList.add('modal');

            element.innerHTML = `
                <div class="modal__dialog">
                    <div class="modal__content">
                        <h4 class="modal__title">${aboutProdTitle[index].textContent}</h4>
                        <img class="modal__img" src="${aboutProdImg[index].src}" alt="">
                        <p class="modal__text">${modalText[index]}</p>
                        <button class="btn-reset modal__closebtn">
                            <svg class="modal__close">
                                <use xlink:href="#modal__close">
                            </svg>
                        </button>
                    </div
                </div>
            `;

            aboutProd.append(element);
            document.body.style.overflow = 'hidden';

            const closeBtn = document.querySelector('.modal__closebtn');

            closeBtn.addEventListener('click', () => {
                element.remove();
                document.body.style.overflow = '';

            });
        });
    });

    //Stock slider
    const swiper = new Swiper(".swiper-stock-preview", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".swiper-stock-main", {
        loop: true,
        spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        thumbs: {
        swiper: swiper,
        },
    });

    //Show more (news section)
    const showMoreBtns = document.querySelectorAll('.news-section__btn--show-more');
    const showMoreNews = document.querySelectorAll('.news-section__item--more');
    const newsSectionList = document.querySelector('.news-section__list--page');

    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.add('hidden');
            showMoreNews.forEach(item => {
                item.classList.toggle('hidden');
            });
            const showLessBtn = document.createElement('button');
        
            showLessBtn.classList.add('btn', 'btn__accent', 'btn-reset', 'btn__wide', 'news-section__btn');
            showLessBtn.textContent = 'Показать меньше';
            newsSectionList.append(showLessBtn);
        
            showLessBtn.addEventListener('click', () => {
                showLessBtn.remove();
                showMoreNews.forEach(item => {
                    item.classList.toggle('hidden');
                });
                btn.classList.remove('hidden');
            });
        });
    });

    // Vacancies

    const vacancies = [
        {title: 'Интернет-маркетолог, Директолог', 
        requirmants: 'Среднее образование и стаж работы 1-3 года Полный рабочий деньПолная занятость',
        salary: 'от 40.000 Р'},
        {title: 'СЕО специалист', 
        requirmants: 'Неполное среднее образование и без опыта Полный рабочий день Полная занятость',
        salary: '60.000 — 120.000 Р'},
        {title: 'PHP-программист Yii2', 
        requirmants: 'Компания ЗДСК ищет в команду yii2 разработчика для работы в команде разработки сайтов, CRM, API, личных кабинетов',
        salary: 'от 40 000 Р'},
        {title: 'Копирайтер', 
        requirmants: 'Пишешь красивые статьи? Хочешь, чтобы их публиковали в СМИ и в других интернет порталах?  Тогда присылай свое резюме нам на почту',
        salary: '60.000 — 120.000 Р'}
    ];

    // vacancies.forEach((item) => {
    //     const elem = document.createElement('div');
    //     elem.classList.add('vacancies__item');

    //     elem.innerHTML = `
    //     <h3 class="vacancies__title">${item.title}</h3>
    //     <p class="vacancies__text">${item.requirmants}</p>
    //     <span class="vacancies__salary">${item.salary}</span>
    //     <button class="btn-reset btn btn__accent btn__short">Подробнее</button>
    //     `;
    //     document.querySelector('.vacancies__list').append(elem);
    //     document.querySelector('.vacancies').classList.add('background');
    // });
});

