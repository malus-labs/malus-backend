var express = require("express");
var router = express.Router();
const Store = require("../models/store")

router.get("/", async (req, res, next) => {
    try {

      const stores = await Store.findAll();
      res.status(200).json(stores);

    } catch (err) {
        
      next(err);
    }
});

module.exports = router;