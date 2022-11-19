const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pp")
        .setDescription("Cette commande permet de voir la photo de profile d'un utilisateur.")
        .addUserOption(option => option
            .setName("utilisateur")
            .setDescription("L'utilisateur dont vous voulez observer la photo de profile (Facultatif).")
        ),

        execute(interaction, client){
            membre = interaction.options.getMember("utilisateur")
            if(membre == null){
                membre = interaction.member
            }
            var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Photo de profil")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                .setImage(membre.displayAvatarURL())
                .setTimestamp()
                .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})
                interaction.reply({embeds:[embed]})
        }
    
}