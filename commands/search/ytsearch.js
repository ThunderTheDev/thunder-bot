const Discord = require("discord.js");
const ytsr = require("ytsr");

module.exports = {
    name: "ytsearch",
    description: "Get the Yt of anywhere",
    category: "special",
    usage: "ytsearch <>",
  run: async (bot, message, args) => {
    try {
      let filter1;
      const filters = await ytsr.getFilters(args.join(" "));
      filter1 = filters.get("Type").find(o => o.name === "Video");
      let options = {
        safeSearch: true,
        limit: 50,
        nextpageRef: filter1.ref
      };
      const searchResults = await ytsr(null, options);

      let i = 0;
      let max = searchResults.items.length - 1;

      const embed = new Discord.MessageEmbed()
        .setTitle(searchResults.items[i].title)
        .setURL(searchResults.items[i].link)
        .setDescription(
          searchResults.items[i].description || "Without description"
        )
        .addField(
          "Channel",
          `[${searchResults.items[i].author.name}](${searchResults.items[i].author.ref})`,
          true
        )
        .addField("Duration", searchResults.items[i].duration, true)
        .addField("Views", searchResults.items[i].views, true)
        .addField("Uploaded at", searchResults.items[i].uploaded_at, true)
        .setFooter(`YouTube search: ${i + 1}/${max + 1}`)
        .setImage(searchResults.items[i].thumbnail)
        .setColor("RED");

      const filter = (reaction, user) => {
        return (
          ["◀️", "▶️", "⏹️"].includes(reaction.emoji.name) &&
          user.id === message.author.id
        );
      };
      let msg = await message.channel.send(embed);
      await msg.react("◀️");
      await msg.react("▶️");
      await msg.react("⏹️");
      message.channel.stopTyping();
      let collector = msg.createReactionCollector(filter, { idle: 20000 });
      collector.on("collect", async (reaction, user) => {
        if (reaction.emoji.name === "▶️") {
          if (
            message.guild &&
            message.channel
              .permissionsFor(message.client.user)
              .has("MANAGE_MESSAGES")
          ) {
            await reaction.users.remove(user.id);
          }
          if (max !== i) {
            i++;
            embed
              .spliceFields(0, 4)
              .setTitle(searchResults.items[i].title)
              .setURL(searchResults.items[i].link)
              .setDescription(
                searchResults.items[i].description || "Without description"
              )
              .addField(
                "Channel",
                `[${searchResults.items[i].author.name}](${searchResults.items[i].author.ref})`,
                true
              )
              .addField("Duration", searchResults.items[i].duration, true)
              .addField("Views", searchResults.items[i].views, true)
              .addField("Uploaded at", searchResults.items[i].uploaded_at, true)
              .setFooter(`YouTube search: ${i + 1}/${max + 1}`)
              .setImage(searchResults.items[i].thumbnail);
            await msg.edit(embed);
          }
        }
        if (reaction.emoji.name === "◀️") {
          if (
            message.guild &&
            message.channel
              .permissionsFor(message.client.user)
              .has("MANAGE_MESSAGES")
          ) {
            await reaction.users.remove(user.id);
          }
          if (i !== 0) {
            i--;
            embed
              .spliceFields(0, 4)
              .setTitle(searchResults.items[i].title)
              .setURL(searchResults.items[i].link)
              .setDescription(
                searchResults.items[i].description || "Without description"
              )
              .addField(
                "Channel",
                `[${searchResults.items[i].author.name}](${searchResults.items[i].author.ref})`,
                true
              )
              .addField("Duration", searchResults.items[i].duration, true)
              .addField("Views", searchResults.items[i].views, true)
              .addField("Uploaded at", searchResults.items[i].uploaded_at, true)
              .setFooter(`YouTube search: ${i + 1}/${max + 1}`)
              .setImage(searchResults.items[i].thumbnail);
            await msg.edit(embed);
          }
        }
        if (reaction.emoji.name === "⏹️") {
          collector.stop();
        }
      });
      collector.on("end", collected => {
        if (
          message.guild &&
          message.channel
            .permissionsFor(message.client.user)
            .has("MANAGE_MESSAGES")
        ) {
          msg.reactions.removeAll();
        }
      });
    } catch (err) {
      message.channel.send("Some error ocurred. Here's a debug: " + err);
    }
  },

  }