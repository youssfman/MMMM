const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
let channel =     client.channels.get("710594973162143794")
setInterval(function() {
channel.send(`احا الشبشب ضاع`);
}, 30)
})

client.login(process.env.BOT_TOKEN);