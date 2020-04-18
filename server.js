const express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const token = process.env.DISCORD_TOKEN;


// currently building the lists, would like to add a weighting system to each "random" selection, especially to gear
const locations = ["INTERCHANGE", "CUSTOMS", "RESERVE", "LABS", "WOODS", "SHORELINE", "FACTORY"];
const gear = ["Budget", "Midrange", "Big boy", "Thermal"];
const time = ["AM", "PM"];

// serverside listener confirmation
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


// ONE .ON MESSAGE STATEMENT FOR ALL CASES WITH A SWITCH STATEMENT
client.on('message', msg => {
    console.log("entered message statement")
    console.log(msg.content)
    switch(msg.content) 
    {
        case "turtle, make me a raid":
            msg.channel.send(
                `${locations[Math.floor(locations.length * Math.random())]}. ${gear[Math.floor(gear.length * Math.random())]} pants. ${time[Math.floor(time.length * Math.random())]}.`
            );
            break
        case "turtle, where to go":
            msg.channel.send(
                `Buckle the fuckle, we're going to ${locations[Math.floor(locations.length * Math.random())]}.`
                );
            break
        case "turtle, how geared":
            msg.channel.send(
                `${gear[Math.floor(gear.length * Math.random())]} pants on.`
                );
            break
        case "turtle, what time":
            msg.channel.send(
                `${time[Math.floor(time.length * Math.random())]} raid.`
                );
            break
        case "where we at":
            msg.channel.send(
                `@Scav bois`
                );
            break
        case "world of warcraft":
            msg.channel.send(
                `:judge:`
                );
            break
        case "turtle help":
            msg.channel.send(
                `turtle, make me a raid\nturtle, where to go\nturtle, how geared\nturtle, what time\nwhere we at\nworld of warcraft\nturtle options`
                );
            break
    }
})

client.login(token);

app.listen(PORT, () => {
    console.log(`Tarkov Turtle is listening on PORT ${ PORT }!`);
});


// DEPRECATED

// // ALLL STATEMENTS BELOW TO BE COMBINED ABOVE
// // print current command list
// client.on('message', msg => {
//     if (msg.content === 'turtle help') {
//         msg.channel.send(`turtle, where to go\nturtle, how geared\nturtle, what time\nturtle, make me a raid\nworld of warcraft`);
//     }
// })

// // PRIMARY FUNCTION
// // make me a raid
// client.on('message', msg => {
//     // chat command to generate a time of day
//     if (msg.content === 'turtle, make me a raid') {
//         msg.channel.send(
//             `${locations[Math.floor(locations.length * Math.random())]}. ${gear[Math.floor(gear.length * Math.random())]} pants. ${time[Math.floor(time.length * Math.random())]}.`);
//     }
// })

// // INDIVIDUAL COMMANDS //
// // random location
// client.on('message', msg => {
//     // chat command to randomly choose a location
//     if (msg.content === 'turtle, where to go') {
//         // let rand = Math.random() * locations.length;
//         msg.channel.send(`Buckle the fuckle, we're going to ${locations[Math.floor(locations.length * Math.random())]}.`);
//     }
// })

// // how geared
// client.on('message', msg => {
//     // chat command to generate a gear level
//     if (msg.content === 'turtle, how geared') {
//         msg.channel.send(`${gear[Math.floor(gear.length * Math.random())]} pants on.`);
//     }
// })

// // time of day
// client.on('message', msg => {
//     // chat command to generate a time of day
//     if (msg.content === 'turtle, what time') {
//         msg.channel.send(`${time[Math.floor(time.length * Math.random())]} raid.`);
//     }
// })

// // where we at
// client.on('message', msg => {
//     // chat command to generate a time of day
//     if (msg.content === 'where we at') {
//         msg.channel.send(`@Scav bois`);
//     }
// })

// // MEMES //
// // :judge:
// client.on('message', msg => {
//     if (msg.content === 'world of warcraft') {
//         msg.channel.send(':judge:');
//     }
// })
