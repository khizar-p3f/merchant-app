const userRoutes = require("../routes/users")
const path = require("path")

const Routes = (app) => {
    app.use("/api/user", userRoutes)
}



module.exports = Routes