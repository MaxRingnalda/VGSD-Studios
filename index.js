const commado = require('discord.js-commando');
const bot = new commado.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('meetings', 'Meetings');
bot.registry.registerGroup('morning', 'Mornings');
bot.registry.registerGroup('poll', 'Poll');
bot.registry.registerGroup('ticket', 'Ticket');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzkzMjczODM3MjU0NjA2ODY5.DRzcYQ.KB6snVgpH7YDwP93XV5iV1rvPfU');

client.login(process.env.BOT_TOKEN);
