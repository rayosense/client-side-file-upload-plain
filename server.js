const express = require('express')
const ImageKit = require("imagekit");
const fs = require('fs');
const app = express();
require('dotenv').config()

var imagekit = new ImageKit({
    publicKey: "public_a8WGCsA1kA388bo8fMmZQdJ4B1/A=",//process.env.IMAGEKIT_PUBLIC_KEY, // your_public_key,
    privateKey: "private_18IAbpl0R7F7TKFDKeHabT8juXZ4=",//process.env.IMAGEKIT_PRIVATE_KEY, 
    urlEndpoint: "https://ik.imagekit.io/"//process.env.IMAGEKIT_URL_ENDPOINT
});

app.get('/signature', (req, res) => {
    var authentcationParameters = imagekit.getAuthenticationParameters();
    res.send(authentcationParameters);
})

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
});

app.listen(3000, () => {
    console.log("Sample backend app listening at http://localhost:3000");
})