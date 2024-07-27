const fs = require("fs");
const path = require("path");

// Directory containing the images
const directoryPath = path.join(__dirname, "images"); // Path to the images directory

// Function to generate the JSON output
const generateJSON = () => {
  // Read the directory and get all files
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log("Unable to scan directory:", err);
      return;
    }

    console.log("Files found:", files);

    // Filter out only .jpg files and generate the JSON output
    const output = files
      .filter((file) => path.extname(file).toLowerCase() === ".jpg")
      .map((file) => {
        const imageNumber = path.basename(file, path.extname(file));
        return {
          device_code: imageNumber,
          timezone: "America/New_York",
          mp_type: "FC",
          market_client: "Dunkin",
          image_path: `images/${imageNumber}.jpg`,
        };
      });

    // Print the JSON output to console
    console.log(JSON.stringify(output, null, 2));

    // Optionally, write the output to a file
    fs.writeFile(
      "device_images_output.json",
      JSON.stringify(output, null, 2),
      (err) => {
        if (err) {
          console.log("Error writing file:", err);
          return;
        }
        console.log("JSON output saved to device_images_output.json");
      }
    );
  });
};

// Run the function to generate the JSON
generateJSON();
