#!/usr/bin/env bash

openssl req -new -newkey rsa:2048 -days 365 -nodes -x509  \
    -subj "/C=${CERT_COUNTRY}/ST=${CERT_STATE}/L=${CERT_LOCATION}/O=${CERT_ORGANISATION}/CN=${CERT_FQDN}"  \
     -keyout server.key  -out server.crt
npm start