const mongoose = require('./connection');
const Fighter = require('./fighter');


mongoose.connection.on('open', async () => {
    //create entries into mongo db using startFighters
    //first we eed to delete everything
    await Fighter.deleteMany();

    //then using startFighters, we will insert that into the mongodb
    const startFighters = [
        { name: "Jon 'Bones' Jones", hometown: "Rochester, NY", age: 35, img: "https://i.imgur.com/jt0bvbr.jpg", weightClass: "LHW, HW", readyToFight: true },
        { name: "'The Notorious' Conor McGregor", hometown: "Dublin, IE", age: 35, img: "https://i.imgur.com/9HmM9yO.png", weightClass: "FW, WW, LW", readyToFight: false },
        { name: "Israel 'The Last Stylebender' Adesanya", hometown: "Lagos, NG", age: 33, img: "https://i.imgur.com/RQzkyoc.jpg", weightClass: "MW", readyToFight: true },
    ];
    await Fighter.create(startFighters);

    // then we will close this connection
    mongoose.connection.close();


})