"use strict";

var Canvas = require("canvas");

var Discord = require("discord.js");

module.exports = {
  name: "quote",
  noalias: [''],
  category: "image",
  description: "Sends a Text Image",
  usage: "[username | nickname | mention | ID] (optional)",
  accessableby: "everyone",
  run: function run(bot, message, args) {
    var miembro, mensaje, canvas, ctx, x, y, radius, url, image, largo, w, attach;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            miembro = message.mentions.members.first();

            if (miembro) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", message.channel.send("Mention someone"));

          case 3:
            mensaje = args.slice(1).join(" ");

            if (mensaje) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", message.channel.send("Put some message"));

          case 6:
            canvas = Canvas.createCanvas(600, 69);
            ctx = canvas.getContext('2d');
            ctx.fillStyle = "#36393f";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            x = 11, y = 13, radius = 20;
            ctx.save();
            ctx.beginPath();
            ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            url = miembro.user.displayAvatarURL({
              format: 'png',
              dynamic: false,
              size: 1024
            });
            _context.next = 19;
            return regeneratorRuntime.awrap(Canvas.loadImage(url));

          case 19:
            image = _context.sent;
            ctx.drawImage(image, x, y, radius * 2, radius * 2);
            ctx.restore();
            ctx.lineWidth = .3;
            ctx.font = "14px Sans Serif";
            ctx.fillStyle = miembro.displayHexColor || '#000';
            ctx.strokeStyle = miembro.displayHexColor || '#000';
            ctx.strokeText(miembro.nickname || miembro.user.username, 66, 27);
            ctx.fillText(miembro.nickname || miembro.user.username, 66, 27);
            largo = ctx.measureText(miembro.nickname || miembro.user.username).width;
            ctx.font = "11.2px Sans Serif";
            ctx.fillStyle = "#72767d";
            ctx.lineWidth = .1;
            ctx.font = "14.5px Whitney";
            ctx.fillStyle = "#dcddde";
            ctx.strokeStyle = "#dcddde";
            w = ctx.measureText(mensaje).width - Math.floor(ctx.measureText(mensaje).width * .08);
            ctx.strokeText(mensaje, 66, 50, w);
            ctx.fillText(mensaje, 66, 50, w);
            attach = new Discord.MessageAttachment(canvas.toBuffer(), 'isay.png');
            message.channel.send(attach);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};