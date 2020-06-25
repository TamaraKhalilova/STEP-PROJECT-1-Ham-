// 'use strict'

// Our Services section

const liList = document.querySelector('.services-menu').querySelectorAll('li');
const imgList = document.querySelector('.services-description').querySelectorAll('img');
const pList = document.querySelector('.services-description').querySelectorAll('p');
const tabs = document.querySelector('.services-menu');

for (let i=0; i < liList.length; i++) {
    
  liList[i].classList.add(liList[i].textContent.replace(' ', '-').toLowerCase());

  pList[i].classList.add(liList[i].textContent.replace(' ', '-').toLowerCase());
  imgList[i].classList.add(liList[i].textContent.replace(' ', '-').toLowerCase());
  pList[i].style.minHeight = `144px`;
 if (!liList[i].classList.contains('active')) {
    pList[i].style.display = 'none'; 
    imgList[i].style.display = 'none'; 
 } 
}

tabs.addEventListener('click', onClick)

function onClick(event) {
    if (event.target.tagName !== 'LI') return;
    
    Array.from(tabs.children).forEach( li => li.classList.remove('active'));
    event.target.classList.add('active');

    pList.forEach( p => {
        if (p.classList.contains(event.target.textContent.replace(' ', '-').toLowerCase())) {
           return p.style.display = '';
        } else {
            return p.style.display = 'none';
        }
    });

    imgList.forEach( img => {
        if (img.classList.contains(event.target.textContent.replace(' ', '-').toLowerCase())) {
           return img.style.display = '';
        } else {
            return img.style.display = 'none';
        }
    });
}

// Our Amazing Work section

const worksListUl = document.querySelector('.works-menu');
const worksGalleryUl = document.querySelector('.works-gallery');
const galleryItems = worksGalleryUl.querySelectorAll('li');
const loader = document.querySelectorAll('.dash');
let counter = 0;


worksListUl.addEventListener('click', (event) => {
    worksListUl.querySelectorAll('li').forEach( i => i.classList.remove('filtered'));
    event.target.classList.add('filtered');
    galleryItems.forEach( i => {
            i.style.display = 'none';   
            (i.classList.contains(event.target.id)) ? i.style.display = 'inline' : false;
    });
});


document.querySelector('.works').addEventListener('click', (event) => {
    if(!event.target.classList.contains('btn')) return;
    loader.forEach(i=>{
        if (i.closest('.btn') === event.target) {
           i.style.backgroundColor = '#18CFAB'  
        }
    });

    counter++;
    
    setTimeout(() => {
        worksListUl.querySelectorAll('li').forEach( i => i.classList.remove('filtered'));
        worksListUl.querySelectorAll('li')[0].classList.add('filtered');

        galleryItems.forEach( (i, index) => {
            if(counter < 2) {
                if(index > 12 && index <= 24) {
                    (i.classList.contains('hidden')) ? i.classList.replace('hidden', 'all') : false;
                    i.style.display = 'inline'                      
                }
            } else {
                (i.classList.contains('hidden')) ? i.classList.replace('hidden', 'all') : false;
                i.style.display = 'inline'  ;
                event.target.style.display = 'none'
            }
        })
        loader.forEach(i=>{
            if (i.closest('.btn') === event.target) {
               i.style.backgroundColor = 'transparent'  
            }
        });
    }, 2000);
})

// Breaking news

const news = document.querySelector('.news');

news.addEventListener('mouseover', (event) => {
    if(!news.contains(event.target)) return;

    const newsGalleryBox = event.target.closest('a');

    if (newsGalleryBox) {
        const newsHeading = newsGalleryBox.querySelector('.accented');        
        newsGalleryBox.querySelector('.news-gallery-date').style.backgroundColor = '#18CFAB';
        newsHeading.textContent = 'Amazing Image Post';
        newsHeading.style.color = '#18CFAB';
    } else {
        document.querySelectorAll('.news-gallery-date').forEach(i=>i.style.backgroundColor = '#203E38');
        document.querySelectorAll('.news .accented').forEach(i=>i.style.color = '#717171');
        document.querySelectorAll('.news .accented').forEach(i=>i.textContent = 'Amazing Blog Post');
    } 
});



// Testiomanials

const $ = window.$;
$(".slider").slick({
    dots: true,
    infinite: true,
    initialSlide: 2
  });

const slickDotes = document.querySelectorAll('.slick-dots li');
const dotsImagesSrc = ['./img/testimonials-section/student1.jpg', './img/testimonials-section/student2.jpg', './img/testimonials-section/student3.jpg', './img/testimonials-section/student4.jpg'];

for(let i=0; i < slickDotes.length; i++) {
    slickDotes[i].style.backgroundImage = `url(${dotsImagesSrc[i]})`;
    (!slickDotes[i].classList.contains('slick-active')) ? slickDotes[i].style.bottom='0' : slickDotes[i].style.bottom='10px'
}

document.querySelector('.testimonials').addEventListener('click', (event) => {
    slickDotes.forEach(i=>i.style.bottom = '');
    document.querySelector('li.slick-active').style.bottom = '10px';
})



// Best images

$(document).ready( function(){
    $('.item-masonry').hover(
        function(){
            $(this).find('.cover-item-gallery').fadeIn();
        },
        function(){
            $(this).find('.cover-item-gallery').fadeOut();
        },
    )

    const sizer = '.sizer';
    const container = $('.best-images-gallery'); 

    container.masonry({
        itemSelector: '.item-masonry',
        columnWidth: 10,
        percentPosition: true,
    })

})