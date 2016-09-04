# Mailtrap 0.2.0

This Docker image will listen on port 435, and do nothing else than responding to SMTP
traffic in a valid way, and piping incoming emails to stdout.

# To run:

```bash
$ openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
$ openssl rsa -passin pass:x -in server.pass.key -out server.key
$ rm server.pass.key
$ openssl req -new -key server.key -out server.csr
...
Fully qualified Domain Name []: smtp.foo.com
...
$ openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
$ docker build -t mytrap .
$ docker run -d --name smtp --network=yournetwork --net-alias=smtp.foo.com mytrap
$ docker logs -f smtp
```
