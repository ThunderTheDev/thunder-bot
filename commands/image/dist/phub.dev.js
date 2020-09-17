"use strict";

var Discord = require('discord.js');

var fetch = require("node-fetch");

module.exports = {
  name: "phub",
  category: "image",
  description: "PornHub Quote",
  run: function run(bot, message, args) {
    var user, text, m, res, json, attachment;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = message.author;
            text = args.slice(0).join(" ");

            if (text) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", message.channel.send("**Enter Text!**"));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(message.channel.send("**Please Wait...**"));

          case 6:
            m = _context.sent;
            _context.prev = 7;
            _context.next = 10;
            return regeneratorRuntime.awrap(fetch(encodeURI("https://nekobot.xyz/api/imagegen?type=phcomment&username=".concat(user.username, "&image=").concat(user.displayAvatarURL({
              format: "png",
              size: 512
            }), "&text=").concat(text))));

          case 10:
            res = _context.sent;
            _context.next = 13;
            return regeneratorRuntime.awrap(res.json());

          case 13:
            json = _context.sent;
            attachment = new Discord.MessageAttachment(json.message, "phcomment.png");
            message.channel.send(attachment);
            m["delete"]({
              timeout: 5000
            });
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](7);
            m.edit("Error, Try Again! ");

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[7, 19]]);
  }
};