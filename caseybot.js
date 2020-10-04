const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./token.json');
const memberCount = require('./member-count')
const welcome = require('./welcome')
const roleReactions = require('./role-reactions')
const ms = require('ms')

client.login(config.token);
 
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
    memberCount(client)
    welcome(client)
    roleReactions(client)
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '!poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');
        message.delete();

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('')
        .setDescription(pollDescription)
        .setColor('BLUE')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    
    }

})

client.on('message', async message => {
    let args = message.content.substring(prefix.length).split(" ")

    if (message.content.startsWith(`${prefix}giveaway`)) {
        let time = args[1]
        if (!time) return message.channel.send('You did not specify your time!');

        if (
            !args[1].endsWith("d") &&
            !args[1].endsWith("h") &&
            !args[1].endsWith("m") &&
            !args[1].endsWith("s") 
        )
            return message.channel.send("You need to use d (days), h (hours), m (minutes), s (seconds)")

            let gchannel = message.mentions.channels.first();
            if (!gchannel) return message.channel.send("I can\'t find that channel in the server!")

            let prize = args.slice(3).join(" ")
            if (!prize) return message.channel.send(" You have to say what you want the prize to be!")

            message.delete()
            gchannel.send(":tada: **NEW GIVEAWAY!** :tada: ")
            let gembed = new Discord.MessageEmbed()
                .setTitle('New Giveaway!')
                .setColor('GREEN')
                .setDescription(`React with :tada: to enter the giveaway!\nHosted by: **${message.author}**\nTime: **${time} left**\nPrize: **${prize}**`)
                .setTimestamp(Date.now + ms(args[1]))
                .setFooter(`Will end in ${time}`)
                let reaction = await gchannel.send(gembed)
                reaction.react("🎉")
                setTimeout(() => {
                    if (message.reaction.cache.find("🎉").count <= 1) {
                        return message.channel.send("Not enough people reacted for me to draw a winner!")
                    }

                    let winner = message.reactions.cache.find("🎉").users.cache.filter((u) => !u.client).random();
                    gchannel.send(`Congratulations ${winner}! You just won the **${prize}**!`
                    );
                }, ms(args[1]));
    }
})

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
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
        }     
    if(command === 'unmute'){
       client.commands.get('unmute').execute(message, args);
       } 
    if(command === 'message'){
    client.commands.get('message').execute(message, args);
    } 
})


// Keep this at the bottom
client.on('ready', () =>{
    client.user.setActivity('!commands :)', { type: 'WATCHING'}).catch(console.error)
}) // for the type: PLAYING WATCHING LISTENING STREAMING