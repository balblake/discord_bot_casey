const discord = require('discord.js')

module.exports = {
    name: 'rules',
    description: "send a message through the bot",
    execute(message, args){

if(message.member.roles.cache.has('386344247843880960')){
    if (message.content.startsWith("!rules")) {
        const channelId = '763475311114977300'
            const args = message.content.split(" ").slice(1);
            let saytext = args.join(" ");
            const embed = new discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Server Rules')
            .setTimestamp()
            .setFooter('If you don’t follow any of these rules you will first be muted, then kicked, and then banned.')
            .setDescription(saytext)
            const targetChannel = guild.channels.cache.get(channelId)
            targetChannel.send(embed);
            message.delete();

        }
        }
    }
};