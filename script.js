// Global Variables
const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// Declaring images variable
const images = [
    "mlbb_angela_kishin_densetsu_hd_wallpaper_by_keyadfdf_dj79lfh-pre.jpg",
    "mlbb_layla_paranormal_operative_collector_skin_hd__by_keyadfdf_dimylwm-pre.jpg",
    "656cae3b2f9d2841adb271d45bcd0f60.jpg",
    "dfzhvuj-ee1f0a51-3e9d-4eb0-96b5-d63ddac7760a.jpg",
    "which-skin-is-worth-getting-between-these-3-v0-f6hprmfh4cbd1.jpg",
    "mlbb_granger_exorcist__skin_hd_wallpaper_by_keyadfdf_dhghut6-pre.png",
    "MLBB_InfernalBlazeValir.jpg",
    "kagura_exorcist_skin_8k_wallpaper_by_newjer53_dfdrqg1-fullview.png",
    "selenas-zenith-skin-v0-x7ip9dkpp6de1.webp",
    "will-vexana-zenith-return-this-year-v0-bt9ffo8ui8ge1.webp"
];

let x = 0;

// Generate images to the page
const generateImage = () => {
    for (let i in images) {
        const div = document.createElement("div");
        div.style.transform = `rotateY(calc(${i} * 36deg)) translateZ(450px)`;
        div.innerHTML = `<img src="${images[i]}">`;
        gallery.appendChild(div);
    }
    updatePosition();
};

// Update the position of the Gallery
const updatePosition = () => {
    gallery.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};

// Add eventListener in buttons
prevBtn.addEventListener('click', () => {
    x += 36;
    updatePosition();
});
nextBtn.addEventListener('click', () => {
    x -= 36;
    updatePosition();
});

// Display the images on the pages
    generateImage();