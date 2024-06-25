const cl = console.log;

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    navText: ['<i class="fa-solid fa-angles-left fa-2x"></i>', '<i class="fa-solid fa-angles-right fa-2x"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false,
        },
        600:{
            items:2,
            dots:false,
            nav:false,
        },
        1000:{
            items:4,
            nav:true,
            dots:true,
        }
    }
})