const Discord = require("discord.js");
const { colorWhite } = require("../config.json");
const fetch = require("node-fetch");

module.exports = {
	name: 'fact',
	aka: 'uselessfact',
	description: 'Sends a random useless fact.',
	usage: '//fact',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	roleCheck: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
			fetch("https://uselessfacts.jsph.pl/random.json?language=en")
				.then(result => result.json()).then(body => {
						if(!body) return message.channel.send("Sorry, I couldn't get the fact. Try again later.");
						let factEmbed = new Discord.MessageEmbed()
						.setTitle("Useless Fact")
						.setColor(colorWhite)
						.setDescription(body.text)
						.addField("Source:", body.permalink)

						message.channel.send({embed: factEmbed});
			})
  },
};
