const jwt = require('jsonwebtoken');

function verifyToken(token){
    try{
        return jwt.verify(token, 'secret');
    }
    catch(err){
        return false;
    }
}

module.exports = {
    verifyToken,
};