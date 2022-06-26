const mysql = require("mysql2");
var config = require("nconf")

var middleware = {
    mysqlConfig: {
        user: process.env.user,
        host: process.env.host,
        password: process.env.password,
        database: process.env.db,
        waitForConnections: true,
        connectionLimit: 50,
        queueLimit: 0
    },
    initializeFirebase:async(req,res,next)=>{

    },
    getMysqlSource: async (req, res, next) => {
        const pool = mysql.createPool(middleware.mysqlConfig);
        let ppool = pool.promise();
        let conn = await ppool.getConnection();
        req["db"] = conn;
        next()
    },
    increaseTimeout: (req, res, next) => {
        req.setTimeout(60 * 60 * 1000);
        next()
    },
}
module.exports = middleware;