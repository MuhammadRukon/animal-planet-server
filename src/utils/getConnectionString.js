require("dotenv").config();
const getConnectionString = () => {
  const uri = process.env.DB_URI;
  let conenctionURI = "";
  let username = "";
  let password = "";
  if (process.env.ENVIRONMENT === "production") {
    username = process.env.MONGO_USERNAME_PROD;
    password = process.env.MONGO_PASSWORD_PROD;
  } else {
    username = process.env.MONGO_USERNAME;
    password = process.env.MONGO_PASSWORD;
  }

  conenctionURI = uri
    .replace("<username>", username)
    .replace("<password>", password);
  return conenctionURI;
};

module.exports = getConnectionString;
