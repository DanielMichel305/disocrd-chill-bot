const {SlashCommandBuilder} = require('discord.js')



module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or the server.')
    .addSubcommand(subcommand=>
        subcommand
            .setName("user")
            .setDescription("Display info about a user.")
            .addUserOption(option=>option.setName("target").setDescription("The user")))
    .addSubcommand(subcommand=>
       subcommand
       .setName("server")
       .setDescription("Display info regarding the server.")
       .addUserOption(option=>option.setName("target").setDescription("info about the server"))),
    
       async execute(interaction){
        if(interaction.options.getSubcommand() === "user"){

            const user = interaction.options.getUser('target');
            
            
            if(user){
                const member = await interaction.guild.members.fetch(user.id);
                const memberJoinDateFormatted = new Date(member.joinedAt).toLocaleDateString('en-GB');
                await interaction.reply(`Username: ${user.username} is a member since: ${memberJoinDateFormatted}`);
            }
            else{
                const memberJoinDateFormatted = new Date(interaction.member.joinedAt).toLocaleDateString('en-GB');
                await interaction.reply(`Your username: ${interaction.user.username} and you are a member since: ${memberJoinDateFormatted}`)
            }
        }

        else if(interaction.options.getSubcommand() === "server"){
            await interaction.reply(`Server name: ${interaction.guild.name}. \nTotal members: ${interaction.guild.memberCount}.`)
        }


    }
}