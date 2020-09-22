var express = require("express");
var router = express.Router();
const getUserId = require("../usefull_functions/getUserId");
const getUserStore = require("../usefull_functions/getUserStore");

router.get("/:user_id/:pageNumber", async (req, res, next) => {
    try {

        const { user_id } = req.params;
        const { pageNumber } = req.params; 
        const convertedPageNumber = parseInt(pageNumber);
        var userStores;
        
        if(user_id.substring(0, 2) == "0x") {
            const fetchUserId = await getUserId(user_id);
            if(fetchUserId == - 1) { //fixed tommarow..
                userStores = [
                    {"amount_pages_left": 0},
                    {"page_number": convertedPageNumber}
                ]
            }
            else {
                userStores = await getUserStore(user_id, convertedPageNumber);
            }
        }
        else {
            userStores = await getUserStore(user_id, convertedPageNumber);   
        }
        
        res.status(200).json(userStores);
    } catch (err) { 
      next(err);
    }
});

module.exports = router;