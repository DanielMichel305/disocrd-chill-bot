const {SlashCommandBuilder} = require('discord.js');




module.exports = {

    data: new SlashCommandBuilder()
    .setName('me')
    .setDescription("Display info about urself!"),
    async execute(interaction){
        const date = interaction.member.joinedAt;
        const FormattedDate = new Date(date).toLocaleDateString('en-GB');
        await interaction.reply(`The command was run by ${interaction.user.username}, who is a member since ${FormattedDate}.`);

    }

}