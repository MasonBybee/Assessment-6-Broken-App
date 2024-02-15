const fs = require("fs");
const axios = require("axios");

async function scriptingPractice() {
  let data;
  try {
    data = fs.readFileSync(process.argv[2], "utf8");
  } catch (e) {
    console.error(`Error reading file ${process.argv[2]}`);
    process.exit();
  }
  const lines = data.trim().split(/\r?\n/);
  const requests = lines.map(async (line) => {
    try {
      return await axios.get(line);
    } catch (e) {
      console.error("Couldn't Download", line);
    }
  });
  (await Promise.all(requests)).forEach((res) => {
    if (res) {
      url = res.config.url.match(/^(?:https?:\/\/)?([^\/\s]+)(?:[\/\s]|$)/)[1];
      fs.writeFileSync(`${url}.html`, res.data);
      console.log("Wrote to", url);
    }
  });
}

scriptingPractice();
