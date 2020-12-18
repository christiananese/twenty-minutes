#!/bin/bash

docker stop $(docker ps -q --filter ancestor=ui )
docker stop $(docker ps -q --filter ancestor=api )