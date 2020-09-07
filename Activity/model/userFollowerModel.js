
const db = require("./connection");
const createRequest = function (mappingObj) {
    return new Promise(function (resolve, reject) {
        db.query('INSERT INTO user_follower SET ?', mappingObj, function (err, result) {
            // Neat!
            if (err) {
                console.log("error at userFollowerModel") ;
                reject(err)
            } else {
                resolve(mappingObj);
            }
        });
    })
}
module.exports.createRequest = createRequest;