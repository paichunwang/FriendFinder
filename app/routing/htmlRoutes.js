const server = require('../../server')

module.exports = {
    routes: () => {
        server.li().get("/", (req, res) => {
            res.sendFile(server.pi().join(__dirname, "../public/home.html"));
            console.log("Default")
        });
        server.li().get("/survey", (req, res) => {
            res.sendFile(server.pi().join(__dirname, "../public/survey.html"));
            console.log("Survey")
        });
    }
}