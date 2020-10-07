const { DiscordAPIError, Message } = require("discord.js");

module.exports = client => {
    client.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!');
    var role = member.guild.roles.cache.find(role => role.name === 'Trucker babies');
    member.roles.add(role)
    });
    client.on('guildMemberAdd', member => {
        const targetChannelId = '763475311114977300'
        const targetChannelID2 = '751503236820893806'
        const embed = new discord.RichEmbed()
            .setTitle(`**${member}**`)
            .setColor('BLUE')
            .setDescription(`Welcome **${member}**!\nMake sure to read the **${member.guild.channels.cache.get(targetChannelId).toString()}**!\nCheck out Casey's **${member.guild.channels.cache.get(targetChannelID2).toString()}**!`)

            member.guild.channels.cache.get('576617716023033865').send(embed);
    })}