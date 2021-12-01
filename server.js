const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const port = 2000;

app.post("/", (req, res) => {
  let obj = {
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    tags: req.body.tags,
    category: req.body.category,
    subcategory: req.body.subcategory,
    tab: req.body.tab,
  };

  console.log(obj);

  //   fs.readFile("./data.json", "utf8", (err, file) => {
  //     if (err) {
  //       console.log("File read failed:", err);
  //       return;
  //     }
  //     console.log(file);
  fs.appendFile("data.json", JSON.stringify(obj) + ",", function (err) {
    if (err) throw err;
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
