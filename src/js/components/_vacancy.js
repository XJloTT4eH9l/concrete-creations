let location = String(window.location.href).split('/');

if(location[location.length - 1] === 'vacancies.html') {
    window.addEventListener('click', (e) => {
        if(e.target.dataset.action === 'offer') {
            const vacanciesParant = document.querySelector('.vacancies');
            const vacanciesItem = e.target.closest('.vacancies__item');
            const vacanciesTitle = vacanciesItem.querySelector('.vacancies__title').textContent;
            const vacanciesDescr = vacanciesItem.querySelector('.vacancies__descr').textContent;
            const vacanciesSalary = vacanciesItem.querySelector('.vacancies__salary').textContent;
            const vacanciesRequirements = vacanciesItem.querySelector('.vacancies__requir').textContent.split('/');
            const element = document.createElement('div');

            element.classList.add('modal');
            element.innerHTML = `
                <div class="modal__dialog">
                <div class="modal__content modal__content--vacancies">
                    <h3 class="vacancies__title vacancies__title--modal">${vacanciesTitle}</h3>
                    <p class="vacancies__descr vacancies__descr--modal">${vacanciesDescr}</p>
                    <h4 class="vacancies__requirements">Требования:</h4>
                    <ul class="purchases__list vacancies__reqs"></ul>
                    <p class="vacancies__salary">${vacanciesSalary}</p>
                    <button class="btn-reset modal__closebtn">
                        <svg class="modal__close">
                            <use xlink:href="#modal__close">
                        </svg>
                    </button>
                </div
            </div>
            `;

            vacanciesParant.append(element);
            const modalContent = document.querySelector('.modal__content--vacancies');
            const modalList = modalContent.querySelector('.vacancies__reqs');
            
            vacanciesRequirements.forEach(item => {
               const el =  document.createElement('li');
               el.classList.add('purchases__item', 'vacancies__requirment');
               el.textContent = item;
               modalList.append(el);
            });
            
            document.body.style.overflow = 'hidden';

            const closeBtn = document.querySelector('.modal__closebtn');

            closeBtn.addEventListener('click', () => {
                element.remove();
                document.body.style.overflow = '';
            });
        }
    })
}