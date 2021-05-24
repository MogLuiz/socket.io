var express = require("express") 
var app = express()
var http = require("http").createServer(app)
var io = require("socket.io")(http)


//Abrindo evento de conexão
io.on("connection",(socket) => {
   
    socket.on("boasvindas", (data) => {
        console.log("Executando evento de boas vindas")
        console.log(data)
    })

    socket.on("palavra", (data) => {
        console.log(data)
        socket.emit("resultado", data + " - Luiz dev" )
    })

    
})


app.set("view engine","ejs")

app.get("/", (req, res) => {
    res.render("index")
})




http.listen(3000, () => {
    console.log("Server running")
})