const User = require('../models/user');

async function getUserId(userWalletAddress) {

    //Check if user exist.
    var userID;
    const user = await User.findAll({
        where: {
            wallet_address: userWalletAddress
        }
    });

    //If user does not exist enter into User table and return UserId.
    if(user == '') {
        userID = -1;
    }
    else {
        userID = user[0].dataValues.user_id;
    }

    return userID;
}

module.exports = getUserId;
