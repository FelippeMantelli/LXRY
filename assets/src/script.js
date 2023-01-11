var nav=document.querySelector('nav')

window.addEventListener('scroll',function () {
    if (window.pageYOffset>460){
        nav.classList.add('bg-light','shadow');
        nav.classList.remove('bg-transparent');
        
    }else{
        nav.classList.remove('bg-light', 'shadow');
        nav.classList.add('bg-transparent');
    }
})
