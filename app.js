const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem necessitatibus iusto animi impedit atque sit rem dolorum, dolorem quae adipisci obcaecati cumque facilis laudantium voluptatem! Beatae assumenda alias quam!";
const aboutContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim debitis commodi esse saepe, quisquam ad atque amet necessitatibus unde eaque asperiores placeat. Natus rerum iusto fuga blanditiis accusantium ad eum magni laudantium illum corrupti suscipit dignissimos praesentium, consectetur voluptatem aliquid ipsa dicta labore, tenetur exercitationem, veniam nam assumenda. Modi?";
const contactContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem similique tempora vero tempore incidunt vitae laborum quisquam quaerat in ipsa iste eveniet, nesciunt eius velit eos eligendi? Iste, aut.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home", { content: homeContent });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
