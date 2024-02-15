# Broken App Issues

Fixed Variable declarations
var app = express(); -> const app = express();
let axios = require("axios"); -> const axios = require("axios");

Express app not using Json
added app.use(express.json());

ReferenceError: err is not defined
Catch {next(err)} -> Catch(err){next(err)}

await promised to be resolved
let resultsResolved = await Promise.all(results);
