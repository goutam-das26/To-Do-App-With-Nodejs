const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, and JavaScript files)
app.use(express.static(__dirname));

// Route to handle saving tasks
app.post("/saveTasks", (req, res) => {
  const tasks = req.body.tasks;
const len=tasks.length;
console.log(tasks[len-1])
  // Specify the path to your JSON file
  const filePath = path.join(__dirname, "task.json");

  // Write tasks to the JSON file
  fs.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing tasks to file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      
      console.log("Tasks saved successfully!");

      res.status(200).send("Tasks saved successfully!");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3000;

// // Middleware to parse JSON data
// app.use(bodyParser.json());

// // Serve static files from the root directory
// app.use(express.static(__dirname));

// // Route to handle saving tasks
// app.post("/saveTasks", (req, res) => {
//   // ... (rest of your existing code for saving tasks)
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
