module.exports = client => {
    client.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!');
    var role = member.guild.roles.cache.find(role => role.name === 'Trucker babies');
    member.roles.add(role);
    });
    client.on('guildMemberAdd', member => {
    const targetChannelId = '707989016078843914'
    member.guild.channels.cache.get('576617716023033865').send(`Welcome, **${member}** to casey's discord server!\nMake sure to check out his socials by going to ${member.guild.channels.cache.get(targetChannelId).toString()} and typing !socials`);
    });
}