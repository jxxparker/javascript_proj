// Initialize variables to store URLs, data, and fetched images
let urls = [];
let currentIndex = 0;
let allHealthCheckData = [];
let fetchedBlobs = [];

function initialize() {
  if (typeof healthCheckData === "undefined") {
    console.error("healthCheckData is not defined");
    return;
  }
  console.log("healthCheckData is defined:", healthCheckData); // Debug log

  document
    .getElementById("parseUrlsBtn")
    .addEventListener("click", function () {
      // Clear existing images from the container
      const container = document.getElementById("imageContainer");
      container.innerHTML = "";

      // Use the inlined healthCheckData
      allHealthCheckData = healthCheckData;
      filterAndLoadUrls(); // Filter and load the URLs

      // Hide the "Parse URLs" button
      document.getElementById("parseUrlsBtn").style.display = "none";
    });

  // Handle "Load Images" button click
  document
    .getElementById("loadImagesBtn")
    .addEventListener("click", loadImages);

  // Filter and load URLs based on selected filters
  document
    .getElementById("timezoneFilter")
    .addEventListener("change", filterAndLoadUrls);
  document
    .getElementById("mpTypeFilter")
    .addEventListener("change", filterAndLoadUrls);
  document
    .getElementById("marketFilter")
    .addEventListener("change", filterAndLoadUrls);

  document.getElementById("reloadBtn").addEventListener("click", function () {
    // Clear parse-related variables
    window.clearParseVars();
    // Reset the image container
    document.getElementById("imageContainer").innerHTML = "";
    // Show the "Parse URLs" button
    document.getElementById("parseUrlsBtn").style.display = "inline";
    // Hide the "Load Images" and "Download Images" buttons
    document.getElementById("loadImagesBtn").style.display = "none";
    document.getElementById("downloadFolderBtn").style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", initialize);

function filterAndLoadUrls() {
  const timezoneFilter = document.getElementById("timezoneFilter").value;
  const mpTypeFilter = document.getElementById("mpTypeFilter").value;
  const marketFilter = document.getElementById("marketFilter").value;

  // Filter the data based on the selected filters
  const filteredData = allHealthCheckData.filter((item) => {
    return (
      (timezoneFilter === "" || item.timezone === timezoneFilter) &&
      (mpTypeFilter === "" || item.mp_type === mpTypeFilter) &&
      (marketFilter === "" || item.market_client === marketFilter)
    );
  });

  // Extract the URLs from the filtered data
  urls = filteredData
    .map((item) => item.image_path)
    .filter((path) => path !== "");

  fetchedBlobs = []; // Reset fetched blobs
  if (urls.length > 0) {
    currentIndex = 0;
    loadImages(); // Load the images
    document.getElementById("loadImagesBtn").style.display = "inline";
    document.getElementById("downloadFolderBtn").style.display = "inline";
  } else {
    document.getElementById("loadImagesBtn").style.display = "none";
    document.getElementById("downloadFolderBtn").style.display = "none";
  }
}

function loadImages() {
  const container = document.getElementById("imageContainer");
  const batchSize = Math.min(50, urls.length - currentIndex); // Load up to 50 images or remaining

  for (let i = 0; i < batchSize; i++, currentIndex++) {
    const path = urls[currentIndex];
    if (path) {
      // Create image container
      const imageBox = document.createElement("div");
      imageBox.className = "image-box";

      // Create image element
      const img = document.createElement("img");
      img.src = path;
      img.alt = "Image " + currentIndex;
      img.onerror = function () {
        this.alt = "Failed to load image";
      };

      // Create image number element
      const imageNumber = document.createElement("div");
      imageNumber.className = "image-number";
      const numberMatch = path.match(/\d+-\d+/); // Extract number like '331866-33'
      imageNumber.textContent = numberMatch ? numberMatch[0] : "N/A";

      // Append image and number to the image container
      imageBox.appendChild(img);
      imageBox.appendChild(imageNumber);
      container.appendChild(imageBox);

      // Fetch the image and store the blob
      fetch(path)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok for ${path}`);
          }
          return response.blob(); // Get the response as a blob
        })
        .then((blob) => {
          fetchedBlobs.push({
            blob,
            fileName: numberMatch
              ? `${numberMatch[0]}.jpg`
              : `image-${currentIndex}.jpg`,
          });
        })
        .catch((error) => console.error("Failed to fetch:", path, error));
    }
  }

  if (currentIndex >= urls.length) {
    document.getElementById("loadImagesBtn").style.display = "none";
  } else {
    document.getElementById("loadImagesBtn").style.display = "inline";
  }
}

console.log("parse.js loaded"); // Debug log
