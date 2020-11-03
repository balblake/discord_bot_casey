const discord = require('discord.js')

module.exports = {
    name: 'commands',
    description: "All the commands",
    execute(message, args){
message.delete();
const embed = new discord.MessageEmbed()
.setColor('BLUE')
.setTitle('Here are all the commands.')
.setTimestamp()
.setFooter('Have a nice day!', 'https://i.imgur.com/k6Gp1Gw.jpg')
.setDescription(`!socials - See all Casey's socials\n!twitch - Casey's Twitch Channel\n!youtube/!yt - Casey's YouTube Channel\n!tiktok - Casey's TikTok Page\n!instagram/!ig/!insta - Casey's Instagram Page`)
message.channel.send(embed)
}}