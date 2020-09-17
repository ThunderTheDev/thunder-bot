"use strict";

var Discord = require("discord.js");

var ytsr = require("ytsr");

module.exports = {
  name: "ytsearch",
  description: "Get the Yt of anywhere",
  category: "special",
  usage: "ytsearch <>",
  run: function run(bot, message, args) {
    var filter1, filters, options, searchResults, i, max, embed, filter, msg, collector;
    return regeneratorRuntime.async(function run$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(ytsr.getFilters(args.join(" ")));

          case 3:
            filters = _context2.sent;
            filter1 = filters.get("Type").find(function (o) {
              return o.name === "Video";
            });
            options = {
              safeSearch: true,
              limit: 50,
              nextpageRef: filter1.ref
            };
            _context2.next = 8;
            return regeneratorRuntime.awrap(ytsr(null, options));

          case 8:
            searchResults = _context2.sent;
            i = 0;
            max = searchResults.items.length - 1;
            embed = new Discord.MessageEmbed().setTitle(searchResults.items[i].title).setURL(searchResults.items[i].link).setDescription(searchResults.items[i].description || "Without description").addField("Channel", "[".concat(searchResults.items[i].author.name, "](").concat(searchResults.items[i].author.ref, ")"), true).addField("Duration", searchResults.items[i].duration, true).addField("Views", searchResults.items[i].views, true).addField("Uploaded at", searchResults.items[i].uploaded_at, true).setFooter("YouTube search: ".concat(i + 1, "/").concat(max + 1)).setImage(searchResults.items[i].thumbnail).setColor("RED");

            filter = function filter(reaction, user) {
              return ["◀️", "▶️", "⏹️"].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            _context2.next = 15;
            return regeneratorRuntime.awrap(message.channel.send(embed));

          case 15:
            msg = _context2.sent;
            _context2.next = 18;
            return regeneratorRuntime.awrap(msg.react("◀️"));

          case 18:
            _context2.next = 20;
            return regeneratorRuntime.awrap(msg.react("▶️"));

          case 20:
            _context2.next = 22;
            return regeneratorRuntime.awrap(msg.react("⏹️"));

          case 22:
            message.channel.stopTyping();
            collector = msg.createReactionCollector(filter, {
              idle: 20000
            });
            collector.on("collect", function _callee(reaction, user) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(reaction.emoji.name === "▶️")) {
                        _context.next = 9;
                        break;
                      }

                      if (!(message.guild && message.channel.permissionsFor(message.client.user).has("MANAGE_MESSAGES"))) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 4;
                      return regeneratorRuntime.awrap(reaction.users.remove(user.id));

                    case 4:
                      if (!(max !== i)) {
                        _context.next = 9;
                        break;
                      }

                      i++;
                      embed.spliceFields(0, 4).setTitle(searchResults.items[i].title).setURL(searchResults.items[i].link).setDescription(searchResults.items[i].description || "Without description").addField("Channel", "[".concat(searchResults.items[i].author.name, "](").concat(searchResults.items[i].author.ref, ")"), true).addField("Duration", searchResults.items[i].duration, true).addField("Views", searchResults.items[i].views, true).addField("Uploaded at", searchResults.items[i].uploaded_at, true).setFooter("YouTube search: ".concat(i + 1, "/").concat(max + 1)).setImage(searchResults.items[i].thumbnail);
                      _context.next = 9;
                      return regeneratorRuntime.awrap(msg.edit(embed));

                    case 9:
                      if (!(reaction.emoji.name === "◀️")) {
                        _context.next = 18;
                        break;
                      }

                      if (!(message.guild && message.channel.permissionsFor(message.client.user).has("MANAGE_MESSAGES"))) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 13;
                      return regeneratorRuntime.awrap(reaction.users.remove(user.id));

                    case 13:
                      if (!(i !== 0)) {
                        _context.next = 18;
                        break;
                      }

                      i--;
                      embed.spliceFields(0, 4).setTitle(searchResults.items[i].title).setURL(searchResults.items[i].link).setDescription(searchResults.items[i].description || "Without description").addField("Channel", "[".concat(searchResults.items[i].author.name, "](").concat(searchResults.items[i].author.ref, ")"), true).addField("Duration", searchResults.items[i].duration, true).addField("Views", searchResults.items[i].views, true).addField("Uploaded at", searchResults.items[i].uploaded_at, true).setFooter("YouTube search: ".concat(i + 1, "/").concat(max + 1)).setImage(searchResults.items[i].thumbnail);
                      _context.next = 18;
                      return regeneratorRuntime.awrap(msg.edit(embed));

                    case 18:
                      if (reaction.emoji.name === "⏹️") {
                        collector.stop();
                      }

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            });
            collector.on("end", function (collected) {
              if (message.guild && message.channel.permissionsFor(message.client.user).has("MANAGE_MESSAGES")) {
                msg.reactions.removeAll();
              }
            });
            _context2.next = 31;
            break;

          case 28:
            _context2.prev = 28;
            _context2.t0 = _context2["catch"](0);
            message.channel.send("Some error ocurred. Here's a debug: " + _context2.t0);

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 28]]);
  }
};