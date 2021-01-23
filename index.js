// Versión 2.1

const Discord = require('discord.js')
const config = require('./config.json')
require('dotenv').config()
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)

const prefix = "/"
client.on('ready', () => {
    console.log('BOT WORKING!')
    
});
client.on('message', function(message){
    //Help command
    if(message.content.startsWith(prefix + 'ayuda') || message.content.startsWith(prefix + 'help')){
        message.reply('Estoy trabajando en los comandos')
    }
    else if (message.content.startsWith(prefix + 'desactivarBot') && message.author.id == '347165913662881798'){
        message.reply('Se apagará el bot ;))')
    }
    else if(message.content.startsWith(prefix + 'spam')){
        let spammer = message.content.split(' ')
        spammer.shift()
        let numeroDeMensajes = parseInt(spammer[spammer.length - 1])
        spammer.pop()
        let mensajeEnviar = spammer.join(' ')

        if(numeroDeMensajes < 100 && message.member.hasPermission("Admin")){
            for(let i = 0; i < numeroDeMensajes; i++){
                message.channel.send(mensajeEnviar)
            }
        } else{
            message.reply('No se ha podido completar la acción')
        }




    }
    else if(message.content.includes('rtx') || message.content.includes('3080') || message.content.includes('RTX') || message.content.includes('3090')){
        console.log("rtx on")
        message.reply('¿Qué decías...?', {files: ['../images/outofstock.jpeg']})
    }
    else if(message.content.startsWith(prefix + 'say')){
        message.content = message.content + " "
        let mensaje = message.content.slice(5,-1)
        message.channel.send(mensaje)
    }
})



