const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

//Verify if the bot is online
client.once('ready', () => {
	console.log('Ready!');
});

// Get Commands
const commandz = [
    "commands",
    "Hello Techno",
    "Random Fact"
]
client.on('message', cmd);
function cmd(msg) {
    if(msg.content === `${prefix}commands`) {
        for(i = 0; i < commandz.length; i++) {
            msg.channel.send(commandz[i] + "\n");
        }
    }
}

// Greeting
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
        msg.channel.send(greetings[index] + ` ${msg.author.username}`);
    }
}

// Tell a random fact
const rndmFact = [
    'Did you know your stupid',
    'John Adams was the first president to occupy the White House in 1800; one of his first additions was a vegetable garden.',
    'The temperature in the void of space is about −270.45 °C.',
    'There are an estimated 100-400 billion stars in our galaxy, the Milky Way.',
    'The universe is observed to be 13.8 billion years old and has been expanding since its formation in the Big Bang.',
    'In the observable universe there are an estimated 2 trillion (2,000,000,000,000) galaxies.',
    'The ocean is home to nearly 95 percent of all life.'
]
client.on('message', randomFact);
function randomFact(msg) {
    if(msg.content === `${prefix}Random Fact`) {
        const index = Math.floor(Math.random() * rndmFact.length);
        msg.channel.send(rndmFact[index])
    }
}

// Banish to purgatory
client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(`${prefix}`)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(`${prefix}`.length)
            .split(/\s+/);
            console.log(args)
        if(CMD_NAME === 'banish') {
            if(!message.member.hasPermission('ADMINISTRATOR'))
                return message.reply('Who you tryin to fool')
            if(args.length === 0)
                return message.reply('Who do I Banish!');
            
            console.log(args[0])
            console.log(message.guild.members.cache.get(args[0]));
            const member = message.guild.members.cache.get(args[0]);
            console.log(member)
            if(member) {
                member.roles.add('757988276320862370');
                msg.channel.send(`${member} has been banished to Purgatory`);
                console.log(member);
            } else {
                message.channel.send('Who dat?');
            }
        }
    }
});

client.login(token);