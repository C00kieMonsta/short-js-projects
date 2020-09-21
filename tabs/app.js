const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    // am I clicking on a btn?
    if (id) {
        
        // remove active from other btns
        btns.forEach(btn => {
            btn.classList.remove('active');
        });

        // hide other article
        articles.forEach(article => {
            article.classList.remove('active');
        });
        
        // make target active + its content
        e.target.classList.add('active');
        const element = document.getElementById(id);
        element.classList.add('active');
        
        

    }
});