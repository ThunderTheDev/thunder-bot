"use strict";

var Discord = require("discord.js");

module.exports = {
  name: "getinvite",
  category: "owner",
  run: function run(client, message, args) {
    var guild, fetched, found, tChannel, invite;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(message.author.id !== "554185890453389322")) {
              _context.next = 24;
              break;
            }

            guild = null;

            if (args[0]) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", message.channel.send("Enter An Name"));

          case 4:
            if (!args[0]) {
              _context.next = 10;
              break;
            }

            fetched = bot.guilds.cache.find(function (g) {
              return g.name === args.join(" ");
            });
            found = bot.guilds.cache.get(args[0]);

            if (!found) {
              if (fetched) {
                guild = fetched;
              }
            } else {
              guild = found;
            }

            _context.next = 11;
            break;

          case 10:
            return _context.abrupt("return", message.channel.send("Invalid Name!"));

          case 11:
            if (!guild) {
              _context.next = 21;
              break;
            }

            tChannel = guild.channels.cache.find(function (ch) {
              return ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE");
            });

            if (tChannel) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", message.channel.send("An Error Has Occured Try Again!"));

          case 15:
            _context.next = 17;
            return regeneratorRuntime.awrap(tChannel.createInvite({
              temporary: false,
              maxAge: 0
            })["catch"](function (err) {
              return message.channel.send("".concat(err, " has occured!"));
            }));

          case 17:
            invite = _context.sent;
            message.channel.send(invite.url);
            _context.next = 22;
            break;

          case 21:
            return _context.abrupt("return", message.channel.send("`".concat(args.join(' '), "` - Bot is Not in this server")));

          case 22:
            _context.next = 25;
            break;

          case 24:
            return _context.abrupt("return");

          case 25:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};