#! /bin/sh
# initialize script for my service
# Usage: sh ./init.sh

# close node service
docker-compose -f .//docker-compose.yml down

# define volume and network
# if exists, just skip
docker volume rm out
docker volume rm out_lang-frontend

docker network rm mynet


