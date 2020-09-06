const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./token.json');
const memberCount = require('./member-count')

client.login(config.token);
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!');
    var role = member.guild.roles.cache.find(role => role.name === 'Trucker babies');
    member.roles.add(role);
    });
    client.on('guildMemberAdd', member => {
    const targetChannelId = '707989016078843914'
    member.guild.channels.cache.get('576617716023033865').send(`Welcome, **${member}** to casey's discord server!\nMake sure to check out his socials by going to ${member.guild.channels.cache.get(targetChannelId).toString()} and typing !socials`);
    });

    client.on('message', message => {
        if(message.member.roles.cache.has('386344247843880960')){
        if (message.content.startsWith("!message")) {
            // Get the channel mention
            if (message.mentions.channels.size == 0) {
                message.reply("please mention a channel first.");
            }
            else {
                let targetChannel = message.mentions.channels.first();
                // Get the message to print

                const args = message.content.split(" ").slice(2);
                let saytext = args.join(" ");
                targetChannel.send(saytext);
                message.delete();
            }
            }
        }
      });
    
client.once('ready', () => {
    console.log('Casey Bot is online!');
    memberCount(client)
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
 
    switch (args[0]) {
        case 'mute':
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let mainrole = message.guild.roles.find(role => role.name === "Trucker babies");
            let role = message.guild.roles.find(role => role.name === "⛔Muted⛔");
           
 
            if(!role) return message.reply("Couldn't find the mute role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            person.removeRole(mainrole.id)
            person.addRole(role.id);
 
 
            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
 
            setTimeout(function(){
                
                person.addRole(mainrole.id)
                person.removeRole(role.id);
                console.log(role.id)
                message.channel.send(`@${person.user.tag} has been unmuted.`)
            }, ms(time));
 
 
    
        break;
    }
 
 
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
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
        } 
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
        } 
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
       } 
    if(command === 'mcommands'){
        client.commands.get('mcommands').execute(message, args);
       } 
    if(command === 'socials'){
        client.commands.get('socials').execute(message, args);
        } 
})


// Keep this at the bottom
client.on('ready', () =>{
    client.user.setActivity('!commands :)', { type: 'WATCHING'}).catch(console.error)
}) // for the type: PLAYING WATCHING LISTENING STREAMING