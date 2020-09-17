const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    category: "moderation",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Avatar`)
            .setColor("RANDOM")
            .setImage(user.user.displayAvatarURL({dynamic : true}))
            .setFooter(`Requested by ${message.author.username}`)
        await message.channel.send(embed)
    }
}