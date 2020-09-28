const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = "penis ";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('abbie poo', { type: 'WATCHING' });
});

client.on('message', async msg => {
	const args = msg.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();

	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	if (command === 'ping'){
		const m = await msg.channel.send("pinging...");
		m.edit(`Ping! You pinged in ${m.createdTimestamp - msg.createdTimestamp}ms!`);
	}
	else if (command === 'pong'){
		const m = await msg.channel.send("ponging...");
		m.edit(`Pong! You ponged in ${m.createdTimestamp - msg.createdTimestamp}ms!`);
	}
	else if (command === 'help')
	  return msg.channel.send('1: penis ping = tells the ping \n 2: penis pong = ping \n 3: penis clear []= clears messages \n 4: fat = no u')

	else if (command === 'clear') {
		if (msg.member.roles.cache.some(role => role.id === '727514734777204797') || msg.member.hasPermission('MANAGE_MESSAGES')){
			console.log(args[0])
			const delcount = parseInt(args[0])+1
			msg.channel.bulkDelete(delcount);
		} else {
			msg.channel.send('Nice try But you Dont have perms ;)')
		}
	 }
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		console.log(msg.channel)
		msg.reply('You Pinged, I ponged!');
	} else if(msg.content === 'pong'){
			msg.reply('You Ponged, I Pinged')
	} else if(msg.content === 'poo' && msg.channel.name === 'poop'){
		return msg.channel.send('pee')
	} else if(msg.content === 'pee' && msg.channel.name === 'poop'){
		return msg.channel.send('poopy')
	} else if(msg.content === 'poopy' && msg.channel.name === 'poop'){
		return msg.channel.send('pees')
	} else if(msg.content === 'pees' && msg.channel.name === 'poop'){
		return msg.channel.send('poops')
	} else if(msg.content === 'poops' && msg.channel.name === 'poop'){
		return msg.channel.send('poop')
	} else if(msg.content === 'poop' && msg.channel.name === 'poop'){
		return msg.channel.send('poo')
	} else if(msg.content === 'go9iashd9g8aszdi89dd' && msg.channel.name === 'poop'){
		return msg.content.send('bruh stop...')
	}
});

client.on('message', msg => {
	const file = new Discord.MessageAttachment('unknown.png');
	const cum = msg.content.toLowerCase();
	if(cum.includes('fat')){
		return msg.channel.send('**NO U** <a:PikachuChair:731488459436458004>',{files:["./unknown.png"]})
	}
	else if (cum === 'doggart') {
		return msg.channel.send('Here lay the masterpieces made by the artist Dogg Himself \n<:talent:729358860854362143><:putin:731287513083150396><:nima2:758358819435708528><:nima:730555860924891239><:naz:758349798712672364><:masterpiece:729405775830712360><:indian:758353020324151366><:foundit:730173437976379493>')

}

});

client.login(process.env.token)
