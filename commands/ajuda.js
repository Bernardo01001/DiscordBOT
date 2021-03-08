const config = require('../config.json');
const commands = require('../scripts/commandsReader')(config.prefix);

const descriptions = {
    "!ajuda": "Use esse comando para ver todos os comandos disponiveis",
    "!clear": "Limpa o Chat",
    "!ping": "Retorna o seu Ping",
    "!roadmap": "Passa um roadmap sobre programacao"
};

module.exports = async (client, msg) => {
    var texto = "Comandos:";
    Object.keys(commands).forEach(command => {
        texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : ' Não tem descrição'}`
    });
    msg.reply(texto);
};