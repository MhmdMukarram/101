/* Copyright (C) 2021.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

*/

function successfullMessage(msg) {
    return "✅ *ᴄʜɪɴᴛᴜʙᴏᴛ*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *ᴄʜɪɴᴛᴜʙᴏᴛs*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *ᴄʜɪɴᴛᴜʙᴏᴛ*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
