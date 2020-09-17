"use strict";

var Discord = require("discord.js");

var fs = require("fs");

module.exports = {
  name: "embed",
  category: "special",
  description: "Embed messages",
  usage: "embed <message>",
  run: function run(client, message, args) {
    var channel, text, sayEmbed;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            channel = message.mentions.channels.first();

            if (channel) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", message.channel.send("I could not find that channel in the guild!"));

          case 3:
            if (args[1]) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", message.channel.send("You did not specify your hex!"));

          case 5:
            if (args[2]) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", message.channel.send("You did not specify your text!"));

          case 7:
            text = args.slice(2).join(" ");
            message["delete"]()["catch"](function (O_o) {}); // And we get the bot to say the thing: 

            if (message.member.hasPermission("MANAGE_MESSAGES")) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", message.reply("**You need  __Manage Messages__ Permission to use this command ** "));

          case 11:
            sayEmbed = new Discord.MessageEmbed().setColor(args[1]).setDescription(args.slice(2).join(" "));
            channel.send(sayEmbed);
            message["delete"]();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};