let Input = document.querySelector("#input-value");
let GenerateBtn = document.querySelector(".image-generate-btn");
let ImgeContainer = document.querySelector(".image-container");
let Ptext = document.querySelector("#imageContainerText");
let Imagetodisplay = document.querySelector(".my-generated-image");

async function fetchImage(prompt) {
    let option = {
        method: 'GET',
        headers: {
            Accept: "application/json",
            Authorization: 'Oqtmgf26ydj7a3o7LE2RTxLgvStIzKfxQL7qjAAXcnm8ScVizrHH5Izq' // ✅ Replace with your API key
        }
    };

    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(prompt)}&per_page=4`, option);
        if (!response.ok) {
            throw new Error("Unable to fetch");
        }

        const data = await response.json();

        if (data.photos.length === 0) {
            Ptext.innerHTML = "No image found for this prompt.";
            return;
        }

        const imageUrl = data.photos[0].src.medium;

        Ptext.innerHTML = `Here's an image based on "${prompt}":`;
        ImgeContainer.style.display = 'block';
        Imagetodisplay.src = imageUrl;
        console.log(imageUrl);
        
    } catch (e) {
        console.log(e);
        Ptext.innerHTML = "Error fetching image.";
    }
}

GenerateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let inValue = Input.value.trim();
    if (inValue !== "") {
        fetchImage(inValue);
    } else {
        Ptext.innerHTML = "Please enter a prompt to search images.";
    }
});
