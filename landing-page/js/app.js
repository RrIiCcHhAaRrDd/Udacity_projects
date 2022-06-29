/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.getElementById('navbar__list');
const h2_title = document.querySelectorAll('.landing__container h2')
const sections = document.getElementsByTagName('section')



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


for (let i = 0; i < h2_title.length; i++) {
    const navlistitem = document.createElement('li');
    navbar.appendChild(navlistitem);
}

// Add class 'active' to section when near top of viewport


const list_items = document.querySelectorAll('#navbar__list li')  // this stays here because li item is created by navlistitem

for (let i = 0; i < list_items.length; i++) {
    const anchor_navlist = document.createElement('a');
    anchor_navlist.innerHTML = h2_title[i].innerHTML;
    list_items[i].appendChild(anchor_navlist);
    let p = i + 1;
    anchor_navlist.setAttribute('href', `#section${p}`)//this for loop creates anchor for li items, assigns li text  

}

const list_items_anchors = document.querySelectorAll('li a[href*="section"]');

//creates anchors, prevents default and also brings sections into view with smooth behavior

for (let i = 0; i < list_items_anchors.length; i++) {
    list_items_anchors[i].classList.add('menu__link');

    list_items_anchors[i].addEventListener('click', (e) => {
        e.preventDefault();
        let p = i + 1;
        document.querySelector(`#section${p}`).scrollIntoView({
            behavior: 'smooth'
        });
    })
}

const menu__link = document.querySelectorAll('a.menu__link')




//throttle fn - needed bcos loop fn attached to eventscroll is cumbersome

function throttle(func, delay) {
    let time = Date.now();//takes stamp of time
    return function () {
        if ((time + delay - Date.now()) < 0) {// takes initial time stamp, plus the designated delay, minus the current time. if this is less than 0 it means timer has elapsed and should initiate next callback
            func(); 
            time = Date.now();
        }
    }
}



// this fn changes active states depending on the different sections distance from top of viewport
function callback() {

    let elements =[...document.getElementsByTagName('section')]// turns HTML collection into array necessary for forEach

    elements.forEach((element, index) => {// using forEach because forloop kept throwing type error

        if (element.classList.contains('your-active-class') && element.getBoundingClientRect().top <= 60 && element.getBoundingClientRect().bottom >= 60) { // if already in view, this code doesnt toggle
        }
        else if (element.getBoundingClientRect().top <= 60 && element.getBoundingClientRect().bottom >= 60) { // 50 is designated as point near top of screen
            element.classList.toggle('your-active-class');
            menu__link[index].classList.toggle('active');// this else if says if section comes into view, then it toggles 
        }
        else {
            element.classList.remove('your-active-class');
            menu__link[index].classList.remove('active');//this ensures only one element has active class at a time
        }
    })
}

// this scoll listener inititates the throttle fn which takes the callback. the delay is set at 400
document.addEventListener('scroll', throttle(callback, 400));

// hiding the page_header using a timer
let StillScrolling;

window.addEventListener('scroll', function () {
    document.querySelector('.page__header').style.display = "";
    window.clearTimeout(StillScrolling); //stops timer upon scroll

    StillScrolling = setTimeout(() => {// hides header after timer runs out
        document.querySelector('.page__header').style.display = "none";

    }, 1000);

}, false);