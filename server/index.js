require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const { ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sdg7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    client.connect();
    const db = client.db("blogpixel");
    const usersCollection = db.collection("users");
    const newsCollection = db.collection("news");
    console.log("mongodb connected succesfully");
    app.get("/", (_, res) => {
      res.send("Server running succesfully! YAY");
    });

    app.get("/users", async (req, res) => {
      const users = await usersCollection.find({}).toArray();
      res.send(users);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      const x = await usersCollection.insertOne(user);
      res.send(x);
    });
    app.get("/news", async (req, res) => {
      const news = await newsCollection.find({}).toArray();
      res.send(news);
    });
    app.get("/news/:id", async (req, res) => {
      const id = req.params.id;
      const news = await newsCollection.findOne({ _id: new ObjectId(id) });
      res.send(news);
      console.log("single", news);
    });
    app.post("/news", async (req, res) => {
      const id = req.params.id;
      const structured = {
        title: req.body.title,
        description: req.body.desc,
        image: req.body.img,
      };
      const response = await newsCollection.insertOne(structured);
      res.send(response);
    });

    app.put("/news/:id", async (req, res) => {
      const id = req.params.id;
      const updated = await newsCollection.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: req.body,
        },
        {
          upsert: true,
        }
      );
      res.send(updated);
    });
  } catch (err) {
    console.log(err);
  }
};

app.get("/", async (_, res) => {
  res.send("server is running successfully");
});

run();

app.listen(port, () => {
  console.log("server is running on port" + " " + port);
});
