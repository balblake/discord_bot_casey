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
        const targetChannelID3 = '707989016078843914'
        const embed = new discord.MessageEmbed()
            .setTitle(`**Welcome to Casey's Discord!**`)
            .setTimestamp()
            .setColor('BLUE')
            .setFooter('Have a good time!')
            .setDescription(`Welcome **${member}**!\nMake sure to read the **${member.guild.channels.cache.get(targetChannelId).toString()}**!\nCheck out Casey's **${member.guild.channels.cache.get(targetChannelID2).toString()}**!\nDo !commands in **${member.guild.channels.cache.get(targetChannelID3).toString()}** to see the commands!`)

            member.guild.channels.cache.get('576617716023033865').send(embed);
    })}