const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Cette commande permet d'expulser un utilisateur.")
        .addIntegerOption(option => option
            .setName("nombre")
            .setDescription("Veuillez mettre un nombre entre 1 et 100.")
            .setRequired(true)
        ),

        async execute(interaction, client){
            if(interaction.memberPermissions.has(PermissionsBitField.Flags.ManageMessages)){
                var nombre = interaction.options.getInteger("nombre")
                if(nombre >= 1 && nombre <= 100){
                    interaction.channel.bulkDelete(nombre)
                    var embed = new EmbedBuilder()
                        .setColor(0x00e7ff)
                        .setTitle("Suppréssion")
                        .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                        .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                        .setDescription("**Des messages ont été supprimés.**")
                        .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041363054606164080/592824309937078282.png")
                        .addFields(
                            {name:"**\nL'auteur du clear : **", value:`<@${interaction.user.id}>`},
                            {name:"**\nLe nombre de méssages qui a été supprimés : **", value:`${nombre.toString()} messages supprimés.`},
                        )
                        .setTimestamp()
                        .setFooter({text:`Éxécuté par ${interaction.user.tag}`,iconURL:interaction.user.displayAvatarURL()})

                    await interaction.reply({embeds:[embed]})
                }
                if(nombre < 1 ){
                    var embed2 = new EmbedBuilder()
                    .setColor("Aqua")
                    .setTitle("Erreur")
                    .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                    .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                    .setDescription("**\n⚠️⚠️⚠️⚠️**")
                    .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041363054606164080/592824309937078282.png")
                    .addFields(
                        {name:"**\nJe n'ai pas réussi à éxécuté la commande 😭 : **", value:"Veuillez mettre un nombre supérieur à 0"},
                    )
                    .setTimestamp()

                    await interaction.reply({embeds:[embed2], ephemeral:true})
                }
                if(nombre > 100){
                    var embed3 = new EmbedBuilder()
                    .setColor("Aqua")
                    .setTitle("Erreur")
                    .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                    .setAuthor({name:`${client.user.username} - ${this.data.name}`,iconURL:client.user.displayAvatarURL(), url:"https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA"})
                    .setDescription("**\n⚠️⚠️⚠️⚠️**")
                    .setThumbnail("https://cdn.discordapp.com/attachments/1037766220964974703/1041363054606164080/592824309937078282.png")
                    .addFields(
                        {name:"**\nJe n'ai pas réussi à éxécuté la commande 😭 : **", value:"Veuillez mettre un nombre inférieur ou égale à 100"},
                    )
                    .setTimestamp()

                    await interaction.reply({embeds:[embed3], ephemeral:true})
                }
                
            }else{
                await interaction.reply({content:"Vous n'avez pas la permission pour exécutez cette commande !",ephemeral:true})
            }
        }
    
}