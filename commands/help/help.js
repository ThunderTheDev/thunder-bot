const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category
        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(" ")
        .setTitle("ABOUT THE BOT")
        .addField("PREFIX", "**tr!**")
        .addField("SUPPORT SERVER", "[Click here to Join our Server](https://discord.gg/hvUjDKR)")
        .addField("INVITE THE BOT", "[Click here to Invite the Bot](https://discord.com/api/oauth2/authorize?client_id=724300617656303687&permissions=2147483639&scope=bot) ")
        .setDescription(`**Bot Provides Various Commands**
        **This Includes :-**
        **Emotion**
        **Meme**
        **Info**
        **Image**
        **Config**
        **Animal**
        **Search**
        **Special**
        **Moderation**`)
        .setFooter(`Requested by ${message.author.username}`)
        const meme = new Discord.MessageEmbed()
        .setColor("RANDOM")  
        .setTitle("MEME COMMANDS")
        .addField("GAY", "**Sends a Gay Meme**")
        .addField("JAIL", "**Sends a Jail meme Image**")
        .addField("MEME", "**Sends meme **")
        .addField("SCARY", "**Sends a Scary meme Meme**")
        .addField("WANTED", "**Sends a Wanted Meme**")
        .addField("WASTED", "**Sends a Wasted Meme**")
        .addField("TRIGGER", "**Sends a Trigger Meme Gif**")
        .addField("WUBMEME", "**Sends a Wub Meme**")
        .addField("BRAZZERS", "**Sends a Brazzers Meme**")
        .addField("POOHMEME", "**Sends a Pooh Meme**")
        .addField("BEAUTIFUL", "**Send a Beautiful Meme**")
        .addField("DRAKEMEME", "**Sends a Drake Meme**")

        .setFooter(`Requested by ${message.author.username}`)
        const info = new Discord.MessageEmbed()
        .setTitle("INFO COMMANDS")
        .setColor("RANDOM")  
        .addField("PING", "**Sends latency of the bot**")
        .addField("LEVEL", "**Sends Your Level By The Bot**") 
        .addField("EMOJI", "**Sends all emojis some times it wont work becuase the bot cannot send messages more than 2048 letters**")
        .addField("AVATAR", "**Sends Avatar of the user**")
        .addField("BOTINFO", "**Sends Info of the bot**")
        .addField("USERINFO", "**Sends Info of the user**")
        .addField("SERVERINFO", "**Sends Info of the server**")

       .setFooter(`Requested by ${message.author.username}`)

        const search = new Discord.MessageEmbed()
        .setTitle("SEARCH COMMANDS")
        .setColor("RANDOM")  
        .addField("IMDB", "**Gives info about Movies/Shows**")
        .addField("ANIME", "**Gives info about anime's**")
        .addField("SEARCH", "**Gives Info About the Google Searched Name**")
        .addField("WEATHER", "**Sends Weather Stats of your state/city**")
        .addField("YTSEARCH", "**Gives Info About the Youtube earched Name**")
        .addField("POKEMON", "**Sends info about pokemons wont work for many pokemons**")

       .setFooter(`Requested by ${message.author.username}`)

        const moderation = new Discord.MessageEmbed()
        .setColor("RANDOM")  
        .setTitle("MODERATION COMMANDS")
        .addField("INVITE", "**Sends Invite Links**")
        .addField("BAN", "**Bans the mentioned user**")
        .addField("UNBAN", "**Unbans the user**")
        .addField("KICK", "**Kicks the mentioned user**")
        .addField("MUTE", "**Mute's the mentioned user**")
        .addField("UNMUTE", "**Unmute's the mentioned user**")
        .addField("SERVERINFO", "**Sends Info of the server**")
        .addField("USERINFO", "**Sends Info of the user**")
        .addField("PURGE", "**Deletes Messages**")
        .addField("WARN", "**Warns the mentioned user**")
        .addField("WARNINGS", "**Gives info of the number of warnings of the mentioned user**")
        .addField("CLEARWARNS", "**Clears Warnings of the mentioned user**")

        
            .setFooter(`Requested by ${message.author.username}`)
           
            const animals = new Discord.MessageEmbed()
            .setColor("RANDOM")  
            .setTitle("ANIMAL COMMANDS")
            .addField("CAT", "**Sends Cat Images**")
            .addField("DOG", "**Sends Dog Images**")
            .addField("FOX", "**Sends Fox Images**")
            .addField("BIRDS", "**Sends Birds Images**")            
            .addField("PANDA", "**Sends Birds Images**")   
            .addField("KOALA", "**Sends Koala Images**")
            .setFooter(`Requested by ${message.author.username}`)
               
            const config = new Discord.MessageEmbed()
                .addField("PREFIX", "**Sets Server Prefix**")
                .addField("SETLEAVE", "**Sets the Leave Channel**")
                .addField("SETWELCOME", "**Sets the Welcome Channel**")
                .setColor("RANDOM")  
                .setTitle("CONFIG COMMANDS")

               .setFooter(`Requested by ${message.author.username}`)
        const emotions = new Discord.MessageEmbed()
        .setColor("RANDOM")  
        .setTitle("FUN COMMANDS")        .addField("MEME", "**Sends Memes in the channel**")
        .addField("JOKE", "**Sends Jokes in the channel**")
        .addField("NEKO", "**Sends Neko in the channel**")
        .addField("KILL", "**Kills the mentioned user**")
        .addField("CRY", "**Express your Crying Feelings xD**")
        .addField("SLAP", "**Gives a tight slap to the mentioned user**")
        .addField("KICKXD", "**Gives a Tight Kick to the mentioned user**")
        .addField("PUNCH", "**Gives a tight punch to the mentioned user**")
        .setFooter(`Requested by ${message.author.username} These commands are for fun dont take them seriously if someone uses them on u`)

        const special = new Discord.MessageEmbed()
        .setColor("RANDOM")  
        .setTitle("SPECIAL COMMANDS")
        .addField("POLL", "**Poll a Topic**")
        .addField("EMBED", "**Send a embed message (usage - tr!embed <hex_color> <message>)**")
        .addField("IMGEMBED", "**Send a embed image (usage - tr!imgembed <hex_color> <image_link>)**")
        .addField("ANNOUNCE", "**Send a embed message (usage - tr!announce <channel> <hex_color> <message>)**")
        .addField("IMGANNOUNCE", "**Send a embed image (usage - tr!imgannounce <channel> <hex_color> <image_link>)**")
        .addField("GIVEAWAY", "**Host Giveaways using this command**")
        .addField("SUGGEST", "**Send your suggestion to us using this command If u spam u will be blacklisted and u wont be able to use the bot at any cause **")
        
            .setFooter(`Requested by ${message.author.username}`)

        const image = new Discord.MessageEmbed()
        .setColor("RANDOM")  
        .setTitle("FUN COMMANDS")
        .addField("RIP", "**Sends Rip Image**")
        .addField("PS4", "**Sends Ps4 Image**")
        .addField("GREY", "**Sends a grey effect Image**")
        .addField("FIRE", "**Sends a Fire Image Image**")
        .addField("HERO", "**Sends a Hero meme Image**")
        .addField("CRUSH", "**Send a Crush meme Image**")
        .addField("PHUB", "**Send a Pornhub Comment Image (usage :- phub <message>**")
        .addField("CLYDE", "**Send a Clyde Text Image (usage :- clyde <message>**")
        .addField("STEAM", "**Sends Steam Card Image**")
        .addField("QUOTE", "**Send a Quote Image (usage :- quote <user> <hex> <message>**")
        .addField("TWEET", "**Send a Tweet Image (usage :- tweet <name> <message>**")
        .addField("TATOO", "**Sends a Tatoo meme Image**")
        .addField("INVERT", "**Sends a Invert Effect Image**")
        .addField("REJECT", "**Sends a Reject Image**")
        .addField("RESPECT", "**Sends a Respect Image**")
        .addField("MAGIK", "**Sends a Magik Image**")
        .addField("APPROVE", "**Sends a Approve Image**")
        .addField("BEAUTIFUL", "**Send a Beautiful meme Image**")
        .addField("CHALLENGER", "**Send a challenger meme Image**")
        
        .setFooter(`Requested by ${message.author.username} These commands are for fun dont take them seriously if someone uses them on u`)

        const pages = [
               help,
               search,
                config,
                emotions,
                animals,
                info,
                special,
                meme,
                image,
                moderation
            ]

        const emojiList = ["⏪", "⏩"];


        pagination(message, pages, emojiList)
    }
}