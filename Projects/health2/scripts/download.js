// Handle "Download Images" button click
document
  .getElementById("downloadFolderBtn")
  .addEventListener("click", function () {
    const zip = new JSZip();
    const folder = zip.folder("images");

    // Add each fetched blob to the zip folder
    fetchedBlobs.forEach(({ blob, fileName }) => {
      folder.file(fileName, blob);
    });

    // Generate the zip file and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "images.zip");
    });
  });

// Event listener for "Q" button to scroll to the top
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

window.clearParseVars = function () {
  urls = [];
  currentIndex = 0;
  allHealthCheckData = [];
  fetchedBlobs = [];
};
