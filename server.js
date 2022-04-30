const express = require("express");
const cors = require("cors");
const app = express(); // initializes express
const user = require("./routes/users");
const knex = require('knex');

const createUnixSocketPool = async config => {
    return knex({
        client: 'pg',
        connection: {
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            host: process.env.INSTANCE_UNIX_SOCKET,
        }, 
        ...config,
    });
};


//TODO: Add more endpoints for more actions...

app.use("/user", user); //Route for the  /user endpoint of the API

