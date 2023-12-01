const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const path = require("path");

const routes = require("./routes");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/restaurants", routes.restaurants);
app.use("/api/reviews", routes.reviews);
app.use("/api/users", routes.users);

app.get("/", (_req, res) => {
  res.send({ message: "Welcome to Underground Foodies" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});