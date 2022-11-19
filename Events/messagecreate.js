module.exports = {
    name: "messageCreate",
    once: false,

    execute(message,client){
        if(message.author.bot == true){
            return
        }else{
            if(message.author.id == "711955967264424139"){
                if(message.content == "!r"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ :computer: Vous donne le rôle <@&1041508987897651300>\n> ▪︎ :mobile_phone:Vous donne le rôle <@&1041514174435573802>").then(
                        message => message.react("💻")
                        .then(() => message.react('📱'))
                    )
                }
                if(message.content == "!rp"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ <:python:1042230931454431233> Vous donne le rôle <@&1041517195882147871>\n> ▪︎ <:js:1042230558270431262> Vous donne le rôle <@&1041517505014939709>\n> ▪︎ <:html:1042229958992478208> Vous donne le rôle <@&1041517663148589116>\n> ▪︎ <:css:1042230189255573595> Vous donne le rôle <@&1041517750251700235>\n> ▪︎ <:ch:1042230682035962007> Vous donne le rôle <@&1042237376174489680>\n> ▪︎ <:cp:1042230785165512745>  Vous donne le rôle <@&1041639166720606258>").then(
                        message => message.react("1042230931454431233")
                        .then(() => message.react('1042230558270431262'))
                        .then(() => message.react('1042229958992478208'))
                        .then(() => message.react('1042230189255573595'))
                        .then(() => message.react('1042230682035962007'))
                        .then(() => message.react('1042230785165512745'))
                    )
                }
                if(message.content == "!ra"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ :computer: Vous donne le rôle <@&1041514510239932476>\n> ▪︎ <:playstation:1042228783865942026> Vous donne le rôle <@&1041514719820918916>\n> ▪︎ <:xbox:1042229095360114758> Vous donne le rôle <@&1041515804803469322>\n> ▪︎ <:switch:1042229531035058176> Vous donne le rôle <@&1041515030279098368>").then(
                        message => message.react("💻")
                        .then(() => message.react('1042228783865942026'))
                        .then(() => message.react('1042229095360114758'))
                        .then(() => message.react('1042229531035058176'))
                    )
                }
                if(message.content == "!rj"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ <:apexlegend:1042231158051704922> Vous donne le rôle <@&1041640245977952337>\n> ▪︎ <:fortnite:1042231290180685934> Vous donne le rôle <@&1041640373333790780>\n> ▪︎ <:valorant:1042231764946522163> Vous donne le rôle <@&1041640674002485248>\n> ▪︎ <:overwatch:1042231374482001971> Vous donne le rôle <@&1041640504024121374>").then(
                        message => message.react("1042231158051704922")
                        .then(() => message.react('1042231290180685934'))
                        .then(() => message.react('1042231764946522163'))
                        .then(() => message.react('1042231374482001971'))
                    )
                }
            }
        }
        
    }
}
/*const mysql = require(`mysql`);
var sql;
const db = mysql.createConnection({
            host: `localhost`,
            user: `root`,
            password: ``,
            database: `detrinox`
        });
module.exports = {
    name: "messageCreate",
    once: false,

    execute(message,client){
        if(message.author.bot == true){
            return
        }
        db.query(`SELECT * FROM utilisateurs`,async (err, req) =>{
            sql = `DELETE FROM utilisateurs`
            db.query(sql, function(err){
                if(err) throw err 
            })
        })
    }
}*/