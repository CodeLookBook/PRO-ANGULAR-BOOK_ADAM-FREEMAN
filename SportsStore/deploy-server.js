let express = require("express");
let app     = express();

app.use("/node_modules", express.static("/usr/src/sportsstore/node_modules")); 
app.use("/", express.static("/usr/src/sportsstore/app"));
app.listen(3000, () => console.log("HTTP Server running on port 3000"));
