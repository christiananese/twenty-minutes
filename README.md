## Description

A simple blog build with NestJS rest API and a NextJS client

## Run Project

Make sure docker is installed.

Inside the projects root directory:

### With script

Make sure you have proper rights to execute scripts on your machine

```bash
$ sh ./scripts/build.sh # builds api ande ui image
$ sh ./scripts/startup.sh
```

If everything works:

- [Doc](http://localhost:5000/docs) for the api doc
- [Blog](http://localhost:3000) for the blog

Stop the containers

```bash
$ sh ./scripts/stop.sh # builds api ande ui image
```

### Alternative

1. Build images

```bash
$ docker build -t api ./api

$ docker build -t ui ./ui --network="host"
```

2. Start the rest-api and on `PORT 5000`

```bash
$ docker run -p 5000:5000 -d api
```

3. Start the ui application on `PORT 3000`

```bash
$ docker run -p 3000:3000 -d ui
```
