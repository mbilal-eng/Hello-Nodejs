import http from "http";

const PORT = 3000;

const myServer = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Server is running")
        // res.sendDate("Server is Running")
    }
    console.log("server is running")
});

myServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})