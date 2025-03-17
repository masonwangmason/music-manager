const fs = require('fs'); // Use require for CommonJS
const path = '/Users/yachenwang/Desktop/NEU/webDev/music-manager/db/projects.json'; // Path to your JSON file

// Read the JSON file
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  let projects = JSON.parse(data);

  // Assign IDs to each project
  projects = projects.map((project, index) => ({
    ...project,
    id: index + 1, // Assign a simple numeric ID
  }));

  // Write the updated JSON back to the file
  fs.writeFile(path, JSON.stringify(projects, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('IDs assigned successfully!');
  });
});