const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sil;').setDescription(message.author.tag + ', bu komutu kullanmak için gerekli izinlere sahip değilsin.').setFooter('Hyper Project', client.user.avatarURL).setTimestamp());
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('Hyper Project', client.user.avatarURL).setTimestamp()); }
    let guild = message.guild
    let mesajsayisi = parseInt(args.join(' '));
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sil;').setDescription(message.author.tag + ', kullanım: !sil <sayı>.').setFooter('Hyper Project', client.user.avatarURL).setTimestamp());
    if (mesajsayisi > 100) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sil;').setDescription(message.author.tag + ', 100 adetden fazla mesaj silemem.').setFooter('Hyper Project', client.user.avatarURL).setTimestamp());
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesaj +" adet mesaj sildim. Sildiren : `"+message.author.username+'#'+message.author.discriminator +'`')
  message.channel.bulkDelete(2);
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Sil komutum kullanıldı;')
  .setDescription(`**${message.author.username}** adlı kullanıcı sil komutunu kullandı.\n[**${message.guild.name}** sunucusunda]!\n[**${message.channel.name}** kanalında]`)
  .setFooter('Hyper Project', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('533259270372851713').send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 4
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: '!sil <temizlenecek mesaj sayısı>'
};
