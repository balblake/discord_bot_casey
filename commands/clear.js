module.exports = {
    name: 'clear',
    description: "clear",
    execute(message, args) {

        if(message.member.roles.cache.has('386344247843880960')){
        if(!args[0]) return message.reply("How many message would you like to clear?")
        if(parseInt(args[0]) > 100) return message.reply("You may not delete more than 100 messages!");

        message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        }).catch((err) => {
            return message.reply("Error Has occurred!");
        })


        } else {
            message.channel.send('Nice try command is only for staff! ');
        }



    }
}