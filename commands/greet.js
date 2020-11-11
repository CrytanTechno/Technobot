module.exports = {
	name: 'greet',
	execute(message, args) {
        const greetings = [
            'Howdee',
            'Hola',
            'Hello',
            'Hi',
            'Whats up partner'
        ]
        client.on('message', greet);
		function greet(msg) {
            if(msg.content === `${prefix}Hello Techno`) {
                const index = Math.floor(Math.random() * greetings.length);
                msg.channel.send(greetings[index] + ` ${msg.author.username}`)
            }
        }
	},
};