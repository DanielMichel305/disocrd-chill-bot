const {SlashCommandBuilder,hyperlink, hideLinkEmbed} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
    .setName('credits')
    .setDescription('Display Developer credits'),
    async execute(interaction){
        url = 'https://github.com/DanielMichel305';
        const noEmbdLink = hideLinkEmbed(url);
        const link = hyperlink('Daniel\'s Github', noEmbdLink);
        await interaction.reply(
            
            `The Bot was Created By Daniel Michel, Visit ${link}.`
        );
    }
}