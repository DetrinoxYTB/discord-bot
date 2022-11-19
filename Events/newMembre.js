const { EmbedBuilder } = require("discord.js")
const mysql = require(`mysql`);
var sql;
const db = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: ``,
    database: `detrinox`
});
module.exports = {
    name: "guildMemberAdd",
    once: false,
    execute(member,client){
        db.query(`SELECT * FROM utilisateurs`,async (err, req) =>{
            for (var re of req) {
                if (re.userid == member.user.id){
                    var yes = true
                }
            }
            if (yes == true){
                sql = `INSERT INTO utilisateurs(id, username, discriminator, tag) VALUES ('${member.user.id}','${member.user.username}','${member.user.discriminator}','${member.user.tag}')`
                db.query(sql, function(err){
                    if(err) throw err 
                })
            }else{
                console.log("Le membre est déja enregister dans la base de données")
            }
        })
        /*var embed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle("Salut")
            .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
            .addFields({name: "**Bienvenue**", value:`Hey <@${member.id}>, nous te souhaitons la bienvenue sur le serveur d'entraide **__${member.guild.name}__**, nous allons te demander d'aller lire et accepter le <#1041465109001805884> et par la suite de prendre tes <#1041501697316491314> pour pouvoir discuter avec les personnes qui ont les mêmes points en communs que toi et sur ceux, je te souhaite un bon séjour sur notre Serveur 😃`})
            .setTimestamp()
            .setFooter({text:`Bon séjour ${member.user.tag} !`,iconURL:member.user.displayAvatarURL()})*/
        member.guild.channels.cache.get("1041641833110970388").send(`**Bienvenue**\n\nHey <@${member.id}>, nous te souhaitons la bienvenue sur le serveur d'entraide **__${member.guild.name}__**, nous allons te demander d'aller lire et accepter le <#1041465109001805884> et par la suite de prendre tes <#1041501697316491314> pour pouvoir discuter avec les personnes qui ont les mêmes points en communs que toi et sur ceux, je te souhaite un bon séjour sur notre Serveur 😃`)
        member.roles.add("1041510851003293799")
    }
}