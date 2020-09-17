
const Discord = require("discord.js");
module.exports = {
  name: "mute",
  description: "Create a simple yes or no poll",
  category: "moderation",
  run: async (bot, message, args) => {

 if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
  const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("U cannot mute yourself");
    }
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
    }
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `Muted` Please make one to mute or use `setup`command to mute")
    }
     if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    user.roles.add(muterole)
    
    .catch(() => message.channel.send(`Unable to mute ${user} are they above my role or i do not have perms?`))
    .then(() => message.channel.send(`${user} was muted ** For \`${reason}\``));
    
  }
}