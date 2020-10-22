#! /bin/bash
IMG_ID=$(docker images mynode | grep mynode | awk ' { print $1 } ')
docker container run -it -p 3000:3000 ${IMG_ID}