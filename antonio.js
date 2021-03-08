const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const commands = require('./scripts/comandsReader')(config.prefix);

const unknowCommand = require('./scripts/unknowCommand');

const permissions = config.permissions;

//Bot pronto
client.on('ready', () => {
    console.log('logado com o bot' + client.user.tag);
});

//le os comandos
client.on('message', (msg) => {

    if(!msg.author.bot && msg.guild){
        if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);

        const args = msg.content.split(" ");
        if(commands[args[0]]) {
            if(verificarPermisao(msg.member, args[0])) {
                commands[args[0]](client,msg); 
            } else msg.reply('Voce nao tem permisao para executar esse comando');
        } else if(args[0].split("")[0] == config.prefix) unknowCommand(client,msg);
    }

});

//Membro adicionado no server
client.on('guildMemberAdd', (member) => {
    const boasVindas = member.guild.channels.cache.get(config.boasVindasChannelId);
    boasVindas.send(`${member.user} acabou de entrar em nosso servidor 🥳`);
});

//Membro removido no server
client.on('guildMemberRemove', (member) => {
    const boasVindas = member.guild.channels.cache.get(config.boasVindasChannelId);
    boasVindas.send(`${member.user} saiu do server 😥`);
});

//Verificacao de Permissao
function verificarPermisao(member, command) {
    let verification = !permissions[command];

    if(!verification) {
        const perms = permissions[command];
        perms.forEach(p => {
            switch(p.type) {
                case "permission":
                    if(member.permissions.has(p.value)) verification = true;
                break;
            }
        })
    }

    return verification;
}

client.login(config.token);