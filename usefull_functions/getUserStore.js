const User = require("../models/user");
const Store = require("../models/store");
const User_Store = require("../models/user_store");

User.belongsToMany(Store, {through: User_Store, as: "stores", foreignKey: "user_id",});
Store.belongsToMany(User, {through: User_Store, as: "users", foreignKey: "store_id",});

async function getUserStoreId(user_id, pageNumber) {
    var userStores;
    const convertedID = parseInt(user_id); 
    const amountPerPage = 4;
            const startIndex = (pageNumber - 1) * amountPerPage; 
            const endIndex = pageNumber * amountPerPage; 
             
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
            userStores.push({"page_number": pageNumber});
            return userStores;
}

module.exports = getUserStoreId;