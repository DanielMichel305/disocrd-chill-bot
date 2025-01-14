const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const path = require('node:path')

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
    .setName("rickroll")
    .setDescription("Rickroll"),
    async execute(interaction){
        const imagePath = path.join(__dirname, '../../static/images/rickroll-roll.gif');
        
        const attachment = new AttachmentBuilder(".\\static\\images\\rickroll-roll.gif");
        await interaction.reply("https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif");
    }


};