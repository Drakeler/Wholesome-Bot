const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk0NjQ2MTM0NTA0ODE2NzQw.XoOp_w.OAQS9NI1HsnrhHgUdwnmgyl0W-A';

const PREFIX = '>';

bot.on('ready', () =>{
	console.log('This bot is online!');
})

bot.on('message', msg=>{
	
	author = msg.author;

	let args = msg.content.slice(PREFIX.length).split(" ");

	switch(args[0]){
		case 'ping':
			msg.channel.send('pong!');
			console.log(msg);
			break;
		case 'website':
			msg.channel.send('We don\'t have one of those!')
			break;
		case 'embed':
			const embed = new Discord.MessageEmbed()
			.setTitle('User Info')
			.addField('Version ', 'Beta')
			.addField('Player Name', msg.author.username)
			.setColor(0x228B22)
			.setThumbnail(author.avatarURL())
			msg.channel.send(embed);
			console.log(embed);
		break;
	}
}
)

bot.login(token);