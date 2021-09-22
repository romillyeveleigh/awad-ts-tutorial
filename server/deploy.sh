#!/bin/bash

echo What should the version be?
read VERSION

docker build -t romillyeveleigh/lireddit:$VERSION .
docker push romillyeveleigh/lireddit:$VERSION

ssh root@206.189.120.194 "docker pull romillyeveleigh/lireddit:$VERSION && docker tag romillyeveleigh/lireddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"



