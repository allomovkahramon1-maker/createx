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

// filter js


const categories = [
    { id: 1, title: "All", categoryKey: "all" },
    { id: 2, title: "Marketing", categoryKey: "marketing" },
    { id: 3, title: "Management", categoryKey: "management" },
    { id: 4, title: "HR & Recruiting", categoryKey: "hr" },
    { id: 5, title: "Design", categoryKey: "design" },
    { id: 6, title: "Development", categoryKey: "development" },
];

const courses = [
    {
        id: 1,
        title: "The Ultimate Google Ads Training Course",
        category: "marketing",
        price: 100,
        author: "Jerome Bell",
        image: "pages/pages/image/image1.png",
    },
    {
        id: 2,
        title: "Product Management Fundamentals",
        category: "management",
        price: 480,
        author: "Marvin McKinney",
        image: "pages/pages/image/image2.png",
    },
    {
        id: 3,
        title: "HR Management and Analytics",
        category: "hr",
        price: 200,
        author: "Leslie Alexander Li",
        image: "pages/pages/image/image3.png",
    },
    {
        id: 4,
        title: "Brand Management & PR Communications",
        category: "marketing",
        price: 530,
        author: "Kristin Watson",
        image: "pages/pages/image/image4.png",
    },
    {
        id: 5,
        title: "Graphic Design Basic",
        category: "design",
        price: 500,
        author: "Guy Hawkins",
        image: "pages/pages/image/image5.png",
    },
    {
        id: 6,
        title: "Business Development Management",
        category: "management",
        price: 400,
        author: "Dianne Russell",
        image: "pages/pages/image/image6.png",
    },
    {
        id: 7,
        title: "Highload Software Architecture",
        category: "development",
        price: 600,
        author: "Brooklyn Simmons",
        image: "pages/pages/image/image4.png",
    },
    {
        id: 8,
        title: "Human Resources - Selection and Recruitment",
        category: "hr",
        price: 150,
        author: "Kathryn Murphy",
        image: "pages/pages/image/image5.png",
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        category: "design",
        price: 240,
        author: "Cody Fisher",
        image: "pages/pages/image/image6.png",
    },
];

let filterButtons = document.querySelector("#filterButtons");
let box = document.querySelector("#box");

let selectedCategory = "all";


categories.forEach((category) => {
    let categoryItem = document.createElement("button");

    categoryItem.textContent = category.title;

    categoryItem.className = `
    px-3 py-2 text-xs text-white
    border-2 border-[#FF5753]
    bg-[#FF5753]
    transition duration-300
    hover:bg-transparent
    hover:text-[#FF5753]
`;

    categoryItem.onclick = () => {
        handleChangeCategory(category.categoryKey);
    };

    filterButtons.append(categoryItem);
});

// 

function renderWorkers() {
    box.innerHTML = "";

    const filteredCourses = courses.filter((course) => {
        return selectedCategory === "all" ||
            course.category === selectedCategory;
    });

    filteredCourses.forEach((course) => {
        let courseItem = document.createElement("div");

        courseItem.className = `
            bg-white shadow-md overflow-hidden
            hover:shadow-xl transition
        `;

        courseItem.innerHTML = `
            <div class="h-[180px] bg-[#ffcf32] flex items-center justify-center">
                <img src="${course.image}" class="h-full object-contain">
            </div>

            <div class="p-4">
                <span class="text-xs text-white bg-[#03cea4] px-2 py-1">
                    ${course.category}
                </span>

                <h3 class="font-bold text-sm mt-3 mb-2">
                    ${course.title}
                </h3>

                <p class="text-xs text-gray-500">
                    <span class="text-[#ff4242]">$${course.price}</span>
                    | by ${course.author}
                </p>
            </div>
        `;

        box.append(courseItem);
    });
}

function handleChangeCategory(category) {
    selectedCategory = category;
    renderWorkers();
}

window.addEventListener("DOMContentLoaded", () => {
    renderWorkers();
});
