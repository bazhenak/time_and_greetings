// const greeting = require("greeting")
// console.log(greeting)
//
//


const time = setInterval(function() {
    const date = new Date();
    document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    },
    3000);



const greet = setInterval(function() {
        const greetings = ['счастья', 'здоровья', 'успехов', 'радости', 'веселья', 'хорошего настроения', 'любви', 'спокойствия'];
        const randomIndex = Math.floor(Math.random() * (greetings.length - 1));
        const result = greetings[randomIndex];
        console.log(result);
        document.getElementById("greeting").innerHTML = (result);
    },
    3000);
