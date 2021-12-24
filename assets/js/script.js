const filterBtns = document.querySelectorAll('.filter-btn');
const skillsWrap = document.querySelector('.skills');
const skillsBars = document.querySelectorAll('.skill-progress');
const recordsWrap = document.querySelector('.records');
const recordsNums = document.querySelectorAll('.number');

filterBtns.forEach( btn => btn.addEventListener('click', () => {
    filterBtns.forEach( button => button.classList.remove('active'));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter
    console.log(filterValue);
    $('.grid').isotope({filter: filterValue});
}))

$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s'
});

// checkScroll(skillsWrap)

window.addEventListener('scroll', () => {
    skillsEffect();
    countUp();
})

function checkScroll(el) {
    // get pixels from top of viewport to progress bar
    let rect = el.getBoundingClientRect();
    // when bottom of skills div comes into view
    if (window.innerHeight >= rect.top + el.offsetHeight) {
        // window.innerHeight (vh (eg. 1080px))
        return true;
    }
    return false;
}

function skillsEffect() {
    if (!checkScroll(skillsWrap)) return;
    skillsBars.forEach(skill => skill.style.width = skill.dataset.progress)
}

function countUp() {
    if (!checkScroll(recordsWrap)) return;
    console.log('hey records')
}