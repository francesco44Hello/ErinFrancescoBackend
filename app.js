const express = require("express");
const app = express();
const port = 3000;

const {
  getQuotes,
  addQuote,
  getRandomQuote,
  editQuote,
  deleteQuote,
} = require("./quote.js");

app.use(express.json());
// Create a GET request
app.get("/api/quotes", async function (req, res) {
  res.send (await getQuotes());
});

//Create a POST request
app.post("/api/quotes", async function (req, res) {
 
  // return a JSON response
 let obj = await addQuote(req.body.quoteText);
  res.json(obj);
 });
 
// Ticket 2d - EDIT QUOTE (PATCH)
// listen to patch for quote ID
app.patch('/api/quotes/:id', function(req,res) {
    // invoke editQuote: specify quote ID, specify quoteText
    editQuote(req.params.id, req.body.quoteText);
    // send back confirmation response string
    res.send(`Quote id:${req.params.id} has been updated to "${req.body.quoteText}".`);
  });



app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
