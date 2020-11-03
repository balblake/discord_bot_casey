const discord = require('discord.js')

module.exports = {
    name: 'commands',
    description: "All the commands",
    execute(message, args){
message.delete();
const embed = new discord.MessageEmbed()
.setColor('BLUE')
.setTitle('Here are the commands.')
.setTimestamp()
.setFooter(':caseythumbsup:')
.setDescription(`!socials - See all Casey's socials\n!twitch - Casey's Twitch Channel\n!youtube/!yt - Casey's YouTube Channel\n!tiktok - Casey's TikTok Page\n!instagram/!ig/!insta - Casey's Instagram Page`)
message.channel.send(embed)
}}