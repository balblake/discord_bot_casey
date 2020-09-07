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

      if (command == "giveaway") {
        // !giveaway {time s/m/d} {item}
        const messageArray = message.content.split(" ");
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You don't have enough permissions to start a giveaway !")
        var item = "";
        var time;
        var winnerCount;
        for (var i = 1; i < args.length; i++) {
          item += (args[i] + " ");
        }
        time = args[0];
        if (!time) {
          return message.channel.send(`Invalid duration provided`);
        }
        if (!item) {
          item = "No title"
        }
        var embed = new Discord.MessageEmbed();
        embed.setColor(0x3333ff);
        embed.setTitle("New Giveaway !");
        embed.setDescription("**" + item + "**");
        embed.addField(`Duration : `, ms(ms(time), {
          long: true
        }), true);
        embed.setFooter("React to this message with 🎉 to participate !");
        var embedSent = await message.channel.send(embed);
        embedSent.react("🎉");
    
        setTimeout(async () => {
          try{
            const peopleReactedBot = await embedSent.reactions.cache.get("🎉").users.fetch();
            var peopleReacted = peopleReactedBot.array().filter(u => u.id !== client.user.id);
          }catch(e){
            return message.channel.send(`An unknown error happened during th draw of the giveaway **${item}** : `+"`"+e+"`")
          }
          var winner;
    
          if (peopleReacted.length <= 0) {
            return message.channel.send(`Not enough participants to execute the draw of the giveaway **${item}** :(`);
          } else {
            var index = Math.floor(Math.random() * peopleReacted.length);
            winner = peopleReacted[index];
          }
          if (!winner) {
            message.channel.send(`An unknown error happened during th draw of the giveaway **${item}**`);
          } else {
            console.log(`Giveaway ${item} won by ${winner.toString()}`)
            message.channel.send(`🎉 **${winner.toString()}** has won the giveaway **${item}** ! Congratulations ! 🎉`);
          }
        }, ms(time));
    }
    
client.once('ready', () => {
    console.log('Casey Bot is online!');
    memberCount(client)
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
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args, member);
        }     
    if(command === 'unmute'){
       client.commands.get('unmute').execute(message, args, member);
       } 
    if(command === 'timer'){
    client.commands.get('timer').execute(message, args,);
    } 
})


// Keep this at the bottom
client.on('ready', () =>{
    client.user.setActivity('!commands :)', { type: 'WATCHING'}).catch(console.error)
}) // for the type: PLAYING WATCHING LISTENING STREAMING