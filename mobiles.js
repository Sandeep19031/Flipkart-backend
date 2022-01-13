import { ObjectID } from "bson";
import { MongoClient, ObjectId } from "mongodb";

let details = [
  {
    title: "Redmi 9 (Sporty Orange, 64 GB)  (4 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/Redmi-9-Sporty-Orange-64GB.jpeg",
    ],
    original_price: 10760,
    discount: 6,
    rating: 3.5,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "16.59 cm (6.53 inch) HD+ Display",
      "13MP + 2MP | 5MP Front Camera",
      "5000 mAh Battery",
      "MediaTek Helio G35 Processor",
    ],
    warranty:
      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "Mi 11X (Celestial Silver, 128 GB)  (8 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/Mi-11X-Celestial-Silver-128GB.jpeg",
    ],
    original_price: 26190,
    discount: 4,
    rating: 4.5,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "8 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Full HD+ Display",
      "48MP + 8MP + 5MP | 20MP Front Camera",
      "4520 mAh Battery",
      "Qualcomm Snapdragon 870 Processor",
    ],
    warranty:
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-box Accessories",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "MI 11X 5G (COSMIC BLACK, 128 GB)  (6 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/MI-11X-5G-Cosmic-Black-128GB.jpeg",
    ],
    original_price: 26300,
    discount: 10,
    rating: 3,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "48MP Rear Camera",
      "4520 mAh Battery",
    ],
    warranty: "1 YEAR",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "MI 11X 5G (LUNAR WHITE, 128 GB)  (6 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/MI-11X-5G-Lunar-White-128GB.jpeg",
    ],
    original_price: 28995,
    discount: 1,
    rating: 5,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "48MP Rear Camera",
      "4520 mAh Battery",
    ],
    warranty: "1 Year",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "Redmi 9 (Carbon Black, 64 GB)  (4 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/Redmi-9-Carbon-Black-64GB.jpeg",
    ],
    original_price: 10380,
    discount: 5,
    rating: 4,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "16.59 cm (6.53 inch) HD+ Display",
      "13MP + 2MP | 5MP Front Camera",
      "5000 mAh Battery",
      "MediaTek Helio G35 Processor",
    ],
    warranty:
      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "Redmi K20 (Carbon Black, 128 GB)  (6 GB RAM)#JustHere",
    imageLinks: [
      "https://www.linkpicture.com/q/Redmi-K20-Carbon-Black-128GB.jpeg",
    ],
    original_price: 20985,
    discount: 15,
    rating: 4.2,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "16.23 cm (6.39 inch) Full HD+ Display",
      "48MP + 13MP + 8MP | 20MP Front Camera",
      "4000 mAh Li-polymer Battery",
      "Qualcomm Snapdragon 730 Processor",
    ],
    warranty:
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "REDMI NOTE 10 LITE (Glacier White, 128 GB)  (4 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/Redmi-Note-10-lite-Glacier-White-128GB.jpeg",
    ],
    original_price: 15975,
    discount: 8,
    rating: 3.4,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "4 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "48MP Rear Camera",
      "5020 mAh Battery",
    ],
    warranty: "1 Year",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "Redmi 9A (Nature Green, 32 GB)  (2 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/Redmi-9A-Nature-Green-32GB.jpeg",
    ],
    original_price: 7888,
    discount: 8,
    rating: 3.9,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "2 GB RAM | 32 GB ROM",
      "16.59 cm (6.53 inch) Full HD+ Display",
      "13MP Rear Camera",
      "5000 mAh Battery",
    ],
    warranty: "1 Year Manufacturer Warranty",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "Redmi 9A (SeaBlue, 32 GB)  (2 GB RAM)",
    imageLinks: ["https://www.linkpicture.com/q/Redmi-9A-SeaBlue-32GB.jpeg"],
    original_price: 7902,
    discount: 7,
    rating: 4.1,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "2 GB RAM | 32 GB ROM",
      "16.59 cm (6.53 inch) Full HD+ Display",
      "13MP Rear Camera",
      "5000 mAh Battery",
    ],
    warranty: "1 Year Manufacturer Warranty",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "Xiaomi 11Lite NE (Diamond Dazzle, 128 GB)  (8 GB RAM)",
    imageLinks: [
      "https://www.linkpicture.com/q/Xiaomi-11Lite-NE-Diamond-Dazzle-128GB.jpeg",
    ],
    original_price: 28999,
    discount: 5,
    rating: 4.6,
    brand: "Mi",
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "16.64 cm (6.55 inch) Full HD+ Display",
      "64MP + 8MP + 5MP | 20MP Front Camera",
      "4250 mAh Battery",
      "Qualcomm Snapdragon 778G Processor",
    ],
    warranty:
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
  {
    title: "realme Narzo 50A (Oxygen Blue, 64 GB)  (4 GB RAM)",
    brand: "Realme",
    rating: 4.4,
    discount: 11,
    original_price: 12999,
    imageLinks: [
      "https://www.linkpicture.com/q/main_1.jpeg",
      "https://www.linkpicture.com/q/5_74.jpeg",
      "https://www.linkpicture.com/q/6_54.jpeg",
      "https://www.linkpicture.com/q/7_44.jpeg",
      "https://www.linkpicture.com/q/8_2.jpeg",
      "https://www.linkpicture.com/q/9_2.jpeg",
      "https://www.linkpicture.com/q/10_2.jpeg",
    ],
    videoLinks: [
      "https://youtu.be/GS10cIsEgU4",
      "https://youtu.be/hJ4Q4a2S84Y",
    ],
    Available_offers: {
      "Bank Offer": "5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
      "Special Price": "Get extra ₹1500 off (price inclusive of discount)",
      EMI: "starting from ₹399/month",
    },
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
      "16.51 cm (6.5 inch) HD+ Display",
      "50MP + 2MP + 2MP | 8MP Front Camera",
      "6000 mAh Battery",
      "MediaTek Helio G85 Processor",
    ],
    warranty: "1 Year Warranty for Mobile and 6 Months for Accessories",
    description:
      "Equipped with a Helio G85 Gaming Processor, the realme Narzo 50A is a high-speed smartphone that lets you play intense games and binge-watch favourite shows. This smartphone features a 6000 mAh Battery and 18W Quick Charge for uninterrupted performance, and a 50 MP AI Triple Camera to click beautiful photos",
  },
];
const url =
  "mongodb+srv://flipkartAdmin:SepOVz91L12gzknB@cluster0.c8mxf.mongodb.net/FlipkartDatabase?retryWrites=true&w=majority";

//instance of mongoclient
const client = new MongoClient(url);
async function main() {
  //connecting cluster {it might give an error}
  try {
    await client.connect();

    for (let data of details) {
      data.updated_price = Number(
        Number(
          data.original_price - (data.discount * data.original_price) / 100
        ).toFixed(0)
      );
      await upsertListingByName(client, data["title"], data);
    }
    // await ListingAll(client);

    // details.forEach((data) => {

    //   console.log(data["title"]);
    // });
    // await upsertListingByName(client, "Ribeira Charming Duplex", {
    //   name: "Cozy",
    //   bedrooms: 2,
    //   beds: 2,
    // });
  } catch (e) {
    console.error(e);
  }
  //   finally {
  //     await client.close();
  //   }
}

main().catch(console.error);

async function upsertListingByName(client, title, updatedListing) {
  const result = await client
    .db("FlipkartDatabase")
    .collection("Mobiles")
    .updateOne({ title: title }, { $set: updatedListing }, { upsert: true });

  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  if (result.upsertedCount > 0) {
    console.log(`One document was inserted with the id ${result.upsertedId}`);
  } else {
    console.log(`${result.modifiedCount} documents was/were updated`);
  }
}

export async function ListingAll(query, database) {
  console.log(database, " :", query);
  if (database == "Mobiles") {
    const cursor = await client
      .db("FlipkartDatabase")
      .collection(database)
      .find({
        // _id: ObjectID("61be2b977813b9238e2f1913"),
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
    console.log(results);
    return results;
  } else {
    const cursor = await client
      .db("FlipkartDatabase")
      .collection(database)
      .find(query);

    const results = await cursor.toArray();
    // console.log(results);
    return results;
  }
}

export async function CreateNewUser(body, database) {
  // insertOne --> insert one document at the database
  console.log(database, " :", body);
  const result = await client
    .db("FlipkartDatabase")
    .collection(database)
    .insertOne(body);

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
  return "done!!";
}

export default client;
