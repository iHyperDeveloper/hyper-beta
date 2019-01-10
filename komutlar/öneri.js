
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: UYARI ! :warning:', '`Hatabildir` Adlı Komutu Dm Den Kulanamazsın Bilgine.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setDescription(''));
    const tavsiye1 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(':open_file_folder: Öneri Başarıyla Gönderildi !\n:page_facing_up: Öneri İletildi Teşekürler.')
      message.delete();
    message.channel.send(tavsiye1);
  const tavsiye = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setDescription(':newspaper2: **' + message.author.tag + '** adlı kullanıcının Önerisi;')
    .addField(':envelope: Gönderen Kişinin Bilgileri', '• Kullanıcı ID: ' + message.author.id + '\n• Kullanıcı Adı: ' + message.author.username + '\n• Kullanıcı Tag: ' + message.author.discriminator + '')
    .addField(':pencil: Gönderilen Öneri', mesaj)
  return client.channels.get("499297634583052289").send(tavsiye);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri"],
  permLevel: 0
};

exports.help = {
  name: 'öner',
  description: 'Yapımcıya tavsiye yollarsınız.',
  usage: 'öner <öneriniz>'
};
