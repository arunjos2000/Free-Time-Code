const portfolioItems= document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[3].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[3].classList.remove('img-darken');
    })
})
