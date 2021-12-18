//document --> row
//collection --> table
//_id is unique, similar to id
//CRUD --> create, read, update and delete

import { MongoClient } from "mongodb";

async function main() {
  const url =
    "mongodb+srv://flipkartAdmin:SepOVz91L12gzknB@cluster0.c8mxf.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority";

  //instance of mongoclient
  const client = new MongoClient(url);

  //connecting cluster {it might give an error}
  try {
    await client.connect();

    await deleteListingScrapedBeforeDate(client, new Date("2019-02-15"));

    // await deleteListingByName(client, "Cozy");

    // await updateAllListingsToHavePropertyType(client);

    // await upsertListingByName(client, "Ribeira Charming Duplex", {
    //   name: "Cozy",
    //   bedrooms: 2,
    //   beds: 2,
    // });

    // await updateListingName(client, "Ribeira Charming Duplex", {
    //   bedrooms: 6,
    //   beds: 8,
    // });

    // await ListingWithMinBedBathroomsAndMostRecentReviews(client);

    // await findOneListingByName(client, "hello");

    // await createMultipleListings(client, [
    //   {
    //     name: "das",
    //     summary: "dsadjas dbas",
    //   },
    //   {
    //     name: "hello",
    //     summary: "hello world!!",
    //     bathrooms: 10,
    //     beds: [1, 2, 3],
    //   },
    // ]);

    // await createListing(client, {
    //   name: "unknown",
    //   summary: "A charming person",
    //   bedrooms: 1,
    //   bathrooms: 1,
    // });

    // await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function deleteListingScrapedBeforeDate(client, date) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteMany({ last_scraped: { $lt: date } });

  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function deleteListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteOne({ name: nameOfListing });

  console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function updateAllListingsToHavePropertyType(client) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateMany(
      { property_type: { $exists: false } },
      { $set: { property_type: "Unknown" } }
    );

  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  console.log(`${result.modifiedCount} documents was/were updated`);
}

async function upsertListingByName(client, nameOfListing, updatedListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne(
      { name: nameOfListing },
      { $set: updatedListing },
      { upsert: true }
    );

  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  if (result.upsertedCount > 0) {
    console.log(`One document was inserted with the id ${result.upsertedId}`);
  } else {
    console.log(`${result.modifiedCount} documents was/were updated`);
  }
}

async function updateListingName(client, nameOfListing, updatedListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  console.log(`${result.modifiedCount} documents was/were updated`);
}

async function ListingWithMinBedBathroomsAndMostRecentReviews(
  client,
  minBedrooms = 0,
  minBathrooms = 0,
  maxNoOfResults = Number.MAX_SAFE_INTEGER
) {
  const cursor = await client
    .db("sample_airbnb")
    .collection("listingAndReviews")
    .find({
      bedrooms: { $gte: minBedrooms },
      bathrooms: { $gte: minBathrooms },
    })
    .sort({ last_review: -1 })
    .limit(maxNoOfResults);

  const results = await cursor.toArray();
  console.log(results);
}

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingAndReviews")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Found a listing in the collection with the name ${nameOfListing}`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name ${nameOfListing}`);
  }
}

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingAndReviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listings created with the following id's:`
  );
  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  //insertOne --> insert one document at the database
  const result = await client
    .db("sample_airbnb")
    .collection("listingAndReviews")
    .insertOne(newListing);

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

//mongoclient as the paremeter
async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`-${db.name}`);
  });
}
