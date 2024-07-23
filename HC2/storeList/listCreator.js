const fs = require("fs");
const path = require("path");

// Import URLs from stores.js
const urls = require("./stores");

function generateDeviceObjects(urls) {
  return urls.map((url) => {
    const deviceCodeMatch = url.match(/device\/(\d{6}-\d{2})\/screenshot/);
    const deviceCode = deviceCodeMatch ? deviceCodeMatch[1] : null;

    return {
      device_code: deviceCode,
      auto_filled_link: url,
      timezone: "America/Toronto",
      mp_type: "FC",
      market_client: "MCD-CA",
    };
  });
}

// Verify the imported URLs
console.log("URLs:", urls);

const result = generateDeviceObjects(urls);
console.log("Generated Device Objects:", result);

// Define the file path
const desktopPath = path.join(require("os").homedir(), "Desktop");
const filePath = path.join(desktopPath, "mcdCA.js");

// Write the result to the file
fs.writeFile(filePath, JSON.stringify(result, null, 2), (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(`File has been saved to ${filePath}`);
  }
});
