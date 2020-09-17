"use strict";

//Rewrite
var Discord = require("discord.js");

module.exports = {
  name: "eval",
  aliases: ["el"],
  category: "owner",
  run: function run(client, message, args) {
    var evaluated, arr, _arr;

    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(message.author.id !== "554185890453389322")) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", message.reply("I m sorry but this is a owner only command"));

          case 2:
            if (args[1]) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", message.channel.send("Put something to evaluate."));

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap(eval(args.slice(1).join(" ")));

          case 7:
            evaluated = _context.sent;
            if (typeof evaluated !== "string") evaluated = require("util").inspect(evaluated, {
              depth: 0
            });
            arr = Discord.Util.splitMessage(evaluated, {
              maxLength: 1950
            });
            message.channel.send(arr[0], {
              code: "js"
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](4);
            _arr = Discord.Util.splitMessage(_context.t0.toString(), {
              maxLength: 1950
            });
            message.channel.send("```js\n" + _arr[0] + "```");

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 13]]);
  }
};