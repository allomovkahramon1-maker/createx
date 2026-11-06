
document.addEventListener('DOMContentLoaded', function () {
    // sahifaga otish
    const buttons = document.querySelectorAll('button');

    buttons.forEach(function (button) {
        const text = button.textContent.trim().toLowerCase();

        // sahifalar
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

        
        if (pages[text]) {
            button.addEventListener('click', function (event) {
                event.preventDefault();

                window.location.href = pages[text];
            });
        }
    });
});

// registratsiya js

const modal = document.createElement('div');

modal.id = 'authModal';

modal.className = `
    fixed inset-0 z-[100] hidden
    items-center justify-center
    bg-[#1e212c]/80 px-4 py-6
`;

modal.innerHTML = `
    <div id="modalBox"
        class="relative bg-white w-full max-w-[400px]
        rounded-sm shadow-xl overflow-hidden">

        <!-- x button -->
        <button id="closeModal"
            class="absolute top-4 right-5 text-2xl
            text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/></svg>
        </button>

        <!-- matn -->
        <div class="px-7 sm:px-8 pt-8 pb-5">

            <h2 id="formTitle"
                class="text-2xl font-bold text-center text-[#1e212c]">
                Sign in
            </h2>

            <p id="formDescription"
                class="text-xs text-gray-400 text-center
                mt-5 mb-6 leading-5">
                Sign in to your account using email and password provided
                during registration.
            </p>

            <form id="authForm" class="flex flex-col gap-4">

                <div id="nameBox" class="hidden">
                    <label class="text-xs text-gray-700">
                        Full Name
                    </label>

                    <input id="fullName"
                        type="text"
                        placeholder="Your full name"
                        class="w-full border border-gray-300
                        px-3 py-3 mt-2 text-xs outline-none
                        focus:border-orange-500">
                </div>

                <div>
                    <label class="text-xs text-gray-700">
                        Email
                    </label>

                    <input id="email"
                        type="email"
                        placeholder="Your working email"
                        required
                        class="w-full border border-gray-300
                        px-3 py-3 mt-2 text-xs outline-none
                        focus:border-orange-500">
                </div>

                <div>
                    <label class="text-xs text-gray-700">
                        Password
                    </label>

                    <div class="relative mt-2">
                        <input id="password"
                            type="password"
                            placeholder="Password"
                            required
                            minlength="6"
                            class="w-full border border-gray-300
                            px-3 py-3 text-xs outline-none
                            focus:border-orange-500 pr-10">
                    </div>
                </div>

                <div id="confirmBox" class="hidden">
                    <label class="text-xs text-gray-700">
                        Confirm Password
                    </label>

                    <div class="relative mt-2">
                        <input id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            class="w-full border border-gray-300
                            px-3 py-3 text-xs outline-none
                            focus:border-orange-500 pr-10">

                    </div>
                </div>

                <div id="rememberBox"
                    class="flex items-center justify-between text-[11px]">

                    <label class="flex items-center gap-2">
                        <input type="checkbox"
                            class="accent-[#ff3f22]">
                        Keep me signed in
                    </label>

                    <button type="button" id="forgotPassword"
                        class="text-[#ff3f22] hover:underline">
                        Forgot password?
                    </button>
                </div>

                <button id="submitBtn"
                    type="submit"
                    class="w-full py-3 mt-1 text-xs font-bold
                    text-white bg-gradient-to-r
                    from-[#ff3f22] to-[#ff5722]
                    hover:opacity-90 transition">
                    Sign in
                </button>

            </form>

            <p id="message"
                class="text-xs text-center mt-3"></p>

            <p class="text-xs text-gray-700 mt-5">
                <span id="switchText">
                    Don't have an account?
                </span>

                <button id="switchBtn"
                    class="text-[#ff3f22] hover:underline">
                    Sign up
                </button>
            </p>

        </div>



        <div class="border-t border-gray-100 py-5">

            <p class="text-center text-xs text-gray-400 mb-4">
                Or sign in with
            </p>

            <div class="flex items-center justify-center gap-4
                text-gray-500 font-bold text-sm">

                <a href="#" aria-label="Facebook"
                    class="hover:text-blue-600">
                    <img src="pages/pages/image/Facebook.svg" alt="qeaf">
                    </a>

                <a href="#" aria-label="Google"
                    class="hover:text-red-500">
                    <img src="pages/pages/image/Instagram.svg" alt="wesjkfn">
                    </a>

                <a href="#" aria-label="Twitter"
                    class="hover:text-blue-400">
                    <img src="pages/pages/image/Twitter.svg" alt="wejv">
                    </a>

                <a href="#" aria-label="LinkedIn"
                    class="hover:text-blue-700">
                    <img src="pages/pages/image/Linked-In.svg" alt="ebfwefacmsdn">
                    </a>

            </div>

        </div>

    </div>
`;

document.body.appendChild(modal);




// Modal ochilishi
const loginBtns = document.querySelectorAll('.loginBtn');

loginBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modal.classList.add('flex');

    //  yopish
        mobileMenu.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
    });
});


// Modal ni baklash
function closeAuthModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    message.textContent = '';
}

closeModal.addEventListener('click', closeAuthModal);

// sign in 
//  sign up
let isSignUp = false;

switchBtn.addEventListener('click', function () {

    isSignUp = !isSignUp;

    message.textContent = '';

    if (isSignUp) {

        formTitle.textContent = 'Sign up';

        formDescription.textContent =
            'Registration takes less than a minute but gives you full control over your studying.';

        nameBox.classList.remove('hidden');
        confirmBox.classList.remove('hidden');

        fullName.required = true;
        confirmPassword.required = true;

        rememberBox.innerHTML = `
            <label class="flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[#ff3f22]">
                Remember me
            </label>
        `;

        submitBtn.textContent = 'Sign up';

        switchText.textContent = 'Already have an account?';
        switchBtn.textContent = 'Sign in';

    } else {

        formTitle.textContent = 'Sign in';

        formDescription.textContent =
            'Sign in to your account using email and password provided during registration.';

        nameBox.classList.add('hidden');
        confirmBox.classList.add('hidden');

        fullName.required = false;
        confirmPassword.required = false;

        rememberBox.innerHTML = `
            <label class="flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[#ff3f22]">
                Keep me signed in
            </label>

            <button type="button" id="forgotPassword"
                class="text-[#ff3f22] hover:underline text-xs">
                Forgot password?
            </button>
        `;

        submitBtn.textContent = 'Sign in';

        switchText.textContent = "Don't have an account?";
    }
});


// registratsiya js

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

