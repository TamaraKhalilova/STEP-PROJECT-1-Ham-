// 'use strict'

// Our Services section

const liList = document.querySelector('.services-menu').querySelectorAll('li');
const imgList = document.querySelector('.services').querySelectorAll('img');
const pList = document.querySelector('.services-description').querySelectorAll('li');
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

const worksButton = document.querySelector('.works').querySelector('.btn');
const worksListUl = document.querySelector('.works-menu');
const worksGalleryUl = document.querySelector('.works-gallery');
const galleryItems = worksGalleryUl.querySelectorAll('li');

document.addEventListener('click', (event) => {
    if (event.target !== worksButton) return;
    galleryItems.forEach( i => {
        (i.classList.contains('hidden')) ? i.classList.replace('hidden', 'all') : false;
        i.style.display = 'inline'
    })
    worksButton.style.display = 'none';
})

worksListUl.addEventListener('click', (event) => {
    galleryItems.forEach( (i) => {
            i.style.display = 'none';   
            (i.classList.contains(event.target.id)) ? i.style.display = 'inline' : false;
    });
});


// Breaking news

const news = document.querySelector('.news');

document.addEventListener('mouseover', (event) => {
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

document.addEventListener('click', (event) => {
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
        // gutter: 1,
    })

})