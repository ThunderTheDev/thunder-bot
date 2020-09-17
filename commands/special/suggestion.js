const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "special",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Message")
    }
    
    let channel = client.guild.channels.cache.find((x) => (x.id === "739469830343753778"))    
    
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
  

    
    message.channel.send("Sended Your Suggestion to " + channel)
    
  }
}