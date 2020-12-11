/*RESPON NAVBAR-SCROLL*/
const navbar = document.querySelector('.nav-links');
const navbarHeight = navbar.clientHeight;
const navbarMobile = document.querySelector('.menu-toggler');
window.addEventListener('scroll', function(){
    if(window.scrollY >= navbarHeight){
        navbar.classList.remove('navbarFadeIn');
        navbarMobile.style.cssText = 'display: flex; right: 5rem; position: fixed;';
    }
    else{
        navbar.classList.add('navbarFadeIn');
        navbarMobile.style.cssText = 'display: none';
    }
})
/*CURSOR*/
const eachSkill = document.querySelectorAll('.skill p');
eachSkill.forEach(allSkills => {
    allSkills.addEventListener('mouseover', function(){
        cursor.classList.add('link-grow_cursor')
        cursor2.classList.add('link-grow_cursor2')
    })
    allSkills.addEventListener('mouseleave', function(){
        cursor.classList.remove('link-grow_cursor')
        cursor2.classList.remove('link-grow_cursor2')
    })
})
const me_img = document.querySelector('.me-img');
me_img.addEventListener('mouseover', function(){
    cursor.classList.add('link-grow_cursor')
    cursor2.classList.add('link-grow_cursor2')
})
me_img.addEventListener('mouseleave', function(){
    cursor.classList.remove('link-grow_cursor')
    cursor2.classList.remove('link-grow_cursor2')
})