const express = require("express");
const cors = require("cors");
const controller = require("./controller")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", controller.getCompliment);

app.get("/api/fortune", controller.getFortune);

app.post("/api/display", controller.displayText)

app.delete("/api/display/:id", controller.deleteTask)

app.listen(4000, () => console.log("Server running on 4000"));
