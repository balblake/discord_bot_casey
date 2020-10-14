const { DiscordAPIError, Message } = require("discord.js");
const discord = require('discord.js')


module.exports = client => {
    client.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!');
    var role = member.guild.roles.cache.find(role => role.name === 'Trucker Babies');
    member.roles.add(role)
    });
    client.on('guildMemberAdd', member => {
        const targetChannelId = '763475311114977300'
        const targetChannelID2 = '751503236820893806'
        const embed = new discord.MessageEmbed()
            .setTitle(`**Welcome to Casey's Discord!**`)
            .setFooter('If you don’t follow any of these rules you will first be muted, then kicked, and then banned.')
            .setTimestamp(timestamp,new Date(msg.createdTimestamp).toISOString())
            .setColor('BLUE')
            .setDescription(`Welcome **${member}**!\nMake sure to read the **${member.guild.channels.cache.get(targetChannelId).toString()}**!\nCheck out Casey's **${member.guild.channels.cache.get(targetChannelID2).toString()}**!`)

            member.guild.channels.cache.get('576617716023033865').send(embed);
    })}