import express from "express";
import mongoose from "mongoose";
import { ListingAll } from "./mobiles.js";

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
  const result = await ListingAll();
  console.log(result);
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

app.listen(port, () => console.log(`listening on localhost: ${port}`));
