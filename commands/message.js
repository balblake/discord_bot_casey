module.exports = {
    name: 'message',
    description: "send a message through the bot",
    execute(message, args){

if(message.member.roles.cache.has('386344247843880960')){
    if (message.content.startsWith("!message")) {
        // Get the channel mention
        if (message.mentions.channels.size == 0) {
            message.reply("please mention a channel first.");
        }
        else {
            let targetChannel = message.mentions.channels.first();
            // Get the message to print

            const args = message.content.split(" ").slice(2);
            let saytext = args.join(" ");
            targetChannel.send(saytext);
            message.delete();

        }
        }
    }
}};