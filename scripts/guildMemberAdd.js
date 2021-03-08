const Dicord = require('discord.js');
const config = require('../config.json');

module.exports = async (client, member) => {
    const embed = new Dicord.MessageEmbed()
        .setTitle(`😎${member.user.username} acabou de entrar em nosso servidor :P yey`)
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setImage(member.user.avatarURL())
        .setColor('#ffv800')
        .setDescription('Leia as <#818450775121461249> antes de postar!')
        .setTimestamp(new Date())

    member.guild.channels.cache.get(config.boasVindasChannelId).send({embed});
}