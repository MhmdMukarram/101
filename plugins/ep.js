/*Coded By Mr-Joka*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const E_DESC = 'Sends an Estetic Pic.'


Asena.addCommand({ pattern: 'epic ?(.*)', fromMe: workt, desc: E_DESC }, (async (message, match) => {
      
        var espic = await axios.get(`https://api.zeks.xyz/api/estetikpic?apikey=thejakamizuki`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(espic.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copiright © | 𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓ɪ'})
    
    }));
