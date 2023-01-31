'use strict';

let slides = [
    {
        url: './images/1_rostov_admiral.jpg',
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        url: './images/2_sochi.jpg',
        city: 'Sochi<br>Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        url: './images/3_rostov_patriotic.jpg',
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
];

function slider() {

    let sliderImg = document.querySelector('.projects_img');

    let sliderCity = document.querySelector('.city');
    let sliderArea = document.querySelector('.area');
    let sliderTime = document.querySelector('.time');
    let sliderCost = document.querySelector('.cost');

    let sliderDots = document.querySelectorAll('.dot');
    let sliderArrows = document.querySelectorAll('.arrow');
    let sliderLinks = document.querySelectorAll('.link_item');

    sliderLinks[0].classList.add('on');
    sliderDots[0].classList.add('on');

    addContent();

        function addContent() {
            slides.forEach((item, index) => {
                let image = `
                    <div class='image num${index} ${index === 0? 'active':''}' style='background-image: url(${slides[index].url});' data-index='${index}'></div>
                `;
                let city = `
                    <div class='city_item num${index} ${index === 0? 'active':''}' data-index='${index}'>${slides[index].city}</div>
                `;
                let area = `
                    <div class='area_item num${index} ${index === 0? 'active':''}' data-index='${index}'>${slides[index].area}</div>
                `;
                let time = `
                    <div class='time_item num${index} ${index === 0? 'active':''}' data-index='${index}'>${slides[index].time}</div>
                `;
                let cost = `
                    <div class='cost_item num${index} ${index === 0? 'active':''}' data-index='${index}'>${slides[index].cost}</div>
                `;

                sliderImg.innerHTML += image;
                sliderCity.innerHTML += city;
                sliderArea.innerHTML += area;
                sliderTime.innerHTML += time;
                sliderCost.innerHTML += cost;
            });
        }

    runArrows();

        function runArrows() {
            sliderArrows.forEach(arrow => {
                arrow.addEventListener('click', () => {
                    let curSlide = +sliderImg.querySelector('.active').dataset.index;
                    let nextSlide;
                    if(arrow.classList.contains('left')) {
                        nextSlide = curSlide == 0? slides.length-1 : --curSlide;
                    } else {
                        nextSlide = curSlide == slides.length-1? 0 : ++curSlide;
                    }
                    switching(nextSlide);
                });
            });
        }

    runDots();

        function runDots() {
            sliderDots.forEach((dot, index) => {
                dot.setAttribute('data-index', `${index}`);
                dot.addEventListener('click', () => {
                    switching(dot.dataset.index);
                });
            });
        }
    
    runLinks();

        function runLinks() {
            sliderLinks.forEach((link, index) => {
                link.setAttribute('data-index', `${index}`);
                link.addEventListener('click', () => {
                    switching(link.dataset.index);
                });
            });
        }

    function switching(n) {
        sliderImg.querySelector('.active').classList.remove('active');
        sliderImg.querySelector('.num' + n).classList.add('active');

        sliderCity.querySelector('.active').classList.remove('active');
        sliderCity.querySelector('.num' + n).classList.add('active');

        sliderArea.querySelector('.active').classList.remove('active');
        sliderArea.querySelector('.num' + n).classList.add('active');

        sliderTime.querySelector('.active').classList.remove('active');
        sliderTime.querySelector('.num' + n).classList.add('active');

        sliderCost.querySelector('.active').classList.remove('active');
        sliderCost.querySelector('.num' + n).classList.add('active');
        
        for(let link of sliderLinks) {
            if(link.dataset.index == n) {
                link.classList.add('on');
            } else {
                link.classList.remove('on');
            }
        };

        for(let dot of sliderDots) {
            if(dot.dataset.index == n) {
                dot.classList.add('on');
            } else {
                dot.classList.remove('on');
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', slider);