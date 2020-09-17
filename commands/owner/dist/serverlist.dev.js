"use strict";

var Discord = require("discord.js");

var ownerid = "724300617656303687";
module.exports = {
  name: "serverlist",
  category: "owner",
  usage: "servers",
  description: "servers of the bot!",
  run: function run(client, message, args) {
    var i0, i1, page, description, embed, msg, collector;
    return regeneratorRuntime.async(function run$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(message.author.id == ownerid)) {
              _context2.next = 21;
              break;
            }

            if (message.guild.me.hasPermission("ADMINISTRATOR")) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", message.channel.send("I Dont Have Permissions").then(function (msg) {
              return msg["delete"]({
                timeout: 5000
              });
            }));

          case 3:
            i0 = 0;
            i1 = 10;
            page = 1;
            description = "Total Servers - ".concat(bot.guilds.cache.size, "\n\n") + bot.guilds.cache.sort(function (a, b) {
              return b.memberCount - a.memberCount;
            }).map(function (r) {
              return r;
            }).map(function (r, i) {
              return "**".concat(i + 1, "** - ").concat(r.name, " | ").concat(r.memberCount, " Members\nID - ").concat(r.id);
            }).slice(0, 10).join("\n");
            embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL({
              dynamic: true
            })).setColor("GREEN").setFooter(bot.user.username).setTitle("Page - ".concat(page, "/").concat(Math.ceil(bot.guilds.cache.size / 10))).setDescription(description);
            _context2.next = 10;
            return regeneratorRuntime.awrap(message.channel.send(embed));

          case 10:
            msg = _context2.sent;
            _context2.next = 13;
            return regeneratorRuntime.awrap(msg.react("⬅"));

          case 13:
            _context2.next = 15;
            return regeneratorRuntime.awrap(msg.react("➡"));

          case 15:
            _context2.next = 17;
            return regeneratorRuntime.awrap(msg.react("❌"));

          case 17:
            collector = msg.createReactionCollector(function (reaction, user) {
              return user.id === message.author.id;
            });
            collector.on("collect", function _callee(reaction, user) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(reaction._emoji.name === "⬅")) {
                        _context.next = 12;
                        break;
                      }

                      // Updates variables
                      i0 = i0 - 10;
                      i1 = i1 - 10;
                      page = page - 1; // if there is no guild to display, delete the message

                      if (!(i0 + 1 < 0)) {
                        _context.next = 7;
                        break;
                      }

                      console.log(i0);
                      return _context.abrupt("return", msg["delete"]());

                    case 7:
                      if (!(!i0 || !i1)) {
                        _context.next = 9;
                        break;
                      }

                      return _context.abrupt("return", msg["delete"]());

                    case 9:
                      description = "Total Servers - ".concat(bot.guilds.cache.size, "\n\n") + bot.guilds.cache.sort(function (a, b) {
                        return b.memberCount - a.memberCount;
                      }).map(function (r) {
                        return r;
                      }).map(function (r, i) {
                        return "**".concat(i + 1, "** - ").concat(r.name, " | ").concat(r.memberCount, " Members");
                      }).slice(i0, i1).join("\n"); // Update the embed with new informations

                      embed.setTitle("Page - ".concat(page, "/").concat(Math.round(bot.guilds.cache.size / 10 + 1))).setDescription(description); // Edit the message

                      msg.edit(embed);

                    case 12:
                      if (!(reaction._emoji.name === "➡")) {
                        _context.next = 23;
                        break;
                      }

                      // Updates variables
                      i0 = i0 + 10;
                      i1 = i1 + 10;
                      page = page + 1; // if there is no guild to display, delete the message

                      if (!(i1 > bot.guilds.cache.size + 10)) {
                        _context.next = 18;
                        break;
                      }

                      return _context.abrupt("return", msg["delete"]());

                    case 18:
                      if (!(!i0 || !i1)) {
                        _context.next = 20;
                        break;
                      }

                      return _context.abrupt("return", msg["delete"]());

                    case 20:
                      description = "Total Servers - ".concat(bot.guilds.cache.size, "\n\n") + bot.guilds.cache.sort(function (a, b) {
                        return b.memberCount - a.memberCount;
                      }).map(function (r) {
                        return r;
                      }).map(function (r, i) {
                        return "**".concat(i + 1, "** - ").concat(r.name, " | ").concat(r.memberCount, " Members");
                      }).slice(i0, i1).join("\n"); // Update the embed with new informations

                      embed.setTitle("Page - ".concat(page, "/").concat(Math.round(bot.guilds.cache.size / 10 + 1))).setDescription(description); // Edit the message

                      msg.edit(embed);

                    case 23:
                      if (!(reaction._emoji.name === "❌")) {
                        _context.next = 25;
                        break;
                      }

                      return _context.abrupt("return", msg["delete"]());

                    case 25:
                      _context.next = 27;
                      return regeneratorRuntime.awrap(reaction.users.remove(message.author.id));

                    case 27:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            });
            _context2.next = 22;
            break;

          case 21:
            return _context2.abrupt("return");

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};