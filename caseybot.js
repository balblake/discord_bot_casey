const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Casey Bot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'twitter'){
        client.commands.get('twitter').execute(message, args);
        } 
    if(command === 'twitch'){
        client.commands.get('twitch').execute(message, args);
        } 
    if(command === 'youtube'){
       client.commands.get('youtube').execute(message, args);
        } 
    if(command === 'yt'){
        client.commands.get('yt').execute(message, args);
         } 
     if(command === 'commands'){
        client.commands.get('commands').execute(message, args);
         } 
});



// Keep this at the bottom
client.on('ready', () =>{
    client.user.setActivity('!commands', { type: 'STREAMING'}).catch(console.error)
})

 
 
client.login('NzQ5MDE0MTA2MDk0NDM2NDIz.X0lzvg._SxtVM1smJRmnv9DbBuGVJFYI_E');