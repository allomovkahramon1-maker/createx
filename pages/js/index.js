
const benefits = [
    {
        title: "Only practicing tutors",
        text: "Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue.",
        image: "/pages/pages/image/illustration (1).png"
    },
    {
        title: "Feedback and support",
        text: "Students receive regular feedback from teachers. We help them understand mistakes and improve their knowledge.",
        image: "pages/pages/image/illustration (4).png"
    },
    {
        title: "Practical learning",
        text: "We focus on practical lessons. Students work on real projects and gain useful experience.",
        image: "pages/pages/image/illustration (3).png"
    },
    {
        title: "Community",
        text: "Students can communicate, share ideas and learn together in a friendly community.",
        image: "pages/pages/image/illustration (2).png"
    }
];

function changeBenefit(index) {


    const benefit = benefits[index];


    const title = document.getElementById("benefitTitle");
    const text = document.getElementById("benefitText");
    const image = document.getElementById("benefitImage");

    

    title.textContent = benefit.title;
    text.textContent = benefit.text;
    image.src = benefit.image;

    

    const buttons = document.querySelectorAll(".benefit-btn");



    buttons.forEach(button => {
        button.classList.remove("bg-[#ff3f22]", "text-white");
        button.classList.add("text-gray-400");
    });



    buttons[index].classList.add("bg-[#ff3f22]", "text-white");
    buttons[index].classList.remove("text-gray-400");
}
