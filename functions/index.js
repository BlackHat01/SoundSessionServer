const functions = require("firebase-functions");
const express = require("express");
const app = express();
const port = 8080;

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.app = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.use(express.static("public"));

app.post("/", (req, res) => {
    res.status(200).send('[placeholder post request path]')
})

app.listen(port, () => console.log("Server started on port: ${port}"));