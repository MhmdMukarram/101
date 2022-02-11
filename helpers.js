/* Copyright (C) 2021.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

*/

function successfullMessage(msg) {
    return "✅ *𝚁𝙴𝙳-𝙰𝙻𝙿𝙷𝙰*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *𝚁𝙴𝙳-𝙰𝙻𝙿𝙷𝙰s*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *𝚁𝙴𝙳-𝙰𝙻𝙿𝙷𝙰*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}

