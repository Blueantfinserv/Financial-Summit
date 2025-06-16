const images = [
    "media/workshop-4.jpg",
    "media/workshop-6.jpg",
    "media/workshop-7.jpg",
    "media/workshop-9.jpg",
    "media/workshop-11.jpg",
    "media/workshop-13.jpg",
    "media/workshop-18.jpg",
    "media/workshop-20.jpg",
    "media/workshop-9.jpg",
];

const galleryGrid = document.getElementById("galleryGrid");

images.forEach((img, idx) => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    const image = document.createElement("img");
    image.src = img;
    image.alt = `Event ${idx + 1}`;

    card.appendChild(image);
    galleryGrid.appendChild(card);
});
