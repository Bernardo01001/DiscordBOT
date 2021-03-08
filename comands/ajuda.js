const config = require('../config.json');
const commands = require('../scripts/comandsReader')(config.prefix);

const descriptions = {
    "!ajuda": "Use esse comando para ver todos os comandos disponiveis",
    "!clear": "Limpa o Chat",
    "!ping": "Retorna o seu Ping"
};

module.exports = async (client, msg) => {
    var texto = "Comandos:";
    Object.keys(commands).forEach(command => {
        texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : ' Não tem descrição'}`
    });
    msg.reply(texto);
};