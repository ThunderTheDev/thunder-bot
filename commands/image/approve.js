const Discord = require('discord.js');
const { AME_API } = require('../../config');
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(AME_API);

module.exports = {
        name: "approve",
        noalias: [''],
        category: "image",
        description: "Sends a approved image",
        usage: "approved <@user>",
        accessableby: "everyone",
    run: async (bot, message, args) => {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("approved", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "approved.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);
    }
};