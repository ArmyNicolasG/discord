// Versión 2.1

const Discord = require('discord.js')
const config = require('./config.json')
require('dotenv').config()
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)
new Class

const prefix = "/"

client.on('message', function(message){
    if(message.content.startsWith(prefix + 'chat')){
        message.reply('¿Cómo estás?')
        
    }
    
})