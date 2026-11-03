
document.addEventListener('DOMContentLoaded', function () {
    // 1. Tugmalarni kerakli sahifalarga o'tkazish
    const buttons = document.querySelectorAll('button');

    buttons.forEach(function (button) {
        const text = button.textContent.trim().toLowerCase();

        // Har bir tugma uchun kerakli sahifa
        const pages = {
            'about us': 'about.html',
            'more about us': 'about.html',

            'courses': 'courses.html',
            'explore courses': 'courses.html',
            'view all courses': 'courses.html',

            'events': 'event.html',
            'explore all events': 'event.html',
            'view more': 'event.html',

            'blog': 'blog.html',
            'go to blog': 'blog.html',
            'listen': 'singlePost.html',
            'watch': 'singlePost.html',
            'read': 'singlePost.html',

            'contacts': 'contact.html',
            'get consultation': 'contact.html',
        };

        // Tugma matni bo'yicha sahifani topish
        if (pages[text]) {
            button.addEventListener('click', function (event) {
                // Agar tugma form ichida bo'lsa,
                // formni tasodifan yubormaslik
                event.preventDefault();

                window.location.href = pages[text];
            });
        }
    });
});

// login qlish uchun yozgilgan js

const btns = document.querySelector('btn');
 

// login qlish uchun yozgilgan js

// menu js

const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const mobileMenu = document.querySelector('#mobileMenu');

// Menu ochish
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden');

    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

// Menu yopish
closeBtn.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');

    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
});