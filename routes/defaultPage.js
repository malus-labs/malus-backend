var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
    try {
   
        const text = "Main Malus api."
        res.status(200).json(text);
    } catch (err) { 
      next(err);
    }
});

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our defaultRouter, so that it can be used by our main app in app.js;
module.exports = router;