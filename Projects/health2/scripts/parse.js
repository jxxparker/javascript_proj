// Initialize variables to store URLs, data, and fetched images
let urls = [];
let currentIndex = 0;
let allHealthCheckData = [];
let fetchedBlobs = [];

// Handle "Parse URLs" button click
document.getElementById("parseUrlsBtn").addEventListener("click", function () {
  // Clear existing images from the container
  const container = document.getElementById("imageContainer");
  container.innerHTML = "";

  // Fetch the JavaScript file containing URLs

  fetch("list/list.js")
    .then((response) => {
      // Check if the response is not ok (status not in 200-299 range)
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text(); // Get the response text
    })
    .then((data) => {
      // Extract the array content from the fetched data
      const startIndex = data.indexOf("[");
      const endIndex = data.lastIndexOf("]") + 1;
      const arrayString = data.slice(startIndex, endIndex);
      // Convert the array string to an actual array
      allHealthCheckData = new Function("return " + arrayString)();
      filterAndLoadUrls(); // Filter and load the URLs

      // Hide the "Parse URLs" button
      document.getElementById("parseUrlsBtn").style.display = "none";
    })
    .catch((error) => console.error("Error fetching the JS file:", error));
});

// Handle "Load Images" button click
document.getElementById("loadImagesBtn").addEventListener("click", loadImages);

// Filter and load URLs based on selected filters
function filterAndLoadUrls() {
  const timezoneFilter = document.getElementById("timezoneFilter").value;
  const mpTypeFilter = document.getElementById("mpTypeFilter").value;

  // Filter the data based on the selected filters
  const filteredData = allHealthCheckData.filter((item) => {
    return (
      (timezoneFilter === "" || item.timezone === timezoneFilter) &&
      (mpTypeFilter === "" || item.mp_type === mpTypeFilter)
    );
  });

  // Extract the URLs from the filtered data
  urls = filteredData
    .map((item) => item.auto_filled_link)
    .filter((url) => url !== "");

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

// Load images from the URLs
function loadImages() {
  const container = document.getElementById("imageContainer");
  const batchSize = Math.min(50, urls.length - currentIndex); // Load up to 500 images or remaining

  for (let i = 0; i < batchSize; i++, currentIndex++) {
    const url = urls[currentIndex];
    if (url) {
      // Create image container
      const imageBox = document.createElement("div");
      imageBox.className = "image-box";

      // Create image element
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Image " + currentIndex;
      img.onerror = function () {
        this.alt = "Failed to load image";
      };

      // Create image number element
      const imageNumber = document.createElement("div");
      imageNumber.className = "image-number";
      const numberMatch = url.match(/\d+-\d+/); // Extract number like '331866-33'
      imageNumber.textContent = numberMatch ? numberMatch[0] : "N/A";

      // Append image and number to the image container
      imageBox.appendChild(img);
      imageBox.appendChild(imageNumber);
      container.appendChild(imageBox);

      // Fetch the image and store the blob
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok for ${url}`);
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
        .catch((error) => console.error("Failed to fetch:", url, error));
    }
  }

  if (currentIndex >= urls.length) {
    document.getElementById("loadImagesBtn").style.display = "none";
  } else {
    document.getElementById("loadImagesBtn").style.display = "inline";
  }
}

// Filter URLs when filter dropdowns change
document
  .getElementById("timezoneFilter")
  .addEventListener("change", filterAndLoadUrls);
document
  .getElementById("mpTypeFilter")
  .addEventListener("change", filterAndLoadUrls);

document.addEventListener("DOMContentLoaded", function () {
  // Handle "Reload" button click
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
});
