import { MongoClient } from "mongodb";

let details = [
  {
    title: "Redmi 9 (Sporty Orange, 64 GB)  (4 GB RAM)",
    link: "https://www.linkpicture.com/q/Redmi-9-Sporty-Orange-64GB.jpeg",
    original_price: 10760,
    updated_price: 10090,
    discount: 6,
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "16.59 cm (6.53 inch) HD+ Display",
      "13MP + 2MP | 5MP Front Camera",
      "5000 mAh Battery",
      "MediaTek Helio G35 Processor",
    ],
    warranty:
      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
  },
  {
    title: "Mi 11X (Celestial Silver, 128 GB)  (8 GB RAM)",
    link: "https://www.linkpicture.com/q/Mi-11X-Celestial-Silver-128GB.jpeg",
    original_price: 26190,
    updated_price: 26190,
    discount: 0,
    highlights: [
      "8 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Full HD+ Display",
      "48MP + 8MP + 5MP | 20MP Front Camera",
      "4520 mAh Battery",
      "Qualcomm Snapdragon 870 Processor",
    ],
    warranty:
      "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-box Accessories",
  },
  {
    title: "MI 11X 5G (COSMIC BLACK, 128 GB)  (6 GB RAM)",
    link: "https://www.linkpicture.com/q/MI-11X-5G-Cosmic-Black-128GB.jpeg",
    original_price: 26300,
    updated_price: 26300,
    discount: 0,
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "48MP Rear Camera",
      "4520 mAh Battery",
    ],
    warranty: "1 YEAR",
  },
  {
    title: "MI 11X 5G (LUNAR WHITE, 128 GB)  (6 GB RAM)",
    link: "https://www.linkpicture.com/q/MI-11X-5G-Lunar-White-128GB.jpeg",
    original_price: 28995,
    updated_price: 28995,
    discount: 0,
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "48MP Rear Camera",
      "4520 mAh Battery",
    ],
    warranty: "1 Year",
  },
  {
    title: "Redmi 9 (Carbon Black, 64 GB)  (4 GB RAM)",
    link: "https://www.linkpicture.com/q/Redmi-9-Carbon-Black-64GB.jpeg",
    original_price: 10380,
    updated_price: 10380,
    discount: 0,
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "16.59 cm (6.53 inch) HD+ Display",
      "13MP + 2MP | 5MP Front Camera",
      "5000 mAh Battery",
      "MediaTek Helio G35 Processor",
    ],
    warranty:
      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
  },
  {
    title: "Redmi K20 (Carbon Black, 128 GB)  (6 GB RAM)#JustHere",
    link: "https://www.linkpicture.com/q/Redmi-K20-Carbon-Black-128GB.jpeg",
    original_price: 20985,
    updated_price: 20985,
    discount: 0,
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "16.23 cm (6.39 inch) Full HD+ Display",
      "48MP + 13MP + 8MP | 20MP Front Camera",
      "4000 mAh Li-polymer Battery",
      "Qualcomm Snapdragon 730 Processor",
    ],
    warranty:
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
  },
  {
    title: "REDMI NOTE 10 LITE (Glacier White, 128 GB)  (4 GB RAM)",
    link: "https://www.linkpicture.com/q/Redmi-Note-10-lite-Glacier-White-128GB.jpeg",
    original_price: 15975,
    updated_price: 15975,
    discount: 0,
    highlights: [
      "4 GB RAM | 128 GB ROM",
      "16.94 cm (6.67 inch) Display",
      "48MP Rear Camera",
      "5020 mAh Battery",
    ],
    warranty: "1 Year",
  },
  {
    title: "Redmi 9A (Nature Green, 32 GB)  (2 GB RAM)",
    link: "https://www.linkpicture.com/q/Redmi-9A-Nature-Green-32GB.jpeg",
    original_price: 7888,
    updated_price: 7888,
    discount: 0,
    highlights: [
      "2 GB RAM | 32 GB ROM",
      "16.59 cm (6.53 inch) Full HD+ Display",
      "13MP Rear Camera",
      "5000 mAh Battery",
    ],
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    title: "Redmi 9A (SeaBlue, 32 GB)  (2 GB RAM)",
    link: "https://www.linkpicture.com/q/Redmi-9A-SeaBlue-32GB.jpeg",
    original_price: 7902,
    updated_price: 7902,
    discount: 0,
    highlights: [
      "2 GB RAM | 32 GB ROM",
      "16.59 cm (6.53 inch) Full HD+ Display",
      "13MP Rear Camera",
      "5000 mAh Battery",
    ],
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    title: "Xiaomi 11Lite NE (Diamond Dazzle, 128 GB)  (8 GB RAM)",
    link: "https://www.linkpicture.com/q/Xiaomi-11Lite-NE-Diamond-Dazzle-128GB.jpeg",
    original_price: 28999,
    updated_price: 28999,
    discount: 0,
    highlights: [
      "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "16.64 cm (6.55 inch) Full HD+ Display",
      "64MP + 8MP + 5MP | 20MP Front Camera",
      "4250 mAh Battery",
      "Qualcomm Snapdragon 778G Processor",
    ],
    warranty:
      "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories",
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

    await ListingAll(client);

    // for (let data of details) {
    //   await upsertListingByName(client, data["title"], data);
    // }

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

export async function ListingAll(query) {
  // console.log(query);
  const cursor = await client
    .db("FlipkartDatabase")
    .collection("Mobiles")
    .find({ updated_price: { $gte: Number(query.updated_price) } });

  const results = await cursor.toArray();
  return results;
}
export default client;
