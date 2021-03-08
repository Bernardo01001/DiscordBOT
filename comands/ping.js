module.exports = async (client, msg) => {
    msg.reply('🏓 Pong! Seu ping é: `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
}