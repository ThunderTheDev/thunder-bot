const Discord = require('discord.js');
const fetch = require("node-fetch");


 module.exports = {
  name: "phub",
  category: "image",
  description: "PornHub Quote",
  run: async (bot, message, args) => {

    let user = message.author;
    let text = args.slice(0).join(" ")

    if(!text){
        return message.channel.send("**Enter Text!**");
    }

    let m = await message.channel.send("**Please Wait...**");
    try {
        let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));
        let json = await res.json();
        let attachment = new Discord.MessageAttachment(json.message, "phcomment.png");
        message.channel.send(attachment);
        m.delete({ timeout: 5000 });
    } catch(e){
        m.edit("Error, Try Again! ");
    }
}
};
