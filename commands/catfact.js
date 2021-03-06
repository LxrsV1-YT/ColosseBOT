const Discord = require("discord.js");
const fetch = require("node-fetch");
const { colorDarkRed, colorGreen, catFactsThumbnail } = require("../config.json");

module.exports = {
	name: "catfact",
	description: "Sends a random cat fact.",
	usage: "//catfact",
	execute(client, message, args) {
			fetch("https://cat-fact.herokuapp.com/facts/random")
				.then(result => result.json()).then(body => {
					if(!body) {
						const noFactEmbed = new Discord.MessageEmbed()
						.setAuthor("⋙ ColosseBOT || Missing Fact ⋘", "", "https://colossebot.app")
						.setColor(colorDarkRed)
						.setDescription("Sorry, I couldn't get the fact. Please try again later.");

						return message.channel.send(noFactEmbed).then(m => {
							setTimeout(() => {m.delete()}, 7000);
						});
					}

					const catFactEmbed = new Discord.MessageEmbed()
					.setAuthor("⋙ ColosseBOT || CatFact ⋘", "", "https://colossebot.app")
					.setColor(colorGreen)
					.setDescription(body.text)
					.setFooter("Provided by cat-fact.herokuapp.com", catFactsThumbnail);

					return message.channel.send(catFactEmbed);
				}).catch(error => {
					return embeds.unknownError(client, message, module.exports.name, error);
			});
  },
};
