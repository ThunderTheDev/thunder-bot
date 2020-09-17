const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "userinfo",
    category: "moderation",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:738930715030192202> online";
                break;
            case "dnd":
                status = "<:dnd:738930826858856520> dnd";
                break;
            case "idle":
                status = "<:idle:738930968408096839> idle";
                break;
            case "offline":
                status = "<:off:738930403511107625> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}'s stats`)
            .setColor("RANDOM")
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setFooter(`Requested by ${message.author.username}`)
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Current Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}