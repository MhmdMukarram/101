/* Copyright (C) 2021 CYBER QUEEN
CODDED BY NICO
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 is Alive!```\n\nᎠҽѵҽӀօքҽɾ : ༒︎𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰༒︎\n\n*ᴠᴇʀꜱɪᴏɴ:* ```Version 3.8.4-Public Edition```\n\n*ᴛᴇʟᴇɢʀᴀᴍ ɢʀᴏᴜᴘ:* https://t.me/redalphachatgroup\n\n*ᴘᴜʙʟɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j\n\n*ᴏᴡɴᴇʀ:* https://wa.me/94740979220\n\n\nᴄʜɪɴᴛᴜ ʙᴏᴛ © ʀᴇᴅ ᴀʟᴘʜᴀ"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © | 𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 is Alive!```\n\nᎠҽѵҽӀօքҽɾ : ༒︎𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰༒︎\n\n*ᴠᴇʀꜱɪᴏɴ:* ```Version 3.8.4-Public Edition```\n\n*ᴛᴇʟᴇɢʀᴀᴍ ɢʀᴏᴜᴘ:* https://t.me/redalphachatgroup\n\n*ᴘᴜʙʟɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ɢʀᴏᴜᴘ:* https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j\n\n*ᴏᴡɴᴇʀ:* https://wa.me/94740979220\n\n\nᴄʜɪɴᴛᴜ ʙᴏᴛ ©  ʀᴇᴅ ᴀʟᴘʜᴀ"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright © | 𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
