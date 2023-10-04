import urls from "./urls.js"; // Correct the path to urls.js

// ### -------------------------- DON'T TOUCH PAST THIS POINT ### --------------------------

const imageContainer = document.querySelector(".image-container");
const previewButton = document.querySelector("#preview-button");
const downloadButton = document.querySelector("#download-zip");

const fetchImage = async (url) => {
  try {
    const response = await fetch(url); // Sending request to the internet to fetch image from URL above.
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const blob = await response.blob();
    return { blob, url };
  } catch (error) {
    console.error("Error fetching image:", error);
    return { blob: null, url }; // Return a placeholder for failed images
  }
};

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

const downloadZip = async () => {
  const imagePromises = urls.map(fetchImage);
  const images = await Promise.all(imagePromises);

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
  a.download = "healthCheckJPG.zip";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

previewButton.addEventListener("click", async () => {
  const imagePromises = urls.map(fetchImage);
  const images = await Promise.all(imagePromises);
  displayImages(images);
});

downloadButton.addEventListener("click", downloadZip);
