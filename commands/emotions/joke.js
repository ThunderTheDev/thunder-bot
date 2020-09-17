const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "joke",
  category: "fun",
  description: "Gives a advice for the Day ",
  usage: "joke",
  run: async (client, message, args) => {
 
let data = await random.getJoke()
message.channel.send(data)

 }}