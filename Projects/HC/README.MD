**PLEASE CAREFULLY READ BEFORE USING THIS TOOL**

**Username**: jihunpark  
**Password**: iamhealthy

1. **Do Not Edit Scripts Folder**: Any changes to the scripts folder will cause the tool to malfunction.

2. **Setup Instructions**:

   - Ensure Node.js is installed.
   - Install live-server
   - Navigate to the HC directory and start live-server by running:
     live-server

3. **Editing `stores.js`**:

   - Go to the `storeList` folder and edit `stores.js` using the following format:
     ```javascript
     module.exports = [
       "https://us.dunkindonuts.switchboardcms.com/device/302429-117/screenshot/",
     ];
     ```

4. **Editing `listCreator.js`**:

   - Edit the section marked `// Edit Format Here` with your format.
   - Ensure the `timezone`, `mp_type`, and `market_client` formats are correct and visible in `index.html`.
   - Run the following command inside the `storeList` directory to create files on your desktop:
     node listcreator.js

5. **Updating `list.js`**:
   - Add new entries to `list.js` and verify that the data is 100% accurate.
   - Comment on what you have added, including types and timezone, to avoid confusion.
