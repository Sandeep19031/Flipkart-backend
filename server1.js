import express from "express";
import mongoose from "mongoose";
import {
  ListingAll,
  ListingAllProducts,
  CreateNewUser,
  UpdateUser,
} from "./mobile1.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

const connectionUrl =
  "mongodb+srv://flipkartAdmin:SepOVz91L12gzknB@cluster0.c8mxf.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ####################################################
// Sample for Testing
// ####################################################

app.get("/", (req, res) => res.status(200).send("welcome!!"));
app.get("/hello", (req, res) => res.status(200).send("hello world!!"));

// ####################################################
// Get Requests
// ####################################################

// Get the list of mobiles stored in database
app.get("/mobiles", async (req, res) => {
  const query = req.query;
  const result = await ListingAll(query, "Mobiles");
  res.status(200).send(result);
});

// Check whether that user is already there or not
app.get("/login", async (req, res) => {
  const query = req.query;
  const result = await ListingAll(query, "users");
  res.status(200).send(result);
});

app.get("/products", async (req, res) => {
  const query = req.query;
  const result = await ListingAllProducts(query, "Mobiles");
  res.status(200).send(result);
});

// ####################################################
// Post and Update Requests
// ####################################################

// Add another user
app.post("/signIn", (req, res) => {
  const body = req.query;
  const result = CreateNewUser(body, "users");
  res.status(200).send("Done!!");
});

app.post("/users", (req, res) => {
  const body = req.query;
  const result = UpdateUser(body, "users");
  console.log(result);
  res.status(200).send("Done!!");
});

// ####################################################
// Delete Requests
// ####################################################

app.listen(port, () => console.log(`listening on localhost: ${port}`));
