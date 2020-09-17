"use strict";

var _require = require("canvas-senpai"),
    CanvasSenpai = _require.CanvasSenpai;

var canva = new CanvasSenpai();

var db = require('quick.db');

var discord = require('discord.js');

var _require2 = require("../../handlers/xp.js"),
    getInfo = _require2.getInfo;

module.exports = {
  name: "level",
  description: "Get the level of author or mentioned",
  usage: "level <user>",
  category: "special",
  run: function run(client, message, args) {
    var user = message.mentions.users.first() || message.author;

    if (user.id === client.user.id) {
      //IF BOT
      return message.channel.send("**<a:blast:728919668932477021> | I am on level 100**");
    }

    if (user.bot) {
      return message.channel.send("Bot do not have levels");
    }

    var xp = db.get("xp_".concat(user.id, "_").concat(message.guild.id)) || 0;
    if (xp === 0) return message.channel.send("**".concat(user.tag, "** is out of the xp"));
    var embed = new discord.MessageEmbed().setAuthor(user.username, message.guild.iconURL()).setColor("#ff2050").setThumbnail(user.avatarURL()).setDescription("**LEVEL** - ".concat(level, "\n**XP** - ").concat(remxp, "/").concat(levelxp));
    message.channel.send(embed);
  }
};