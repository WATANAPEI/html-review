#! /bin/sh
# initialize script for my service
# Usage: sh ./init.sh

# define volume and network
# if exists, just skip
docker volume create out_node

docker network inspect mynet &> /dev/null || docker network create mynet

# start node service
docker-compose -f ./docker-compose.yml up -d --build
# wait to prevent from memory error
# sleep 60
