const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "poll",
  usage: "poll <topic>",
  description: "Poll ur Topic",
  category: "special",
  run: (client, message, args) => {
    
    const text = args.join(" ");
    
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("POLL: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("RANDOM")
    .setDescription(test)
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
  

    
    message.channel.send("Poll Created in " + channel)
    
  }
}