# node-exp-nginx-demo-docker 🧨🚀

![badge4](https://img.shields.io/badge/docker-3.3.1-blue)
[![Report an issue](https://img.shields.io/badge/Support-Issues-green)](https://github.com/tquangdo/node-exp-nginx-demo-docker/issues/new)
![demo](demo.png)

## deploy local
1. `docker-compose up -d`
2. access browser "localhost:5002"

## [nodejs-mysql-server-demo] folder
1. ### reference
    [hoangnd](https://www.youtube.com/watch?v=BUdQes6c3mM&list=PLWBrqglnjNl3TDF6WKpAl4maE3yJ5CpYF&index=10)
1. ### src code
    - `nodejs-mysql-server-demo/server.js`:
    ```js
    const PORT = 8000 // MUST be 8000
    ...
    console.log(`environment's variables: ${JSON.stringify(process.env)}`)
    ```
1. ### deploy
    ```shell
    docker build -t img-nodejs-mysql-server-demo .
    docker images
    =>
    REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
    img-nodejs-mysql-server-demo   latest    d30b3d37e624   20 seconds ago   1.03GB
    docker run -d --name cont-nodejs-mysql-server-demo -p 8002:8000 d30b3d37e624
    docker logs cont-nodejs-mysql-server-demo
    =>
    yarn run v1.22.18
    $ yarn install && nodemon --watch server.js
    [1/4] Resolving packages...
    success Already up-to-date.
    [nodemon] 2.0.15
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): server.js
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node server.js`
    Server is listening on 8000
    environment's variables: {"npm_package_dependencies_ronin_server":"^0.1.3",...}
    ```
    - access `localhost:8002` on browser. Will NOT show json if PORT != 8000
    ```json
        {
            code: "error",
            message: "Not Found",
            error: {
                status: 404
            }
        }
    ```

