const benefits = [
    {
        title: "only",
        text: "benefitText",
        image: "/pages/pages/image/illustration (1).png"
    },
    {
        title: "feedbackTitle",
        text: "feedbackText",
        image: "/pages/pages/image/illustration (4).png"
    },
    {
        title: "practicalTitle",
        text: "practicalText",
        image: "/pages/pages/image/illustration (3).png"
    },
    {
        title: "communityTitle",
        text: "communityText",
        image: "/pages/pages/image/illustration (2).png"
    }
];

function changeBenefit(index) {
    const benefit = benefits[index];

    if (!benefit) return;

    const title = document.getElementById("benefitTitle");
    const text = document.getElementById("benefitText");
    const image = document.getElementById("benefitImage");

    if (!title || !text || !image) return;

    // Tarjima kalitlarini almashtirish
    title.dataset.key = benefit.title;
    text.dataset.key = benefit.text;

    // Rasmni almashtirish
    image.src = benefit.image;

    // Tugmalar dizayni
    document.querySelectorAll(".benefit-btn").forEach((button, i) => {
        button.classList.toggle("bg-[#ff3f22]", i === index);
        button.classList.toggle("text-white", i === index);
        button.classList.toggle("text-gray-400", i !== index);
    });
}