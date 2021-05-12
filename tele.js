const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const telebot = require('node-telegram-bot-api');
const { setInterval } = require('timers');
const token = "1892147660:AAHtokreEm4QgbgP0Tk8A8VOAZ1knpCElbo";
const bot = new telebot(token,{polling:true})
/*setInterval(deneme,3000);
//setInterval(deneme,1000);
function deneme(){
    bot.sendMessage(-1001220852356,"Ahmetcan Egonu Sikim !, egoist piç");
}*/

bot.on('message',msg =>{
    const id = msg.chat.id;
    const message = msg.text.trim().toLowerCase();
    console.log(message);
    switch(message){
        case'naberbot':
            bot.sendMessage(id,"siktir puşt");
            break;
        case '/gayerdem':
            bot.sendMessage(id,"hiç sorma hem de ne biçim");
            break;
        case '/gayfurkan':
            bot.sendMessage(id,"hiç sorma hem de ne biçim");
            break;
        case 'sikerimsenibot':
                bot.sendMessage(id,"sikmezsen adam değilsin");
                break;
        case 'resim at bakim':
        case 'resimatbakim':
                bot.sendPhoto(id,"https://imagesharing.com/uploads/20210510/e33b01bde934551cce6aa110a47abf3042a4af77.png");
                setTimeout(() => {
                    bot.sendMessage(id,"Nasıl hoşuna gitti mi ? ");
                }, 1000);
                break;
        case 'muzikver':
            bot.sendAudio(id,"BuzzardFeathers.wav");
            break;
    }
});