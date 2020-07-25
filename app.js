const express = require('express');
const app = express();
const Store = require('./models/store')


app.get("/", async (req, res, next) => {
    try {

      const stores = await Store.findAll();
      //console.log(bookmarks);
      res.status(200).json(stores);
    } catch (err) {
      next(err);
    }
  });


app.listen(8000);