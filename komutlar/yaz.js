const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {







    const sayMessage = args.join(" ");


    if(!sayMessage) return message.channel.send(":warning: `Lütfen Yazmamı İstediğinide Yaz!`");

    message.delete().catch(O_o=>{});

    message.channel.send(sayMessage);





}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yaz',
  description: 'yaz',
  usage: 'yaz'
};
