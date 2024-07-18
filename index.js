const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req,res) => {
	const url = "mongodb+srv://jadhavmansi321:saw4GQNBZ5vUK0pQ@cluster0.ihynaxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0s";
	const client = new MongoClient(url);
	const db = client.db("wn18july24");
	const coll = db.collection("student");
	const document = {"name":req.body.name, "choice":req.body.choice};
	coll.insertOne(document)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () => {console.log("ready @ 9000");});