const server = require('../../server')

module.exports = {
    routes: () => {
        server.li().get("/api/friends", (req, res) => {
        res.send(`<p><a href="/">Return Home</a> | <a href="/survey">Submit Survey</a></p><pre>${JSON.stringify(server.friend(), null, 2)}</pre>`);
            console.log("API GET FRIEND")
        });
        server.li().post("/api/characters", function(req, res) {
        //    console.log("post pushing to array. reload to update")
           let newfriend = req.body;
           console.log(`apiRoutes Path: ${JSON.stringify(req.body, null, 2)}`)
           server.friend().push(newfriend)
           res.json(newfriend); //Send the data back to the html when /api/characters path is hit
          });
    }
}