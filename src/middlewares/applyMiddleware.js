const cors = require("cors");

const applyMiddleware = (express, app) => {
  app.use(express.json());
  require("dotenv").config();

  app.use(
    cors({
      origin: [process.env.LOCAL_CLIENT, process.env.REMOTE_CLIENT],
      credentials: true,
    })
    
  );
  
  
};

module.exports = applyMiddleware;
