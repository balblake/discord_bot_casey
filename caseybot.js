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
     if(command === 'tiktok'){
        client.commands.get('tiktok').execute(message, args);
         } 
     if(command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
         } 
     if(command === 'insta'){
        client.commands.get('insta').execute(message, args);
         } 
     if(command === 'ig'){
        client.commands.get('ig').execute(message, args);
        } 
})

client.on('guildMemberAdd', member => {
    // Set the member's roles by id
    member.setRoles(['386344485761843220']);

    // Don't know the role id?
    const role = guild.roles.find(role => role.name === 'Trucker babies');
    member.addRole(role);
});



// Keep this at the bottom
client.on('ready', () =>{
    client.user.setActivity('!commands', { type: 'WATCHING'}).catch(console.error)
}) // for the type: PLAYING WATCHING LISTENING STREAMING
 
client.login('NzQ5MDE0MTA2MDk0NDM2NDIz.X0lzvg._SxtVM1smJRmnv9DbBuGVJFYI_E');