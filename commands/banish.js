module.exports = {
    name: 'banish',
    cooldown: 5,
    description: 'Banish sinners to Purgatory!',
    guildOnly: true,
	execute(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR'))
            return message.reply('Who you trying to fool');
        if(args === 0) 
            return message.reply('Who do I banish?');
        const mentioned = message.mentions.users.first().id;
        const member = message.guild.members.cache.get(mentioned);
        member.roles.add('757988276320862370');
        message.channel.send(`${member.user.username} has been sent to Purgatory. Rest in hell<:smugdogo:751747983510601738>`);
    },
};