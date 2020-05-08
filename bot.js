const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
let channel =     client.channels.get("704075789242597476")
setInterval(function() {
channel.send(`يجدعان انا يوسف يوسف وصل`);
}, 30)
})

client.login(process.env.BOT_TOKEN);