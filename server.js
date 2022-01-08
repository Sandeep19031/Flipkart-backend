import express from "express";
import mongoose from "mongoose";
import { ListingAll, CreateNewUser } from "./mobiles.js";
import ProductCategory from "./data.js";
import cors from "cors"; //use this

const app = express();
const port = process.env.PORT || 9000;

app.use(cors()); //and this

const connectionUrl =
  "mongodb+srv://flipkartAdmin:SepOVz91L12gzknB@cluster0.c8mxf.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("welcome!!"));
app.get("/hello", (req, res) => res.status(200).send("hello world!!"));

app.get("/mobiles", async (req, res) => {
  const query = req.query;
  console.log("server: ", query);
  const result = await ListingAll(query, "Mobiles");
  // console.log(result);
  res.status(200).send(result);
});

app.get("/login", async (req, res) => {
  const query = req.query;
  // console.log("server: ", query);
  const result = await ListingAll(query, "users");
  // console.log(result);
  // console.log("Done yet!!");
  res.status(200).send(result);
});

app.get("/products", async (req, res) => {
  const query = req.query;
  const result = await ListingAll(query, "Mobiles");
  res.status(200).send(result);
});

app.post("/productCategory", (req, res) => {
  const db = req.body;
  ProductCategory.create(db, (err, data) => {
    if (err) {
      res.status(500).send("Error !", err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/signIn", (req, res) => {
  console.log(req.query);
  const body = req.query;
  console.log("server post: ", body);
  const result = CreateNewUser(body, "users");
  console.log(result);
  res.status(200).send("Done!!");
});

app.listen(port, () => console.log(`listening on localhost: ${port}`));
