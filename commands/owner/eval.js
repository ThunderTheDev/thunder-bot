//Rewrite
const Discord = require("discord.js");

module.exports = {
  name: "eval",
  aliases: ["el"],
  category: "owner",
  run: async (client, message, args) => {
    if (message.author.id !== "554185890453389322") return message.reply("I m sorry but this is a owner only command")
    if (!args[1]) return message.channel.send("Put something to evaluate.");
    try {
      let evaluated = await eval(args.slice(1).join(" "));
      if (typeof evaluated !== "string") evaluated = require("util").inspect(evaluated, { depth: 0 });
      const arr = Discord.Util.splitMessage(evaluated, { maxLength: 1950 });
      message.channel.send(arr[0], { code: "js" });
    } catch (err) {
      const arr = Discord.Util.splitMessage(err.toString(), { maxLength: 1950 });
      message.channel.send("```js\n" + arr[0] + "```");
    }
  },
};