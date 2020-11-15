module.exports = {
	name: 'rndmfact',
	description: 'Respond with a wierd,funny or interesting fact!',
	execute(message, args) {
		const rndmFact = [
            'Did you know your stupid',
            'John Adams was the first president to occupy the White House in 1800; one of his first additions was a vegetable garden.',
            'The temperature in the void of space is about −270.45 °C.',
            'There are an estimated 100-400 billion stars in our galaxy, the Milky Way.',
            'The universe is observed to be 13.8 billion years old and has been expanding since its formation in the Big Bang.',
            'In the observable universe there are an estimated 2 trillion (2,000,000,000,000) galaxies.',
            'The ocean is home to nearly 95 percent of all life.'
        ]
        const i = Math.floor(Math.random() * rndmFact.length);
        message.channel.send(rndmFact[i]);
	},
};