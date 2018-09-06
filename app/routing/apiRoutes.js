const server = require('../../server')

module.exports = {
    routes: () => {
        server.li().get("/api/friends", (req, res) => {
        res.send(`<p><a href="/">Return Home</a> | <a href="/survey">Submit Survey</a></p><pre>${JSON.stringify(server.friend(), null, 2)}</pre>`);
            console.log("API GET FRIEND")
        });
        server.li().post("/api/friends", (req, res) => {
            console.log("API POST FRIEND")
        })
    }
}