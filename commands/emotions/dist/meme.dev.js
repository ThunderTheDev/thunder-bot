"use strict";

var _require = require("something-random-on-discord"),
    Random = _require.Random;

var random = new Random();

var Discord = require('discord.js');

setInterval(function _callee(message) {
  var channel, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          channel = message.guild.channels.cache.find(function (channel) {
            return channel.topic === "memes";
          });

          if (channel) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(random.getMeme());

        case 5:
          data = _context.sent;
          channel.send(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}, 3000);