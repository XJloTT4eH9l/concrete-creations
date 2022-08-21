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
