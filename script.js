document.getElementById("cake").addEventListener("click", function() {
    this.style.display = "none"; // Hide cake
    document.getElementById("bg-music").play(); // Play music
    
    let images = [
        "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", 
        "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", 
        "img9.jpg", "img10.jpg"
    ];
    
    let container = document.getElementById("images-container");

    images.forEach((img, index) => {
        setTimeout(() => {
            let imageElement = document.createElement("img");
            imageElement.src = img;
            imageElement.classList.add(index % 2 === 0 ? "jump" : "side-jump");
            container.appendChild(imageElement);
        }, index * 500);
    });

    setTimeout(() => {
        document.getElementById("birthday-text").style.display = "block";
    }, images.length * 500);
});
