const crypto = require("crypto");
const {passwordSalt} = require("../config/config.default");

exports.hashMyPassword = password => {
    return crypto.createHash("md5").update(passwordSalt + password).digest('hex');
}
