const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
  try {
    // console.log(req.body["developers"]);
    let results = req.body.developers.map(async (d) => {
      return axios.get(`https://api.github.com/users/${d}`);
    });
    let resultsResolved = await Promise.all(results);

    let out = resultsResolved.map((r) => ({
      name: r.data["name"],
      bio: r.data["bio"],
    }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
