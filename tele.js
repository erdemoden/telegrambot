const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const telebot = require('node-telegram-bot-api');
const { setInterval } = require('timers');
const http = require('http');
const token = "1892147660:AAHtokreEm4QgbgP0Tk8A8VOAZ1knpCElbo";
const bot = new telebot(token,{polling:true})
/*setInterval(deneme,3000);
//setInterval(deneme,1000);
function deneme(){
    bot.sendMessage(-1001220852356,"Ahmetcan Egonu Sikim !, egoist piç");
}*/
const server = http.createServer((request,response)=>{

});
server.listen(process.env.PORT || 3000,()=>{
    bot.on('message',msg =>{
        const id = msg.chat.id;
        const message = msg.text.trim().toLowerCase();
        console.log(message);
        switch(message){
            case 'nasıl kullanıyoruz bot':
            case 'nasılkullanıyoruzbot':
                bot.sendMessage(id,"kodları dene gör kodlar : ");
                bot.sendMessage(id,"naber bot \n gay erdem \n gay furkan y \n gay aktan \n gay serkan \n gay furkan a \n gay ahmetcan \n sikerim seni bot \n resim at bakim \n muzik ver");
                bot.sendMessage(id,"büyük küçük yazmanız fark etmez ya da birleşik ayrı yazmanız farketmez efendim !!!!");
                break;
            case'naberbot':
            case 'naber bot':
                bot.sendMessage(id,"siktir puşt");
                break;
            case 'gayerdem':
            case 'gay erdem':
                bot.sendMessage(id,"hiç sorma hem de ne biçim");
                break;
            case 'gayfurkany':
            case 'gay furkan y':
                bot.sendMessage(id,"hiç sorma hem de ne biçim");
                break;
            case 'gayfurkana':
            case 'gay furkan a':
                bot.sendMessage(id,"hiç sorma hem de ne biçim");
                break;
            case 'gayserkan':
            case 'gay serkan':
                bot.sendMessage(id,"hiç sorma hem de ne biçim");
                break;
            case 'gayahmetcan':
            case 'gay ahmetcan':
                bot.sendMessage(id,"hiç sorma hem de ne biçim");
                break;
            case 'gayaktan':
            case 'gay aktan':
                bot.sendMessage(id,"hiç sorma hem de ne biçim");
                break;
            case 'sikerimsenibot':
            case 'sikerim seni bot':
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
            case 'muzik ver':
                bot.sendAudio(id,"BuzzardFeathers.wav");
                break;
        }
    });
});
