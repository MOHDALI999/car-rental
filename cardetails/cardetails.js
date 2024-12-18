// List of additional images for each car
const carImages = {
    1: [
        "assets/download (2).jpg",
        "assets/download (1).jpg",
        "assets/download (3).jpg"
    ],
    2: [
        "assets/download (3).jpg",
        "assets/download (2).jpg",
        "assets/download (1).jpg"
    ],
    3: [
        "assets/download (1).jpg",
        "assets/download (3).jpg",
        "assets/download (2).jpg"
    ]
};

// Event listener for "View More" buttons
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', function () {
        const carId = this.getAttribute('data-car-id');
        const moreImagesContainer = document.getElementById(`car-images-${carId}`);

        // If images are already visible, toggle them off
        if (moreImagesContainer.style.display === "block") {
            moreImagesContainer.style.display = "none";
            this.textContent = "View Image";
        } else {
            // Display images dynamically
            moreImagesContainer.innerHTML = carImages[carId]
                .map((src) => `<img src="${src}" alt="Car Image" class="thumbnail">`)
                .join("");
            moreImagesContainer.style.display = "block";
            this.textContent = "Hide Images";
        }
    });
});

// Add a modal to display full-page images
const modal = document.createElement('div');
modal.id = "image-modal";
modal.innerHTML = `
    <div class="modal-content">
        <span id="close-modal">&times;</span>
        <img id="modal-image" src="" alt="Full Image">
    </div>
`;
document.body.appendChild(modal);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('thumbnail')) {
        const modalImage = document.getElementById('modal-image');
        modalImage.src = event.target.src;
        modal.style.display = "block";
    }
});

document.getElementById('close-modal').addEventListener('click', function () {
    modal.style.display = "none";
});
