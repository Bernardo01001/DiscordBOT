//esse arquivo le os comandos e disponibiliza ao arquivo principal
const fs = require('fs');
const dir = './commands/';

module.exports = (prefix) => {
    let commands = {};

    const scripts = fs.readdirSync(dir);
    scripts.forEach(script => {
        commands[prefix+script.split('.')[0]] = require("../"+dir+script);
    });

    return commands;
}