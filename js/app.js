document.addEventListener('DOMContentLoaded', function(){
    let topNav = document.querySelector('#topNav');         
    let burgerBtn = document.querySelector('#burgBtn');
    burgerBtn.addEventListener('click', function(){
        
        topNav.classList.toggle('nav--show');
    },false);
    topNav.onclick = function(evt) {
        if(evt.target.className == 'nav__link'){
            topNav.classList.remove('nav--show');
        }
        
    };
    let $wrap = document.querySelector('.wrap')
    $wrap.onclick = function(evt) {
        if(evt.target.className == 'intro__content'){
            topNav.classList.remove('nav--show');
        }
    };
    topNav.addEventListener('hover', function(){
        if(evt.target.className == 'nav__link'){
           
        }
    },false);
});