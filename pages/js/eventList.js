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