const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593823900107014164")
setInterval(function() {
channel.send(`shady`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
