const Discord = require('discord.js');
const Jimp = require('jimp');
module.exports = {
    name: "poohmeme",
    noalias: [''],
    category: "image",
    description: "Sends a poohmeme image",
    usage: "wubmeme <message>",
    accessableby: "everyone",
    run: async (bot, message, args) => {
        if(args[1] === "64") {
            px64(message, args.slice(2));
        } else if (args[1] === "32") {
            let arg = args.slice(2).join(" ").split(" | ");
            if (!arg[1]) return message.channel.send("Usage: `poohmeme [<32>/<64>] <text1> | <text2>`");
            if (arg[0].length > 230 || arg[1].length > 230) return message.channel.send("There's a 230 characters limit.");
            let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
            let meme = await Jimp.read("https://i.redd.it/n3hz1ayrnvp21.jpg");
            meme.resize(1024, 768);

            meme.print(font, 537, 20, {
                text: arg[0],
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
            }, 465, 330);
            meme.print(font, 537, 410, {
                text: arg[1],
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
            }, 465, 330);

            let render = await meme.getBufferAsync(Jimp.MIME_PNG);

            const attachment = new Discord.MessageAttachment(render, "pooh.png");
            await message.channel.send(attachment);
        } else {
            px64(message, args.slice(1));
        }
    },

}

async function px64 (message, args) {
    let arg = args.join(" ").split(" | ");
    if (!arg[1]) return message.channel.send("Usage: `poohmeme [<32>/<64>] <text1> | <text2>`");
    if (arg[0].length > 70 || arg[1].length > 70) return message.channel.send("There's a 70 characters limit. Put `32` before the text to expand the limit to 230.");
    let font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    let meme = await Jimp.read("hhttps://i.redd.it/n3hz1ayrnvp21.jpg");
    meme.resize(1024, 768);

    meme.print(font, 526, 15, {
        text: arg[0],
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 500, 360);
    meme.print(font, 526, 370, {
        text: arg[1],
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 500, 430);

    let render = await meme.getBufferAsync(Jimp.MIME_PNG);

    const attachment = new Discord.MessageAttachment(render, "pooh.png");
    await message.channel.send(attachment);
}