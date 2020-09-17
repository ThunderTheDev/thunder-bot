module.exports = {
  name: "say",
  description: "Get the bot to say what ever you want!",
  usage: "<msg>",
  category: "moderation",
  run: async (bot, message, args) => {
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(
        "**You need  __Manage Messages__ Permission to use this command **  "
      );
    } 
    message.channel.send(sayMessage);
  message.delete();  
}
}