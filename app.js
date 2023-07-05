$(document).ready(function(){
    $('.fruit').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }

        }
    })
});
$(document).ready(function(){
    $('#department').click(function(){
        $('#fruit-name').toggle('fast');
    });
    $('#menu').click(function(){
        $('nav').toggle('fast')
    });
});

let search = document.querySelector('#search');
let searchInput = document.querySelector('.input-section .input input');

search.addEventListener('click',()=>{
    searchInput.classList.toggle('search-input')
})

$(document).ready(function(){
    $('.fruit-section').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1
    })
});