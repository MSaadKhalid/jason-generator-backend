const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const port = 2000;
const cors = require("cors");
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
  let obj = {
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    img: "https://d3jn9mbjl19lxf.cloudfront.net/previews/Blueprints/Marketing/"+req.body.id+".png",
    tags: req.body.tags,
    category: req.body.category,
    subcategory: req.body.subcategory,
    tab: req.body.tab,
  };

  //   fs.readFile("./data.json", "utf8", (err, file) => {
  //     if (err) {
  //       console.log("File read failed:", err);
  //       return;
  //     }
  //     console.log(file);

  fs.appendFile("data.json", JSON.stringify(obj) + ",\n", function (err) {
    if (err) throw err;
  });

  res.send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
