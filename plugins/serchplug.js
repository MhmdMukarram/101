/* Codded by NICO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - NICO
 


const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const cyber = ('Chintu Bot External Plugins');
const AAA = ('Chintu Bot External Plugins')
const AAB = "🅒︎🅗︎🅘︎🅝︎🅣︎🅤︎ Ⓑ︎Ⓞ︎Ⓣ︎ ρℓυgιηѕ එක ඉහත ඇත, install කිරීමේ උපදෙස් නිසි ලෙස පිලිපදින්න...🛠️ 😈"
const AAC = "*💠Chintu Bot external plugins💠*\n\n\nඔබට මෙම ප්ලගීන ස්ථාපනය කළ හැක්කේ *.install _<plugin_link>_*\n\nඋදාහරණය : \n.install https://gist.github.com/MhmdMukarram/dhdgdhddyyy6$6\n\n\n🧰 ප්ලගිනය : Pdetail v2\n📄 විස්තරය : Gets details on phone- command; .phone ✅\n📅 නිකුත් කළ දිනය : 2021 දෙසැම්බර් 17\n🌐 Link : https://gist.github.com/MhmdMukarram/dhdgdhddyyy6"
Asena.addCommand({pattern: 'search', fromMe: true, delowndinukacmd: false, desc: AAA,}, (async (message, match) => {

  var msg = await message.reply('Cyber Queen Extenel plugin links ⚒️');

  await message.client.sendMessage(
      message.jid,AAC, MessageType.text);

      await message.client.sendMessage(
        message.jid,AAB, MessageType.text);
                                            
  }));*/
