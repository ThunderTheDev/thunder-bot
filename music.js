const Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const db = require("quick.db");
const dotenv = require("dotenv").config();
const { token, default_prefix, ame_api, yt_api } = require("./config.json")
require("./server.js")

const GOOGLE_API_KEY = yt_api;

const bot = new Client({
  disableMentions: "all"
});

const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () => console.log(`${bot.user.tag} music is setup `));
bot.on("shardDisconnect", (event, id) =>
  console.log(
    `Shard ${id} disconnected (${event.code}) ${event}, trying to reconnect!`
  )
);
bot.on("shardReconnecting", id => console.log(`Shard ${id} reconnecting...`));

bot.on("message", async msg => {
  // eslint-disable-line
  let prefix = db.get(`prefix_${msg.guild.id}`)
  if(prefix === null) prefix = default_prefix
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === "cmds" || command == "") {
    const helpembed = new Discord.MessageEmbed()
      .setColor("#7289DA")
      .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
      .setDescription(`
play - Play [title/url] (bot starts playing a little bit late so please dont disconnect the bot)

msearch - Search [title]

stop - Stops music and clears the queue

skip - Skips the music

pause - Pauses music

resume - Resumes music

nowplaying - Tells name of the played song

queue - Shows the queued Songs

volume - Sets volume according to your desire (prefer keeping it 1-3 for best experience)
      `)
      .setFooter("Thunder");
    msg.channel.send(helpembed);
  }
  if (command === "play" || command === "p") {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel)
      return msg.channel.send(
        "**:x: I'm sorry but you need to be in a voice channel to play a music!**"
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        "**:x: Sorry, but I need **`CONNECT`** permissions to proceed!**"
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        "**:x: Sorry, but I need **`SPEAK`** permissions to proceed!**"
      );
    }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(
        `:white_check_mark: **|**  Playlist: **\`${playlist.title}\`** has been added to the queue!`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var video = await youtube.getVideoByID(videos[0].id);
          if (!video)
            return msg.channel.send(
              ":x: **|**  I could not obtain any search results."
            );
        } catch (err) {
          console.error(err);
          return msg.channel.send(
            ":x: **|**  I could not obtain any search results."
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  }
  if (command === "msearch") {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel)
      return msg.channel.send(
        ":x: I'm sorry but you need to be in a voice channel to play a music!"
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        ":x: Sorry, but I need **`CONNECT`** permissions to proceed!"
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        ":x: Sorry, but I need **`SPEAK`** permissions to proceed!"
      );
    }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(
        `:white_check_mark: **|**  Playlist: **\`${playlist.title}\`** has been added to the queue!`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          msg.channel.send(`
__**Song selection**__
${videos.map(video2 => `**\`${++index}\`  |**  ${video2.title}`).join("\n")}
Please provide a value to select one of the search results ranging from 1-10.
					`);
          // eslint-disable-next-line max-depth
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                max: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send(
              ":x: No or invalid value entered, cancelling video selection..."
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(
            ":x: I could not obtain any search results."
          );
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === "skip") {
    if (!msg.member.voice.channel)
      return msg.channel.send(
        ":x: I'm sorry but you need to be in a voice channel to play a music!"
      );
    if (!serverQueue)
      return msg.channel.send(
        ":x: There is nothing playing that I could **`skip`** for you."
      );
    serverQueue.connection.dispatcher.end("Skip command has been used!");
    return msg.channel.send("⏭️  **|**  Skip command has been used!");
  } else if (command === "stop") {
    if (!msg.member.voice.channel)
      return msg.channel.send(
        ":x: I'm sorry but you need to be in a voice channel to play music!"
      );
    if (!serverQueue)
      return msg.channel.send(
        ":x: There is nothing playing that I could **`stop`** for you."
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop command has been used!");
    return msg.channel.send("⏹️  **|**  Stop command has been used!");
  } 
else if (command === "dc" || "disconnect") {

    if (!msg.member.voice.channel)
      return msg.channel.send(
        "**:x: I'm sorry but you need to be in a voice channel to Disconnect bot.**"
      );
    
const voiceChannel = msg.member.voice.channel;
voiceChannel.leave();
 msg.channel.send(":white_check_mark: **Bot Disconnected if any Problem occured it is maybe becuase u were not in the same voice channel as the bot or The bot wasnt in the voice channel**")
      } else if (command === "join") {

  if (!msg.member.voice.channel)
    return msg.channel.send(
      ":x: I'm sorry but you need to be in a voice channel."
    );
  
const voiceChannel = msg.member.voice.channel;
voiceChannel.join();
const permissions = voiceChannel.permissionsFor(msg.client.user);
if (!permissions.has("CONNECT")) {
  return msg.channel.send(
    ":x: Sorry, but I need **`CONNECT`** permissions to proceed!"
  );
}
if (!permissions.has("SPEAK")) {
  return msg.channel.send(
    ":x: Sorry, but I need **`SPEAK`** permissions to proceed!"
  );
}
msg.channel.send(":white_check_mark: Bot Joined The Voice Channel GGs use `play` To Listen Music 24/7 ")
  } else if (command === "volume" || command === "vol") {
    if (!msg.member.voice.channel)
      return msg.channel.send(
        ":x: I'm sorry but you need to be in a voice channel to play music!"
      );
    if (!serverQueue) return msg.channel.send("There is nothing playing.");
    if (!args[1])
      return msg.channel.send(
        `:white_check_mark: The current volume is: **\`${serverQueue.volume}%\`**`
      );
    if (isNaN(args[1]) || args[1] > 100)
      return msg.channel.send(
        ":x: Volume only can be set in range **1** - **100**."
      );
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolume(args[1] / 100);
    return msg.channel.send(`I set the volume to: **\`${args[1]}%\`**`);
  } else if (command === "nowplaying" || command === "np") {
    if (!serverQueue) return msg.channel.send(":x: There is nothing playing.");
    return msg.channel.send(
      `🎶  **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`
    );
  } else if (command === "queue" || command === "q") {
    if (!serverQueue) return msg.channel.send(":x: There is nothing playing.");
    return msg.channel.send(`
__**Song Queue**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}
**Now Playing: \`${serverQueue.songs[0].title}\`**
        `);
  } else if (command === "pause") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("⏸  **|**  Paused the music for you!");
    }
    return msg.channel.send("There is nothing playing.");
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("▶  **|**  Resumed the music for you!");
    }
    return msg.channel.send(":x: There is nothing playing.");
  } else if (command === "loop") {
    if (serverQueue) {
      serverQueue.loop = !serverQueue.loop;
      return msg.channel.send(
        `:repeat: **|** Loop ${
          serverQueue.loop === true ? "enabled" : "disabled"
        }!`
      );
    }
    return msg.channel.send(":x: There is nothing playing.");
  }
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
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

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(
        `:x:  I could not join the voice channel: **\`${error}\`**`
      );
    }
  } else {
    serverQueue.songs.push(song);
    if (playlist) return;
    else
      return msg.channel.send(
        `<:yes:591629527571234819>  **|** **\`${song.title}\`** has been added to the queue!`
      );
  }
  return;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    return queue.delete(guild.id);
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      const shiffed = serverQueue.songs.shift();
      if (serverQueue.loop === true) {
        serverQueue.songs.push(shiffed);
      }
      play(guild, serverQueue.songs[0]);
    })
    .on("mistake", error => console.error(error));
  dispatcher.setVolume(serverQueue.volume / 100);

  serverQueue.textChannel.send({
    embed: {
      color: "RANDOM",
      description: `🎶  **|**  Start Playing: **\`${song.title}\`**`
    }
  });
}

bot.login(token);