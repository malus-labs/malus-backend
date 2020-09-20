var express = require("express");
var router = express.Router();
const User = require("../models/user");
const Store = require("../models/store");
const User_Store = require("../models/user_store");

User.belongsToMany(Store, {through: User_Store, as: "stores", foreignKey: "user_id",});
Store.belongsToMany(User, {through: User_Store, as: "users", foreignKey: "store_id",});

router.get("/:user_id/:pageNumber", async (req, res, next) => {
    try {

        const { user_id } = req.params;
        const { pageNumber } = req.params;
        const convertedPageNumber = parseInt(pageNumber);
        var userStores;

        
        if(user_id.substring(0, 2) == "0x") {
            


        }
        else {
            const convertedID = parseInt(user_id); 
            const amountPerPage = 5;
            const startIndex = (convertedPageNumber - 1) * amountPerPage; 
            const endIndex = convertedPageNumber * amountPerPage; 
             
            const result = await User.findAll({ 
                offset: startIndex,
                limit: 20,
                where: {
                    user_id: convertedID
                },
                include: [
                    {
                        model: Store, 
                        as: "stores"
                    }
                ]
            })
            
            userStores = result.slice(startIndex, endIndex + 1);  
            var amountPagesLeft = Math.ceil(result.length / amountPerPage);
            
            if(result.length <= amountPerPage) {
                amountPagesLeft = 0;
            }
            
            userStores.push({"amount_pages_left": amountPagesLeft});
            userStores.push({"page_number": convertedPageNumber});
        }

        res.status(200).json(userStores);
    } catch (err) { 
      next(err);
    }
});

module.exports = router;