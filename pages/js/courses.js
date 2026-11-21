const menuBtn = document.querySelector('#menuBtn')
const closeBtn = document.querySelector('#closeBtn')
const mobileMenu = document.querySelector('#mobileMenu')

// Menu ochish
menuBtn.addEventListener('click', function () {
	mobileMenu.classList.remove('hidden')

	menuBtn.classList.add('hidden')
	closeBtn.classList.remove('hidden')
})

// Menu yopish
closeBtn.addEventListener('click', function () {
	mobileMenu.classList.add('hidden')

	closeBtn.classList.add('hidden')
	menuBtn.classList.remove('hidden')
})

// filter js

const categories = [
	{ id: 1, title: 'All', categoryKey: 'all' },
	{ id: 2, title: 'Marketing', categoryKey: 'marketing' },
	{ id: 3, title: 'Management', categoryKey: 'management' },
	{ id: 4, title: 'HR & Recruiting', categoryKey: 'hr' },
	{ id: 5, title: 'Design', categoryKey: 'design' },
	{ id: 6, title: 'Development', categoryKey: 'development' },
]

const courses = [
	{
		id: 1,
		title: 'The Ultimate Google Ads Training Course',
		category: 'marketing',
		price: 100,
		author: 'Jerome Bell',
		image: 'pages/pages/image/image1.png',
	},
	{
		id: 2,
		title: 'Product Management Fundamentals',
		category: 'management',
		price: 480,
		author: 'Marvin McKinney',
		image: 'pages/pages/image/image2.png',
	},
	{
		id: 3,
		title: 'HR Management and Analytics',
		category: 'hr',
		price: 200,
		author: 'Leslie Alexander Li',
		image: 'pages/pages/image/image3.png',
	},
	{
		id: 4,
		title: 'Brand Management & PR Communications',
		category: 'marketing',
		price: 530,
		author: 'Kristin Watson',
		image: 'pages/pages/image/image4.png',
	},
	{
		id: 5,
		title: 'Graphic Design Basic',
		category: 'design',
		price: 500,
		author: 'Guy Hawkins',
		image: 'pages/pages/image/image5.png',
	},
	{
		id: 6,
		title: 'Business Development Management',
		category: 'management',
		price: 400,
		author: 'Dianne Russell',
		image: 'pages/pages/image/image6.png',
	},
	{
		id: 7,
		title: 'Highload Software Architecture',
		category: 'development',
		price: 600,
		author: 'Brooklyn Simmons',
		image: 'pages/pages/image/image4.png',
	},
	{
		id: 8,
		title: 'Human Resources - Selection and Recruitment',
		category: 'hr',
		price: 150,
		author: 'Kathryn Murphy',
		image: 'pages/pages/image/image5.png',
	},
	{
		id: 9,
		title: 'User Experience. Human-centered Design',
		category: 'design',
		price: 240,
		author: 'Cody Fisher',
		image: 'pages/pages/image/image6.png',
	},
]

let filterButtons = document.querySelector('#filterButtons')
let box = document.querySelector('#box')

let selectedCategory = 'all'

categories.forEach(category => {
	let categoryItem = document.createElement('button')

	categoryItem.dataset.key = `cat_${category.categoryKey}`
	categoryItem.textContent = category.title

	categoryItem.className = `
    px-3 py-2 text-xs text-white
    border-2 border-[#FF5753]
    bg-[#FF5753]
    transition duration-300
    hover:bg-transparent
    hover:text-[#FF5753]
`

	categoryItem.onclick = () => {
		handleChangeCategory(category.categoryKey)
	}

	filterButtons.append(categoryItem)
})

//

function renderWorkers() {
	box.innerHTML = ''

	const filteredCourses = courses.filter(course => {
		return selectedCategory === 'all' || course.category === selectedCategory
	})

	filteredCourses.forEach(course => {
		let courseItem = document.createElement('div')

		courseItem.className = `
            bg-white shadow-md overflow-hidden
            hover:shadow-xl transition
        `

		courseItem.innerHTML = `
            <div class="h-[180px] bg-[#ffcf32] flex items-center justify-center">
                <img src="${course.image}" class="h-full object-contain">
            </div>

            <div class="p-4">
                <span data-key="cat_${course.category}" class="text-xs text-white bg-[#03cea4] px-2 py-1">
                    ${course.category}
                </span>

                <h3 data-key="course_${course.id}" class="font-bold text-sm mt-3 mb-2">
                    ${course.title}
                </h3>

                <p class="text-xs text-gray-500">
                    <span class="text-[#ff4242]">$${course.price}</span>
                    | <span data-key="byAuthor">by</span> ${course.author}
                </p>
            </div>
        `

		box.append(courseItem)
	})
}

function handleChangeCategory(category) {
	selectedCategory = category
	renderWorkers()
}

window.addEventListener('DOMContentLoaded', () => {
	renderWorkers()
})

// registr js

const modal = document.createElement('div')

modal.id = 'authModal'

modal.className = `
    fixed inset-0 z-[100] hidden
    items-center justify-center
    bg-[#1e212c]/80 px-4 py-6
`

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
`

document.body.appendChild(modal)

// ELEMENTLAR
const closeModal = document.getElementById('closeModal')
const formTitle = document.getElementById('formTitle')
const formDescription = document.getElementById('formDescription')
const authForm = document.getElementById('authForm')
const nameBox = document.getElementById('nameBox')
const confirmBox = document.getElementById('confirmBox')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const rememberBox = document.getElementById('rememberBox')
const submitBtn = document.getElementById('submitBtn')
const switchText = document.getElementById('switchText')
const switchBtn = document.getElementById('switchBtn')
const message = document.getElementById('message')

// TARJIMA FUNKSIYASI
function translateAuthModal() {
	document.querySelectorAll('#authModal [data-key]').forEach(element => {
		const key = element.dataset.key

		if (translations[language]?.[key]) {
			element.textContent = translations[language][key]
		}
	})

	document
		.querySelectorAll('#authModal [data-placeholder]')
		.forEach(element => {
			const key = element.dataset.placeholder

			if (translations[language]?.[key]) {
				element.placeholder = translations[language][key]
			}
		})
}

// MODAL OCHILISHI
const loginBtns = document.querySelectorAll('.loginBtn')

loginBtns.forEach(button => {
	button.addEventListener('click', function () {
		modal.classList.remove('hidden')
		modal.classList.add('flex')

		mobileMenu.classList.add('hidden')
		menuBtn.classList.remove('hidden')
		closeBtn.classList.add('hidden')

		translateAuthModal()
	})
})

// MODAL YOPILISHI
function closeAuthModal() {
	modal.classList.add('hidden')
	modal.classList.remove('flex')

	message.textContent = ''
}

closeModal.addEventListener('click', closeAuthModal)

// SIGN IN / SIGN UP
let isSignUp = false

function updateAuthMode() {
	message.textContent = ''

	if (isSignUp) {
		nameBox.classList.remove('hidden')
		confirmBox.classList.remove('hidden')

		fullName.required = true
		confirmPassword.required = true

		rememberBox.innerHTML = `
            <label class="flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[#ff3f22]">
                <span data-key="keepSignedIn"></span>
            </label>
        `

		formTitle.dataset.key = 'signUp'
		formDescription.dataset.key = 'signUpDescription'
		submitBtn.dataset.key = 'signUp'
		switchText.dataset.key = 'haveAccount'
		switchBtn.dataset.key = 'signIn'
	} else {
		nameBox.classList.add('hidden')
		confirmBox.classList.add('hidden')

		fullName.required = false
		confirmPassword.required = false

		rememberBox.innerHTML = `
            <label class="flex items-center gap-2 text-xs">
                <input type="checkbox" class="accent-[#ff3f22]">
                <span data-key="keepSignedIn"></span>
            </label>

            <button type="button" id="forgotPassword"
                class="text-[#ff3f22] hover:underline text-xs"
                data-key="forgotPassword">
            </button>
        `

		formTitle.dataset.key = 'signIn'
		formDescription.dataset.key = 'signInDescription'
		submitBtn.dataset.key = 'signIn'
		switchText.dataset.key = 'noAccount'
		switchBtn.dataset.key = 'signUp'
	}

	translateAuthModal()
}

switchBtn.addEventListener('click', function () {
	isSignUp = !isSignUp

	updateAuthMode()
})

// TIL O'ZGARGANDA MODALNI HAM TARJIMA QILISH
const languageSelect = document.getElementById('language')

if (languageSelect) {
	languageSelect.addEventListener('change', function () {
		translateAuthModal()
	})
}
