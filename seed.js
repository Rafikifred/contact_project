// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Contact from "./models/contact.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleContacts = [
  {
    firstName: "Olivier",
    lastName: "Irakiza",
    email: "olivier.irakiza@example.com",
    favoriteColor: "Blue",
    birthday: "2001-04-12",
  },
  {
    firstName: "Aline",
    lastName: "Uwase",
    email: "aline.uwase@example.com",
    favoriteColor: "Green",
    birthday: "1998-09-23",
  },
  {
    firstName: "Eric",
    lastName: "Niyonsenga",
    email: "eric.niyonsenga@example.com",
    favoriteColor: "Red",
    birthday: "1995-12-01",
  },
];

const seedData = async () => {
  await Contact.deleteMany(); // optional: clears existing data
  await Contact.insertMany(sampleContacts);
  console.log("Sample contacts added!");
  mongoose.connection.close();
};

seedData();
