const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactportfolio"
);

const userSeed = [
  {
    username: "James901",
    password: "Password123",
    email: "",
    date: new Date(Date.now())
  },
  {
    username: "Franky202",
    password: "Password123",
    email: "",
    date: new Date(Date.now())
  },
  {
    username: "Lola555",
    password: "Password123",
    email: "",
    date: new Date(Date.now())
  },
  {
    username: "Bonnie334",
    password: "Password123",
    email: "",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
