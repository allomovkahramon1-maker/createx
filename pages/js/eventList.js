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

// filter

const events = [
    {
        day: "05",
        month: "august",
        time: "11:00 – 14:00",
        title: "event1Title",
        titleText: "Formation of the organizational structure of the company in the face of uncertainty.",
        type: "masterclass",
        typeKey: "onlineMasterclass",
        typeText: "Online master-class"
    },
    {
        day: "24",
        month: "july",
        time: "11:00 – 12:30",
        title: "event2Title",
        titleText: "Building a customer service department. Best Practices.",
        type: "lecture",
        typeKey: "onlineLecture",
        typeText: "Online lecture"
    },
    {
        day: "16",
        month: "july",
        time: "10:00 – 13:00",
        title: "event3Title",
        titleText: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
        type: "workshop",
        typeKey: "onlineWorkshop",
        typeText: "Online workshop"
    },
    {
        day: "10",
        month: "july",
        time: "9:00 – 14:00",
        title: "event4Title",
        titleText: "Find and evaluate: search and assessment tools for candidates.",
        type: "workshop",
        typeKey: "onlineWorkshop",
        typeText: "Online workshop"
    },
    {
        day: "27",
        month: "june",
        time: "15:00 – 19:00",
        title: "event5Title",
        titleText: "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
        type: "masterclass",
        typeKey: "onlineMasterclass",
        typeText: "Online master-class"
    },
    {
        day: "15",
        month: "june",
        time: "10:00 – 12:00",
        title: "event6Title",
        titleText: "Marketing or growth hacking: main differences and what business needs.",
        type: "lecture",
        typeKey: "onlineLecture",
        typeText: "Online lecture"
    },
    {
        day: "02",
        month: "june",
        time: "11:00 – 13:00",
        title: "event7Title",
        titleText: "How to brief a client and present your design to approve it from the first show.",
        type: "lecture",
        typeKey: "onlineLecture",
        typeText: "Online lecture"
    },
    {
        day: "29",
        month: "may",
        time: "11:00 – 12:00",
        title: "event8Title",
        titleText: "Who is a project manager and do I want to be PM?",
        type: "lecture",
        typeKey: "onlineLecture",
        typeText: "Online lecture"
    },
    {
        day: "18",
        month: "may",
        time: "10:00 – 12:00",
        title: "event9Title",
        titleText: "The company's business page as an additional tool to support the announcement of vacancies.",
        type: "lecture",
        typeKey: "onlineLecture",
        typeText: "Online lecture"
    }
];
const listView = document.getElementById("listView");
const gridView = document.getElementById("gridView");

const listBtn = document.getElementById("listBtn");
const gridBtn = document.getElementById("gridBtn");

const noEvents = document.getElementById("noEvents");

function changeView(view) {

    if (view === "list") {
        listView.classList.remove("hidden");
        gridView.classList.add("hidden");

        listBtn.classList.add("text-[#ff3f22]");
        listBtn.classList.remove("text-gray-600");

        gridBtn.classList.add("text-gray-600");
        gridBtn.classList.remove("text-[#ff3f22]");

    } else {
        gridView.classList.remove("hidden");
        listView.classList.add("hidden");

        gridBtn.classList.add("text-[#ff3f22]");
        gridBtn.classList.remove("text-gray-600");

        listBtn.classList.add("text-gray-600");
        listBtn.classList.remove("text-[#ff3f22]");
    }
}

function getMonthName(month) {
    const months = {
        august: "August",
        july: "July",
        june: "June",
        may: "May"
    };

    return months[month];
}

// list bilan grid ni chiqarish
function showEvents() {

    listView.innerHTML = "";
    gridView.innerHTML = "";

    events.forEach(function (event) {

        // List card
        const listCard = document.createElement("div");

        listCard.className =
            "bg-white p-5 sm:px-6 flex flex-col lg:flex-row lg:items-center gap-5 border border-gray-100 hover:scale-[1.01] hover:shadow-xl transition-all duration-300";

        listCard.innerHTML = `
            <div class="flex items-center gap-3 lg:w-28 shrink-0">
                <strong class="text-2xl sm:text-3xl text-[#ff3f22]">
                    ${event.day}
                </strong>

                <div>
                    <p class="text-xs font-medium" data-key="${event.month}">
                        ${getMonthName(event.month)}
                    </p>

                    <p class="text-[10px] text-gray-500">
                        ${event.time}
                    </p>
                </div>
            </div>

            <div class="flex-1">
                <h3 class="text-sm font-semibold" data-key="${event.title}">
                    ${event.titleText}
                </h3>

                <p class="text-[10px] text-gray-500 mt-2" data-key="${event.typeKey}">
                    ${event.typeText}
                </p>
            </div>

            <a href="event.html"
                class="border border-[#ff3f22] text-[#ff3f22] px-6 py-2 text-center text-[10px] hover:bg-[#ff3f22] hover:text-white transition"
                data-key="viewMore">
                View more
            </a>
        `;

        // Grid card
        const gridCard = document.createElement("div");

        gridCard.className =
            "flex flex-col bg-white p-6 border border-gray-100 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300";

        gridCard.innerHTML = `
            <div class="flex items-center gap-3">
                <strong class="text-4xl text-[#ff3f22]">
                    ${event.day}
                </strong>

                <div>
                    <p class="text-sm font-medium" data-key="${event.month}">
                        ${getMonthName(event.month)}
                    </p>

                    <p class="text-xs text-gray-500">
                        ${event.time}
                    </p>
                </div>
            </div>

            <div class="flex-1 my-5">
                <h3 class="text-base font-semibold leading-6" data-key="${event.title}">
                    ${event.titleText}
                </h3>

                <p class="text-sm text-gray-500 mt-3" data-key="${event.typeKey}">
                    ${event.typeText}
                </p>
            </div>

            <a href="event.html"
                class="w-full border border-[#ff3f22] text-[#ff3f22] px-6 py-3 text-center text-sm rounded hover:bg-[#ff3f22] hover:text-white transition"
                data-key="viewMore">
                View more
            </a>
        `;

        listView.appendChild(listCard);
        gridView.appendChild(gridCard);
    });

    noEvents.classList.add("hidden");
}

// List btn
listBtn.addEventListener("click", function () {
    changeView("list");
});

// Grid btn
gridBtn.addEventListener("click", function () {
    changeView("grid");
});

showEvents();



// registr js


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

        <button id="closeModal"
            class="absolute top-4 right-5 text-2xl
            text-gray-500 hover:text-red-500">

            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" height="24px"
                width="24px" fill="#1f1f1f">
                <path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/>
            </svg>
        </button>

        <div class="px-7 sm:px-8 pt-8 pb-5">

            <h2 id="formTitle"
                data-key="signIn"
                class="text-2xl font-bold text-center text-[#1e212c]">
                Sign in
            </h2>

            <p id="formDescription"
                data-key="signInDescription"
                class="text-xs text-gray-400 text-center mt-5 mb-6 leading-5">
                Sign in to your account using email and password provided during registration.
            </p>

            <form id="authForm" class="flex flex-col gap-4">

                <div id="nameBox" class="hidden">
                    <label class="text-xs text-gray-700"
                        data-key="fullNameLabel">
                        Full Name
                    </label>

                    <input id="fullName"
                        type="text"
                        data-placeholder="yourFullName"
                        placeholder="Your full name"
                        class="w-full border border-gray-300 px-3 py-3 mt-2 text-xs outline-none focus:border-orange-500">
                </div>

                <div>
                    <label class="text-xs text-gray-700"
                        data-key="emailLabel">
                        Email
                    </label>

                    <input id="email"
                        type="email"
                        data-placeholder="yourWorkingEmail"
                        placeholder="Your working email"
                        class="w-full border border-gray-300 px-3 py-3 mt-2 text-xs outline-none focus:border-orange-500">
                </div>

                <div>
                    <label class="text-xs text-gray-700"
                        data-key="passwordLabel">
                        Password
                    </label>

                    <div class="relative mt-2">
                        <input id="password"
                            type="password"
                            data-placeholder="passwordPlaceholder"
                            placeholder="Password"
                            class="w-full border border-gray-300 px-3 py-3 text-xs outline-none focus:border-orange-500 pr-10">
                    </div>
                </div>

                <div id="confirmBox" class="hidden">
                    <label class="text-xs text-gray-700"
                        data-key="confirmPasswordLabel">
                        Confirm Password
                    </label>

                    <div class="relative mt-2">
                        <input id="confirmPassword"
                            type="password"
                            data-placeholder="confirmPasswordPlaceholder"
                            placeholder="Confirm password"
                            class="w-full border border-gray-300 px-3 py-3 text-xs outline-none focus:border-orange-500 pr-10">
                    </div>
                </div>

                <div id="rememberBox"
                    class="flex items-center justify-between text-[11px]">

                    <label class="flex items-center gap-2">
                        <input type="checkbox" class="accent-[#ff3f22]">
                        <span data-key="keepSignedIn">Keep me signed in</span>
                    </label>

                    <button type="button" id="forgotPassword"
                        class="text-[#ff3f22] hover:underline"
                        data-key="forgotPassword">
                        Forgot password?
                    </button>
                </div>

                <button id="submitBtn"
                    type="submit"
                    data-key="signIn"
                    class="w-full py-3 mt-1 text-xs font-bold text-white bg-gradient-to-r from-[#ff3f22] to-[#ff5722] hover:opacity-90 transition">
                    Sign in
                </button>

            </form>

            <p id="message"
                class="text-xs text-center mt-3"></p>

            <p class="text-xs text-gray-700 mt-5">

                <span id="switchText" data-key="noAccount">
                    Don't have an account?
                </span>

                <button id="switchBtn"
                    class="text-[#ff3f22] hover:underline"
                    data-key="signUp">
                    Sign up
                </button>

            </p>

        </div>

        <div class="border-t border-gray-100 py-5">

            <p class="text-center text-xs text-gray-400 mb-4"
                data-key="orSignInWith">
                Or sign in with
            </p>

            <div class="flex items-center justify-center gap-4 text-gray-500 font-bold text-sm">

                <a href="#" aria-label="Facebook"
                    class="hover:text-blue-600">
                    <img src="pages/pages/image/Facebook.svg" alt="Facebook">
                </a>

                <a href="#" aria-label="Google"
                    class="hover:text-red-500">
                    <img src="pages/pages/image/Instagram.svg" alt="Google">
                </a>

                <a href="#" aria-label="Twitter"
                    class="hover:text-blue-400">
                    <img src="pages/pages/image/Twitter.svg" alt="Twitter">
                </a>

                <a href="#" aria-label="LinkedIn"
                    class="hover:text-blue-700">
                    <img src="pages/pages/image/Linked-In.svg" alt="LinkedIn">
                </a>

            </div>

        </div>

    </div>
`;

document.body.appendChild(modal);


// ELEMENTLAR
const closeModal = document.getElementById('closeModal');
const formTitle = document.getElementById('formTitle');
const formDescription = document.getElementById('formDescription');
const authForm = document.getElementById('authForm');
const nameBox = document.getElementById('nameBox');
const confirmBox = document.getElementById('confirmBox');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const rememberBox = document.getElementById('rememberBox');
const submitBtn = document.getElementById('submitBtn');
const switchText = document.getElementById('switchText');
const switchBtn = document.getElementById('switchBtn');
const message = document.getElementById('message');


// TARJIMA FUNKSIYASI
function translateAuthModal() {

    document.querySelectorAll('#authModal [data-key]').forEach(element => {

        const key = element.dataset.key;

        if (translations[language]?.[key]) {
            element.textContent = translations[language][key];
        }

    });

    document.querySelectorAll('#authModal [data-placeholder]').forEach(element => {

        const key = element.dataset.placeholder;

        if (translations[language]?.[key]) {
            element.placeholder = translations[language][key];
        }

    });

}


// MODAL OCHILISHI
const loginBtns = document.querySelectorAll('.loginBtn');

loginBtns.forEach(button => {

    button.addEventListener('click', function () {

        modal.classList.remove('hidden');
        modal.classList.add('flex');

        mobileMenu.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');

        translateAuthModal();

    });

});


// MODAL YOPILISHI
function closeAuthModal() {

    modal.classList.add('hidden');
    modal.classList.remove('flex');

    message.textContent = '';

}

closeModal.addEventListener('click', closeAuthModal);


// MODAL TASHQARISIGA BOSILGANDA YOPISH
modal.addEventListener('click', function (e) {

    if (e.target === modal) {
        closeAuthModal();
    }

});


// SIGN IN / SIGN UP
let isSignUp = false;

function updateAuthMode() {

    message.textContent = '';

    if (isSignUp) {

        nameBox.classList.remove('hidden');
        confirmBox.classList.remove('hidden');

        fullName.required = true;
        confirmPassword.required = true;

        rememberBox.innerHTML = `
            <label class="flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[#ff3f22]">
                <span data-key="keepSignedIn"></span>
            </label>
        `;

        formTitle.dataset.key = 'signUp';
        formDescription.dataset.key = 'signUpDescription';
        submitBtn.dataset.key = 'signUp';
        switchText.dataset.key = 'haveAccount';
        switchBtn.dataset.key = 'signIn';

    } else {

        nameBox.classList.add('hidden');
        confirmBox.classList.add('hidden');

        fullName.required = false;
        confirmPassword.required = false;

        rememberBox.innerHTML = `
            <label class="flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[#ff3f22]">
                <span data-key="keepSignedIn"></span>
            </label>

            <button type="button" id="forgotPassword"
                class="text-[#ff3f22] hover:underline text-xs"
                data-key="forgotPassword">
            </button>
        `;

        formTitle.dataset.key = 'signIn';
        formDescription.dataset.key = 'signInDescription';
        submitBtn.dataset.key = 'signIn';
        switchText.dataset.key = 'noAccount';
        switchBtn.dataset.key = 'signUp';

    }

    translateAuthModal();

}

switchBtn.addEventListener('click', function () {

    isSignUp = !isSignUp;

    updateAuthMode();

});


// TIL O'ZGARGANDA MODALNI HAM TARJIMA QILISH
const languageSelect = document.getElementById('language');

if (languageSelect) {

    languageSelect.addEventListener('change', function () {
        translateAuthModal();
    });

}


// FORGOT PASSWORD
document.addEventListener('click', function (e) {

    if (e.target.id === 'forgotPassword') {

        message.textContent = translations[language]?.forgotPasswordMessage || '';

    }

});


// FORM SUBMIT
authForm.addEventListener('submit', function (e) {

    e.preventDefault();

    message.textContent = '';

    if (isSignUp && password.value !== confirmPassword.value) {

        message.textContent =
            translations[language]?.passwordMismatch || 'Passwords do not match';

        message.classList.add('text-red-500');

        return;

    }

});
