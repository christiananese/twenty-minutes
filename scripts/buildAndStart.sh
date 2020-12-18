#!/bin/bash

docker build -t api ./api
docker run -p 5000:5000 -d api

docker build -t ui ./ui --network="host"
docker run -p 3000:3000 -d ui