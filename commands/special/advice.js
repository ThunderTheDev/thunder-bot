const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "advice",
  category: "special",
  description: "Gives a advice for the Day ",
  usage: "advice",
  run: async (client, message, args) => {
 
let data = await random.getAdvice()
message.channel.send(data)

 }}