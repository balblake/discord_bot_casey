const discord = require('discord.js')

module.exports = {
    name: 'embedmessage',
    description: "send a message through the bot",
    execute(message, args){

if(message.member.roles.cache.has('386344247843880960')){
    if (message.content.startsWith("!embedmessage")) {
        // Get the channel mention
        if (message.mentions.channels.size == 0) {
            message.reply("please mention a channel first.");
        }
        else {
            let targetChannel = message.mentions.channels.first();
            // Get the message to print

            const args = message.content.split(" ").slice(2);
            const args1 = message.content.split(" ").slice(3);
            const embed = new discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('CrazyCasey')
            .setDescription(args1)
            .setTimestamp()
            targetChannel.send(embed);
            message.delete();

        }
        }
    }
}};