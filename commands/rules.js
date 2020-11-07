const discord = require('discord.js')

module.exports = {
    name: 'rules',
    description: "send a message through the bot",
    execute(message, args){

if(message.member.roles.cache.has('386344247843880960')){
    if (message.content.startsWith("!rules")) {
            // Get the message to print

            const args = message.content.split(" ").slice(2);
            let saytext = args.join(" ");
            const embed = new discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Server Rules')
            .setTimestamp()
            .setFooter('If you don’t follow any of these rules you will first be muted, then kicked, and then banned.')
            .setDescription(saytext)
            guild.channels.cache.get('763475311114977300').send(embed);
            message.delete();

        }
        }
    }
};