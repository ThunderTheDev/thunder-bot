"use strict";

module.exports = {
  name: "restart",
  category: "owner",
  run: function run(client, message, args) {
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(message.channel.send("Restarting bot..."));

          case 2:
            process.exit();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};