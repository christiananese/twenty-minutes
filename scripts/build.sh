#!/bin/bash

docker build -t api ./api

docker build -t ui ./ui --network="host"