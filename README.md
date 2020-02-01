# Compilation

To package this project into Docker, you need to execute the following:

```bash
$ docker build -t nodejs-rest-docker .
$ docker run -it -p 3000:3000 nodejs-rest-docker
```

To run the the app from command line:

```bash
$ node server.js
```
