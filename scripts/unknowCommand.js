module.exports = async (client, msg) => {
    var message = msg.content.split(" ");
    message = message[0];

    msg.reply(`😓 Comando '${message}' não existe \n Digite o comando !ajuda para obter a lista de comandos`);
}