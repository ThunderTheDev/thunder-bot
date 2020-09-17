"use strict";

var Discord = require("discord.js");

var _require = require("discord.js"),
    Client = _require.Client,
    Util = _require.Util;

var YouTube = require("simple-youtube-api");

var ytdl = require("ytdl-core");

var dotenv = require("dotenv").config();

var _require2 = require("./config.json"),
    yt_api = _require2.yt_api;

var bot = new Client({
  disableMentions: "all"
});
var youtube = new YouTube(GOOGLE_API_KEY);
var queue = new Map();
bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", function () {
  return console.log("".concat(bot.user.tag, " music is setup "));
});
bot.on("shardDisconnect", function (event, id) {
  return console.log("Shard ".concat(id, " disconnected (").concat(event.code, ") ").concat(event, ", trying to reconnect!"));
});
bot.on("shardReconnecting", function (id) {
  return console.log("Shard ".concat(id, " reconnecting..."));
});
bot.on("message", function _callee(msg) {
  var args, searchString, url, serverQueue, command, helpembed, voiceChannel, permissions, playlist, _videos, _i, _Object$values, _video, video2, video, videos, _voiceChannel, _permissions, _playlist, _videos2, _i2, _Object$values2, _video2, _video3, index, response, videoIndex;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!msg.author.bot) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          if (msg.content.startsWith(PREFIX)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return");

        case 4:
          args = msg.content.split(" ");
          searchString = args.slice(1).join(" ");
          url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
          serverQueue = queue.get(msg.guild.id);
          command = msg.content.toLowerCase().split(" ")[0];
          command = command.slice(PREFIX.length);

          if (command === "" || command == "") {
            helpembed = new Discord.MessageEmbed().setColor("#7289DA").setAuthor(bot.user.tag, bot.user.displayAvatarURL()).setDescription("\n__**Commands List**__\n> `play` > **`play [title/url]`**\n> `search` > **`search [title]`**\n> `skip`, `stop`,  `pause`, `resume`\n> `nowplaying`, `queue`, `volume`").setFooter("SMOKIE ");
            msg.channel.send(helpembed);
          }

          if (!(command === "play" || command === "p")) {
            _context.next = 65;
            break;
          }

          voiceChannel = msg.member.voice.channel;

          if (voiceChannel) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>I'm sorry but you need to be in a voice channel to play a music!"));

        case 15:
          permissions = voiceChannel.permissionsFor(msg.client.user);

          if (permissions.has("CONNECT")) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>Sorry, but I need **`CONNECT`** permissions to proceed!"));

        case 18:
          if (permissions.has("SPEAK")) {
            _context.next = 20;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>Sorry, but I need **`SPEAK`** permissions to proceed!"));

        case 20:
          if (!url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            _context.next = 41;
            break;
          }

          _context.next = 23;
          return regeneratorRuntime.awrap(youtube.getPlaylist(url));

        case 23:
          playlist = _context.sent;
          _context.next = 26;
          return regeneratorRuntime.awrap(playlist.getVideos());

        case 26:
          _videos = _context.sent;
          _i = 0, _Object$values = Object.values(_videos);

        case 28:
          if (!(_i < _Object$values.length)) {
            _context.next = 38;
            break;
          }

          _video = _Object$values[_i];
          _context.next = 32;
          return regeneratorRuntime.awrap(youtube.getVideoByID(_video.id));

        case 32:
          video2 = _context.sent;
          _context.next = 35;
          return regeneratorRuntime.awrap(handleVideo(video2, msg, voiceChannel, true));

        case 35:
          _i++;
          _context.next = 28;
          break;

        case 38:
          return _context.abrupt("return", msg.channel.send("<a:ztick1:740498303375900733>  **|**  Playlist: **`".concat(playlist.title, "`** has been added to the queue!")));

        case 41:
          _context.prev = 41;
          _context.next = 44;
          return regeneratorRuntime.awrap(youtube.getVideo(url));

        case 44:
          video = _context.sent;
          _context.next = 64;
          break;

        case 47:
          _context.prev = 47;
          _context.t0 = _context["catch"](41);
          _context.prev = 49;
          _context.next = 52;
          return regeneratorRuntime.awrap(youtube.searchVideos(searchString, 10));

        case 52:
          videos = _context.sent;
          _context.next = 55;
          return regeneratorRuntime.awrap(youtube.getVideoByID(videos[0].id));

        case 55:
          video = _context.sent;

          if (video) {
            _context.next = 58;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918> **|**  I could not obtain any search results."));

        case 58:
          _context.next = 64;
          break;

        case 60:
          _context.prev = 60;
          _context.t1 = _context["catch"](49);
          console.error(_context.t1);
          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918> **|**  I could not obtain any search results."));

        case 64:
          return _context.abrupt("return", handleVideo(video, msg, voiceChannel));

        case 65:
          if (!(command === "search" || command === "sc")) {
            _context.next = 132;
            break;
          }

          _voiceChannel = msg.member.voice.channel;

          if (_voiceChannel) {
            _context.next = 69;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>I'm sorry but you need to be in a voice channel to play a music!"));

        case 69:
          _permissions = _voiceChannel.permissionsFor(msg.client.user);

          if (_permissions.has("CONNECT")) {
            _context.next = 72;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>Sorry, but I need **`CONNECT`** permissions to proceed!"));

        case 72:
          if (_permissions.has("SPEAK")) {
            _context.next = 74;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>Sorry, but I need **`SPEAK`** permissions to proceed!"));

        case 74:
          if (!url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            _context.next = 95;
            break;
          }

          _context.next = 77;
          return regeneratorRuntime.awrap(youtube.getPlaylist(url));

        case 77:
          _playlist = _context.sent;
          _context.next = 80;
          return regeneratorRuntime.awrap(_playlist.getVideos());

        case 80:
          _videos2 = _context.sent;
          _i2 = 0, _Object$values2 = Object.values(_videos2);

        case 82:
          if (!(_i2 < _Object$values2.length)) {
            _context.next = 92;
            break;
          }

          _video2 = _Object$values2[_i2];
          _context.next = 86;
          return regeneratorRuntime.awrap(youtube.getVideoByID(_video2.id));

        case 86:
          _video3 = _context.sent;
          _context.next = 89;
          return regeneratorRuntime.awrap(handleVideo(_video3, msg, _voiceChannel, true));

        case 89:
          _i2++;
          _context.next = 82;
          break;

        case 92:
          return _context.abrupt("return", msg.channel.send("<:yes:591629527571234819>  **|**  Playlist: **`".concat(_playlist.title, "`** has been added to the queue!")));

        case 95:
          _context.prev = 95;
          _context.next = 98;
          return regeneratorRuntime.awrap(youtube.getVideo(url));

        case 98:
          video = _context.sent;
          _context.next = 129;
          break;

        case 101:
          _context.prev = 101;
          _context.t2 = _context["catch"](95);
          _context.prev = 103;
          _context.next = 106;
          return regeneratorRuntime.awrap(youtube.searchVideos(searchString, 10));

        case 106:
          videos = _context.sent;
          index = 0;
          msg.channel.send("\n__**Song selection**__\n".concat(videos.map(function (video2) {
            return "**`".concat(++index, "`  |**  ").concat(video2.title);
          }).join("\n"), "\nPlease provide a value to select one of the search results ranging from 1-10.\n\t\t\t\t\t")); // eslint-disable-next-line max-depth

          _context.prev = 109;
          _context.next = 112;
          return regeneratorRuntime.awrap(msg.channel.awaitMessages(function (msg2) {
            return msg2.content > 0 && msg2.content < 11;
          }, {
            max: 1,
            time: 10000,
            errors: ["time"]
          }));

        case 112:
          response = _context.sent;
          _context.next = 119;
          break;

        case 115:
          _context.prev = 115;
          _context.t3 = _context["catch"](109);
          console.error(_context.t3);
          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>No or invalid value entered, cancelling video selection..."));

        case 119:
          videoIndex = parseInt(response.first().content);
          _context.next = 122;
          return regeneratorRuntime.awrap(youtube.getVideoByID(videos[videoIndex - 1].id));

        case 122:
          video = _context.sent;
          _context.next = 129;
          break;

        case 125:
          _context.prev = 125;
          _context.t4 = _context["catch"](103);
          console.error(_context.t4);
          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>I could not obtain any search results."));

        case 129:
          return _context.abrupt("return", handleVideo(video, msg, _voiceChannel));

        case 130:
          _context.next = 198;
          break;

        case 132:
          if (!(command === "skip")) {
            _context.next = 141;
            break;
          }

          if (msg.member.voice.channel) {
            _context.next = 135;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>I'm sorry but you need to be in a voice channel to play a music!"));

        case 135:
          if (serverQueue) {
            _context.next = 137;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>There is nothing playing that I could **`skip`** for you."));

        case 137:
          serverQueue.connection.dispatcher.end("Skip command has been used!");
          return _context.abrupt("return", msg.channel.send("⏭️  **|**  Skip command has been used!"));

        case 141:
          if (!(command === "stop")) {
            _context.next = 151;
            break;
          }

          if (msg.member.voice.channel) {
            _context.next = 144;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>I'm sorry but you need to be in a voice channel to play music!"));

        case 144:
          if (serverQueue) {
            _context.next = 146;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>There is nothing playing that I could **`stop`** for you."));

        case 146:
          serverQueue.songs = [];
          serverQueue.connection.dispatcher.end("Stop command has been used!");
          return _context.abrupt("return", msg.channel.send("⏹️  **|**  Stop command has been used!"));

        case 151:
          if (!(command === "volume" || command === "vol")) {
            _context.next = 165;
            break;
          }

          if (msg.member.voice.channel) {
            _context.next = 154;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>I'm sorry but you need to be in a voice channel to play music!"));

        case 154:
          if (serverQueue) {
            _context.next = 156;
            break;
          }

          return _context.abrupt("return", msg.channel.send("There is nothing playing."));

        case 156:
          if (args[1]) {
            _context.next = 158;
            break;
          }

          return _context.abrupt("return", msg.channel.send("The current volume is: **`".concat(serverQueue.volume, "%`**")));

        case 158:
          if (!(isNaN(args[1]) || args[1] > 100)) {
            _context.next = 160;
            break;
          }

          return _context.abrupt("return", msg.channel.send("<a:crossWrong:745223272265678918>Volume only can be set in range **1** - **100**."));

        case 160:
          serverQueue.volume = args[1];
          serverQueue.connection.dispatcher.setVolume(args[1] / 100);
          return _context.abrupt("return", msg.channel.send("I set the volume to: **`".concat(args[1], "%`**")));

        case 165:
          if (!(command === "nowplaying" || command === "np")) {
            _context.next = 171;
            break;
          }

          if (serverQueue) {
            _context.next = 168;
            break;
          }

          return _context.abrupt("return", msg.channel.send("There is nothing playing."));

        case 168:
          return _context.abrupt("return", msg.channel.send("\uD83C\uDFB6  **|**  Now Playing: **`".concat(serverQueue.songs[0].title, "`**")));

        case 171:
          if (!(command === "queue" || command === "q")) {
            _context.next = 177;
            break;
          }

          if (serverQueue) {
            _context.next = 174;
            break;
          }

          return _context.abrupt("return", msg.channel.send("There is nothing playing."));

        case 174:
          return _context.abrupt("return", msg.channel.send("\n__**Song Queue**__\n".concat(serverQueue.songs.map(function (song) {
            return "**-** ".concat(song.title);
          }).join("\n"), "\n**Now Playing: `").concat(serverQueue.songs[0].title, "`**\n        ")));

        case 177:
          if (!(command === "pause")) {
            _context.next = 185;
            break;
          }

          if (!(serverQueue && serverQueue.playing)) {
            _context.next = 182;
            break;
          }

          serverQueue.playing = false;
          serverQueue.connection.dispatcher.pause();
          return _context.abrupt("return", msg.channel.send("⏸  **|**  Paused the music for you!"));

        case 182:
          return _context.abrupt("return", msg.channel.send("There is nothing playing."));

        case 185:
          if (!(command === "resume")) {
            _context.next = 193;
            break;
          }

          if (!(serverQueue && !serverQueue.playing)) {
            _context.next = 190;
            break;
          }

          serverQueue.playing = true;
          serverQueue.connection.dispatcher.resume();
          return _context.abrupt("return", msg.channel.send("▶  **|**  Resumed the music for you!"));

        case 190:
          return _context.abrupt("return", msg.channel.send("There is nothing playing."));

        case 193:
          if (!(command === "loop")) {
            _context.next = 198;
            break;
          }

          if (!serverQueue) {
            _context.next = 197;
            break;
          }

          serverQueue.loop = !serverQueue.loop;
          return _context.abrupt("return", msg.channel.send(":repeat: **|** Loop ".concat(serverQueue.loop === true ? "enabled" : "disabled", "!")));

        case 197:
          return _context.abrupt("return", msg.channel.send("There is nothing playing."));

        case 198:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[41, 47], [49, 60], [95, 101], [103, 125], [109, 115]]);
});

function handleVideo(video, msg, voiceChannel) {
  var playlist,
      serverQueue,
      song,
      queueConstruct,
      connection,
      _args2 = arguments;
  return regeneratorRuntime.async(function handleVideo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          playlist = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : false;
          serverQueue = queue.get(msg.guild.id);
          song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: "https://www.youtube.com/watch?v=".concat(video.id)
          };

          if (serverQueue) {
            _context2.next = 22;
            break;
          }

          queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 100,
            playing: true,
            loop: false
          };
          queue.set(msg.guild.id, queueConstruct);
          queueConstruct.songs.push(song);
          _context2.prev = 7;
          _context2.next = 10;
          return regeneratorRuntime.awrap(voiceChannel.join());

        case 10:
          connection = _context2.sent;
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
          _context2.next = 20;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](7);
          console.error("I could not join the voice channel: ".concat(_context2.t0));
          queue["delete"](msg.guild.id);
          return _context2.abrupt("return", msg.channel.send("I could not join the voice channel: **`".concat(_context2.t0, "`**")));

        case 20:
          _context2.next = 28;
          break;

        case 22:
          serverQueue.songs.push(song);

          if (!playlist) {
            _context2.next = 27;
            break;
          }

          return _context2.abrupt("return");

        case 27:
          return _context2.abrupt("return", msg.channel.send("<:yes:591629527571234819>  **|** **`".concat(song.title, "`** has been added to the queue!")));

        case 28:
          return _context2.abrupt("return");

        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 15]]);
}

function play(guild, song) {
  var serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    return queue["delete"](guild.id);
  }

  var dispatcher = serverQueue.connection.play(ytdl(song.url)).on("finish", function () {
    var shiffed = serverQueue.songs.shift();

    if (serverQueue.loop === true) {
      serverQueue.songs.push(shiffed);
    }

    play(guild, serverQueue.songs[0]);
  }).on("mistake", function (error) {
    return console.error(error);
  });
  dispatcher.setVolume(serverQueue.volume / 100);
  serverQueue.textChannel.send({
    embed: {
      color: "RANDOM",
      description: "\uD83C\uDFB6  **|**  Start Playing: **`".concat(song.title, "`**")
    }
  });
}

bot.login(token);