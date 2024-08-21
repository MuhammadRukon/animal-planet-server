const app = require("./src/app");
const connectDb = require("./src/db/connectDb");
require("dotenv").config();
const port = +process.env.PORT || 4000;

(function () {
  connectDb();
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
})();
