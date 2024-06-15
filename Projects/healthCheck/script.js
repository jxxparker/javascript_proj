document.getElementById("parseUrlsBtn").addEventListener("click", function () {
  // Clear existing images
  const container = document.getElementById("imageContainer");
  container.innerHTML = "";

  // Get URLs from input, split by commas, and trim whitespace
  const input = document.getElementById("urlInput").value;
  urls = input.split(",").map((url) => url.trim().replace(/["']/g, ""));
  currentIndex = 0;

  loadImages();
});

document.getElementById("loadImagesBtn").addEventListener("click", loadImages);

function loadImages() {
  const container = document.getElementById("imageContainer");
  const batchSize = Math.min(1000, urls.length - currentIndex); // Load up to 1000 images or remaining

  for (let i = 0; i < batchSize; i++, currentIndex++) {
    const url = urls[currentIndex];
    if (url) {
      const imageBox = document.createElement("div");
      imageBox.className = "image-box";

      const img = document.createElement("img");
      img.src = url;
      img.alt = "Image " + currentIndex;
      img.onerror = function () {
        this.alt = "Failed to load image";
      };

      const imageNumber = document.createElement("div");
      imageNumber.className = "image-number";
      const numberMatch = url.match(/\d+-\d+/); // Regex to extract number like '331866-33'
      imageNumber.textContent = numberMatch ? numberMatch[0] : "N/A";

      imageBox.appendChild(img);
      imageBox.appendChild(imageNumber);
      container.appendChild(imageBox);
    }
  }

  if (currentIndex >= urls.length) {
    document.getElementById("loadImagesBtn").style.display = "none";
  } else {
    document.getElementById("loadImagesBtn").style.display = "inline";
  }
}

document
  .getElementById("downloadFolderBtn")
  .addEventListener("click", function () {
    const zip = new JSZip();
    const folder = zip.folder("images");

    Promise.all(
      urls.map((url, index) => {
        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok for ${url}`);
            }
            return response.blob();
          })
          .then((blob) => {
            // Adjust the regex based on your URL format
            const numberMatch = url.match(/(\d+)(?=\.\w+$)/); // Extracts numbers right before the file extension
            const fileName = numberMatch
              ? `${numberMatch[0]}.jpg`
              : `image-${index + 1}.jpg`;
            folder.file(fileName, blob);
          })
          .catch((error) => {
            console.error("Failed to fetch:", url, error);
          });
      })
    ).then(() => {
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "images.zip");
      });
    });
  });

// JavaScript in script.js

document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");
  const body = document.body;

  toggleThemeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
  });
});
