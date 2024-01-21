const imageContainer = document.querySelector(".image-container");
const imageUrlInput = document.querySelector("#imageUrlInput");
const processUrlButton = document.querySelector("#processUrlButton");
const previewButton = document.querySelector("#preview-button");
const downloadButton = document.querySelector("#download-zip");

// Function to fetch a single image from the given URL
const fetchSingleImage = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const blob = await response.blob();
    return { blob, url };
  } catch (error) {
    console.error("Error fetching image:", error);
    return { blob: null, url };
  }
};

// Function to process a single URL and display the image
const processSingleUrl = async () => {
  const url = imageUrlInput.value;
  try {
    const image = await fetchSingleImage(url);
    displayImages([image]);
  } catch (error) {
    console.error("Error processing URL:", error);
  }
};

// Function to display images in the image container
const displayImages = (images) => {
  imageContainer.innerHTML = "";
  images.forEach(({ blob, url }) => {
    const fileName = url.match(/\/(\w+-\w+)\//)[1] + ".jpg";
    const imageUrl = blob ? URL.createObjectURL(blob) : "placeholder.jpg";

    const image = document.createElement("div");
    image.classList.add("image");

    const imageContent = `
      <img src="${imageUrl}" alt="">
      <div class="image-name">${fileName}</div>
    `;

    image.innerHTML = imageContent;
    imageContainer.appendChild(image);
  });
};

// Event listener for processing a single URL
processUrlButton.addEventListener("click", processSingleUrl);

// Event listener for previewing images
previewButton.addEventListener("click", async () => {
  const url = imageUrlInput.value;
  if (url) {
    const image = await fetchSingleImage(url);
    displayImages([image]);
  }
});

// Event listener for downloading images as a ZIP file
downloadButton.addEventListener("click", async () => {
  const url = imageUrlInput.value;
  if (url) {
    const image = await fetchSingleImage(url);
    downloadZip([image]);
  }
});

// Function to download images as a ZIP file
const downloadZip = async (images) => {
  const zip = new JSZip();

  images.forEach(({ blob, url }) => {
    if (blob) {
      const fileName = url.match(/\/(\w+-\w+)\//)[1] + ".jpg";
      zip.file(fileName, blob);
    }
  });

  const content = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(content);
  a.download = "downloadedImages.zip";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
