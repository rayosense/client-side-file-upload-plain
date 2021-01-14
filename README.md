# Client-side file upload using plain Javascript

<img src="/assets/file-upload-demo.gif">

Create `.env` file by copying `sample.env`. Enter your `publicKey`, `privateKey`, and `urlEndpoint` from the developer section in your ImageKit dashboard - https://imagekit.io/dashboard#developers.

You will also have to put `publicKey` and `urlEndpoint` value in `index.html` file.

# Running the sample application

Install all dependencies
```
yarn install
```

Run the sample application
```
node server.js
```

This will run a HTTP server on port 3000. Open http://localhost:3000 in your browser. Choose a file and upload. Open console to see the response object in logs.