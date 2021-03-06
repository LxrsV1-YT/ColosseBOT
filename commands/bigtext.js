const Discord = require("discord.js");
const { colorGreen } = require("../config.json");

module.exports = {
	name: "bigtext",
	description: "Convert text to uppercase.",
	usage: "//bigtext <text>",
	args: true,
	argsCount: 1,
	execute(client, message, args) {
		const bigText = args.join(" ").toUpperCase();

		const bigTextEmbed = new Discord.MessageEmbed()
		.setAuthor("⋙ ColosseBOT || BigText ⋘", "", "https://colossebot.app")
		.setColor(colorGreen)
		.addField("Input:", args.join(" "))
		.addField("Output:", bigText);

		message.channel.send(bigTextEmbed)
	},
};
