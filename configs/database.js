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