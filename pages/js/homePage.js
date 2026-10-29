
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

            'log in / register': 'contact.html'
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
    // 2. Go to top tugmasi
    const footerLinks = document.querySelectorAll('footer a');

    footerLinks.forEach(function (link) {
        if (link.textContent.trim().toLowerCase() === 'go to top') {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
});

// login qlish uchun yozgilgan js



// login qlish uchun yozgilgan js