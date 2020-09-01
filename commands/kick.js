module.exports = {
    name: 'kick',
    description: "kicks user",
    execute(message, args){
        if(message.member.roles.cache.has('386344247843880960')){
            const userKick = message.mentions.users.first();

            if (userKick) {
                var member = message.guild.member(userKick)

                if(member) {
                    member.kick({
                        reason: 'you broke the rules!'
                    }).then(() => {
                        message.reply(`${userKick.tag} was kicked from the server.`)
                    })
                } else {
                    message.reply('user is not in server');
                }
            } else {
                message.reply('you need to sate the user you want to kick')
            }


        } else {
            message.reply('Nice try! This is only for staff!');
        }



    }
}