const roles = ['Trucker Babies']

module.exports = (client) => {
    const channelId = '769796468055474206'

    client.on('message', (message) => {
        const { guild, content, member } = message

        const hasRole = message.guild.member(message.author).roles.has((role) => {
            return roles.includes(role.name)
        })

        if (hasRole) {
            const channel = guild.channels.cache.get(channelId)
            channel.send(`${message.author.username} said:
            
    "${content}"`)
        }
    })
}