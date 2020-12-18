#!/bin/bash
docker run -p 5000:5000 -d api

docker run -p 3000:3000 -d ui