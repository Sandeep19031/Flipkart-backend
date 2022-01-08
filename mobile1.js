import { MongoClient } from "mongodb";
import { ObjectID } from "bson";

const url =
  "mongodb+srv://flipkartAdmin:SepOVz91L12gzknB@cluster0.c8mxf.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority";

// instance of mongoclient
const client = new MongoClient(url);
async function main() {
  // connecting cluster {it might give an error}
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  // finally {
  //     await client.close();
  //   }
}

main().catch(console.error);
// Get all the records from the database with given query
export async function ListingAll(query, database) {
  console.log(query);
  if (database == "Mobiles") {
    // findOne --> find all the records thatmatches the query
    const cursor = await client
      .db("FlipkartDatabase")
      .collection(database)
      .find({
        _id: !query._id
          ? { $nin: [] }
          : { $in: query._id.map((id) => ObjectID(id)) },
        updated_price: {
          $gte: Number(!query.updated_price ? 0 : query.updated_price),
        },
        rating: {
          $gte: Number(!query.rating ? 0 : query.rating),
        },
        discount: {
          $gte: Number(!query.discount ? 0 : query.discount),
        },
        brand: !query.brand ? { $nin: [] } : { $in: query.brand },
      });
    const results = await cursor.toArray();
    return results;
  } else {
    // findOne --> finds the first record that matches the query
    const cursor = await client
      .db("FlipkartDatabase")
      .collection(database)
      .findOne(query);
    if (cursor) {
      return [cursor];
    } else {
      return [];
    }
  }
}

export async function ListingAllProducts(query, database) {
  const cursor = await client
    .db("FlipkartDatabase")
    .collection(database)
    .find({
      _id: !query._id
        ? { $in: [] }
        : { $in: query._id.map((id) => ObjectID(id)) },
    });
  const results = await cursor.toArray();
  return results;
}

// Add new user
export async function CreateNewUser(body, database) {
  // insertOne --> insert one document at the database
  const result = await client
    .db("FlipkartDatabase")
    .collection(database)
    .insertOne(body);
  return "done!!";
}

export async function UpdateUser(body, database) {
  console.log(body);
  if (!body.ProductCart) {
    body.ProductCart = [];
  }
  delete body["_id"];
  console.log(body);
  const result = await client
    .db("FlipkartDatabase")
    .collection(database)
    .updateOne(
      { Email: body.Email, Password: body.Password },
      { $set: body },
      { upsert: true }
    );
  return "Done!!";
}

// Update record if it exist else add it to the database
export async function upsertListingByName(client, title, updatedListing) {
  // updateOne --> Updates first record that matches with query
  const result = await client
    .db("FlipkartDatabase")
    .collection("Mobiles")
    .updateOne({ title: title }, { $set: updatedListing }, { upsert: true });
  return "done!!";
}
