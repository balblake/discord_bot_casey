module.exports = {
    name: 'ban',
    description: "bans user",
    execute(message, args){
        message.delete();
        if(message.member.roles.cache.has('386344247843880960')){
            const userBan = message.mentions.users.first();

            if (userBan) {
                var member = message.guild.member(userBan)

                if(member) {
                    member.ban({
                        reason: 'you broke the rules!'
                    }).then(() => {
                        message.reply(`${userBan.tag} was banned from the server.`)
                    })
                } else {
                    message.reply('user is not in server');
                }
            } else {
                message.reply('you need to sate the user you want to ban')
            }


        } else {
            message.reply('Nice try! This is only for staff!');
        }



    }
}