const { token, default_prefix, ame_api } = require("./config.json")
const { config } = require("dotenv");
const discord = require("discord.js") 
const Discord = require('discord.js');
const Canvas = require("canvas");
const DanBotHosting = require("danbot-hosting");
const client = new discord.Client({
  disableEveryone: true
})
require("./music.js")
const { Random } = require("something-random-on-discord")
const random = new Random();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const db = require("quick.db") 
const { addexp } = require("./handlers/xp.js")
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.commands = new discord.Collection()
client.prefix = default_prefix
client.queue = new Map();
client.vote = new Map();


["command"].forEach(handler => { 
  require(`./handlers/${handler}`)(client)
})

client.on("ready",  async (member) => {
setInterval(function(){
let statuses = [
`tr!help | ${client.guilds.cache.size} Guilds `,
`tr!help | ${client.users.cache.size} Users`,
"tr!help or Mention Me"
]
let status = statuses[Math.floor(Math.random() * statuses.length)];
client.user.setPresence({
   activity: { name: status, type: "LISTENING" },
   status: "dnd"
});
}, 180000)
  console.log('I m ready to Go | Thunder is OP')
})

client.on("message", async message => {
  
if(message.author.bot) return;
  if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix
    if (message.mentions.has(client.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
      let mentionEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(" ")
      .setDescription(`**My prefix for ${message.guild.name} is [  ${prefix}  ]**
      **Type ${prefix}help for commands of the bot**`);
     message.channel.send(mentionEmbed)
      }

  if(!message.content.startsWith(prefix)) return;

     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
  

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
  
return addexp(message)

})


client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  if(!chx) return;
   let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/702477981570039939/739160066862612631/PicsArt_08-01-10.07.56.png" })
  
  let wembed = new discord.MessageEmbed()
  .attachFiles([{
    attachment: data,
    name: "hello.png"
  }])
  .setColor("RANDOM")
  .setImage("attachment://hello.png")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`** Welcome <@${member.user.id}> To our Server** 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**Make sure to**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**Read and Follow our Rules.**
**Be upto date with our announcements.**
**Make new friends in the chat and be active.**
**We hope that u have fun in the server!**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**User Join Position - ${member.guild.memberCount}**
**User Joined Discord - ${member.user.createdAt}**`);
  client.channels.cache.get(chx).send(wembed)
})
client.on("guildMemberRemove", async (member) => {
  let chx = db.get(`leavechannel_${member.guild.id}`);
  if(!chx) return;

  let wembed = new discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("GOOD BYE")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`**${member.user} Just Left The Server**`);
  client.channels.cache.get(chx).send(wembed)
})
client.on("guildCreate", async (guild) => {
  let channel = client.channels.cache.find((x) => (x.id === "749542048025280552"))    
  
    let embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`**Joined a Server!**`)
    .addField(`**Name**`, `**${guild.name}**`)
    .addField(`**Guild ID**`, `**${guild.id}**`)
    .addField(`**Users**`, `**${guild.memberCount}**`)
    .addField(`**Owner**`, `**${guild.owner.user.tag}**`)
    .addField(`**Owner ID**`, `**${guild.owner.id}**`)
    .setThumbnail(guild.iconURL)
    channel.send(embed) 
  })
  client.on("guildDelete", async (guild) => {
    let channel = client.channels.cache.find((x) => (x.id === "749542048025280552"))    
    
      let embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`**Left the Server!**`)
      .addField(`**Name**`, `**${guild.name}**`)
      .addField(`**Guild ID**`, `**${guild.id}**`)
      .addField(`**Users**`, `**${guild.memberCount}**`)
      .addField(`**Owner**`, `**${guild.owner.user.tag}**`)
      .addField(`**Owner ID**`, `**${guild.owner.id}**`)
      .setThumbnail(guild.iconURL)
      channel.send(embed) 
    })

client.login(token)