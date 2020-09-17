"use strict";

var pagination = require('discord.js-pagination');

var Discord = require('discord.js');

module.exports = {
  name: "halp",
  description: "The help command, what do you expect?",
  run: function run(client, message, args) {
    var moderation, fun, special, image, pages, emojiList;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Sort your commands into categories, and make seperate embeds for each category
            moderation = new Discord.MessageEmbed().setColor("RANDOM").setTitle("MODERATION COMMANDS").addField("INVITE", "**Sends Invite Links**").addField("BAN", "**Bans the mentioned user**").addField("UNBAN", "**Unbans the user**").addField("KICK", "**Kicks the mentioned user**").addField("MUTE", "**Mute's the mentioned user**").addField("UNMUTE", "**Unmute's the mentioned user**").addField("AVATAR", "**Sends Avatar of the user**").addField("SERVERINFO", "**Sends Info of the server**").addField("USERINFO", "**Sends Info of the user**").addField("PREFIX", "**Sets Customs prefix**").addField("PURGE", "**Deletes Messages**").addField("WARN", "**Warns the mentioned user**").addField("WARNINGS", "**Gives info of the number of warnings of the mentioned user**").addField("CLEARWARNS", "**Clears Warnings of the mentioned user**").addField("SETLEAVE", "**Sets the Leave Channel**").addField("SETWELCOME", "**Sets the Welcome Channel**").setFooter("Requested by ".concat(message.author.username));
            fun = new Discord.MessageEmbed().setColor("RANDOM").setTitle("FUN COMMANDS").addField("INVITE", "**Sends Invite Links**").addField("MEME", "**Sends Memes in the channel**").addField("JOKE", "**Sends Jokes in the channel**").addField("NEKO", "**Sends Neko in the channel**").addField("KILL", "**Kills the mentioned user**").addField("CRY", "**Express your Crying Feelings xD**").addField("SLAP", "**Gives a tight slap to the mentioned user**").addField("KICKXD", "**Gives a Tight Kick to the mentioned user**").addField("PUNCH", "**Gives a tight punch to the mentioned user**").setFooter("Requested by ".concat(message.author.username, " These commands are for fun dont take them seriously if someone uses them on u"));
            special = new Discord.MessageEmbed().setColor("RANDOM").setTitle("FUN COMMANDS").addField("INVITE", "**Sends Invite Links**").addField("POLL", "**Poll a Topic**").addField("ADVICE", "**Gives a Random Advice**").addField("ANIME", "**Gives info about anime's**").addField("EMBED", "**Send a embed message**").addField("PING", "**Sends latency of the bot**").addField("IMGEMBED", "**Send a embed image**").addField("EMOJI", "**Sends all emojis some times it wont work becuase the bot cannot send messages more than 2048 letters**").addField("CORONA", "**Sends Corona Stats of your country**").addField("LEVEL", "**Sends info about your level**").addField("ANIME", "**Sends info about animes**").addField("GIVEAWAY", "**Host Giveaways using this command**").addField("WEATHER", "**Sends Weather Stats of your state/city**").addField("POKEMON", "**Sends info about pokemons wont work for many pokemons**").addField("SUGGEST", "**Send your suggestion to us using this command If u spam u will be blacklisted and u wont be able to use the bot at any cause **").setFooter("Requested by ".concat(message.author.username));
            image = new Discord.MessageEmbed().setColor("RANDOM").setTitle("FUN COMMANDS").addField("INVITE", "**Sends Invite Links**").addField("RIP", "**Sends Rip Image**").addField("PS4", "**Sends Ps4 Image**").addField("GAY", "**Sends a Gay Image**").addField("GREY", "**Sends a grey effect Image**").addField("JAIL", "**Sends a Jail meme Image**").addField("FIRE", "**Sends a Fire Image Image**").addField("HERO", "**Sends a Hero meme Image**").addField("CRUSH", "**Send a Crush meme Image**").addField("SCARY", "**Sends a Scary meme Image**").addField("STEAM", "**Sends Steam Card Image**").addField("TATOO", "**Sends a Tatoo meme Image**").addField("INVERT", "**Sends a Invert Effect Image**").addField("REJECT", "**Sends a Reject Image**").addField("RESPECT", "**Sends a Respect Image**").addField("WANTED", "**Sends a Wanted Image**").addField("WASTED", "**Sends a Wasted Image**").addField("APPROVE", "**Sends a Approve Image**").addField("TRIGGER", "**Sends a Trigger Gif**").addField("BRAZZERS", "**Sends a Brazzers image**").addField("BEAUTIFUL", "**Send a Beautiful meme Image**").addField("CHALLENGER", "**Send a challenger meme Image**").setFooter("Requested by ".concat(message.author.username, " These commands are for fun dont take them seriously if someone uses them on u"));
            pages = [moderation, fun, special, image];
            emojiList = ["⏪", "⏩"];
            pagination(message, pages, emojiList);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};