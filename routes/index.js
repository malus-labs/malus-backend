var express = require("express");
var router = express.Router();

// Subrouters;
const storesRouter = require("./store.js");
const user_storeRouter = require("./user_store.js");

// Mount our subrouters to assemble our apiRouter;
router.use("/store", storesRouter);
router.use("/user_store", user_storeRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;