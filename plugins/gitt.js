const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const M = "It sends version"
const N = "It sends version"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'gitlink', fromMe: true, deleteCommand: true, desc: M,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 Version 🧬\n\nInstalled version 🔗:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/MhmdMukarram/CHINTU-BOT;

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Asena.addCommand({pattern: 'botlink', fromMe: true, deleteCommand: true, desc: N,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 Version 🧬\n\nInstalled version 🔗:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/MhmdMukarram/CHINTU-BOT;
      
    
        var i = Math.floor(2*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        Asena.addCommand({pattern: 'gitlink', fromMe: false, deleteCommand: true, desc: M,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 Version 🧬\n\nInstalled version 🔗:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/MhmdMukarram/CHINTU-BOT;
        
            var i = Math.floor(2*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        Asena.addCommand({pattern: 'botlink', fromMe: false, deleteCommand: true, desc: N,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 Version 🧬\n\nInstalled version 🔗:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/MhmdMukarram/CHINTU-BOT;
            
                var i = Math.floor(2*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));    
                Asena.addCommand({pattern: 'gitlink', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
        
                    var r_text = new Array ();
                
                    r_text[1] = "𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 Version 🧬\n\nInstalled version 🔗:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/MhmdMukarram/CHINTU-BOT;
                    
                
                    var i = Math.floor(2*Math.random())
                
                    await message.client.sendMessage(
                        message.jid,(r_text[i]), MessageType.text);
                
                    }));
                
                
                Asena.addCommand({pattern: 'botlink', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
                
                        var r_text = new Array ();
                    
                        r_text[1] = "𝐂𝐇𝐈𝐍𝐓𝐔 𝐁𝐎𝐓 Version 🧬\n\nInstalled version 🔗:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/MhmdMukarram/CHINTU-BOT;
                    
                        var i = Math.floor(2*Math.random())
                    
                        await message.client.sendMessage(
                            message.jid,(r_text[i]), MessageType.text);
                    
                        }));
}   
