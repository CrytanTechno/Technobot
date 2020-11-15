module.exports = {
	name: 'greetings',
    description: 'Greet the greeter!',
	execute(message, args) {
		const greetings = [
            'Howdee',
            'Hola',
            'Hello',
            'Hi',
            'What\'s up partner',
            'F you'
        ]
        const i = Math.floor(Math.random() * greetings.length);
        message.channel.send(`${greetings[i]} ${message.author.username}`)
	},
};