// side bar start

function openNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    } else{
        console.error('error: sidepanel not found')
    }
}

function closeNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    } else{
        console.error('error: sidepanel not found')
    }
}

// searchbar

function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    } else{
        console.error('error: searchpanel not found')
    }
}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    } else{
        console.error('error: searchpanel not found')
    }
}
// responsive logoipsum slider
$('.sliderlogo').slick{{
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    sliderToScroll: 1,
    responsive:{{
        breakpoint: 1024,
        settings:{
            : 4,
            sliderToScroll: 1
            infinite: true,
            dots: false,
        }
    },
{
    breakpoint: 600,
    settings:{
        : 2,
        sliderToScroll: 1
    }
},
{
    breakpoint: 480,
    settings:{
        : 2,
        sliderToScroll: 1
}
}
}
