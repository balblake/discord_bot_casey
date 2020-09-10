module.exports = {
    name: 'ban',
    description: "bans user",
    execute(message, args,){
        if(message.member.roles.cache.has('386344247843880960')){
            const userBan = message.mentions.users.first();
            const reason = message.content.split(" ").slice(2)

            if (userBan) {
                var member = message.guild.member(userBan)

                if(member) {
                    member.ban(reason)
                .then(() => {
                        message.reply(`${userBan.tag} was banned from the server.`)
                        
                    })
                } else {
                    message.reply('Send a reason or the user is not in the server.');
                }
            } else {
                message.reply('you need to sate the user you want to ban')
            }


        } else {
            message.reply('Nice try! This is only for staff!');
        }



    }
}