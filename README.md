# Mailtrap

This Docker image will listen on port 25, and do nothing else than responding to SMTP
traffic in a valid way, and piping incoming emails to stdout.

See https://github.com/koyaan/mailtrap for a fork which generates a TLS certificate and securely listens on port 435 instead.

# To run:

```bash
docker pull michielbdejong/mailtrap
docker run -p 25:25 --name mailtrap michielbdejong/mailtrap
docker logs -f mailtrap
```

# Use case: getting a startssl cert

If you want to get a StartSSL cert for a domain you just registered, do the following:

* run this mailtrap on a server
* set the MX record to e.g. mail.domain.com. (priority e.g. 10)
* add an A record for mail to the IP address of the server where you are running the mailtrap
* In the domain validation wizard, pick any email address (e.g. hostmaster@domain.com)
* Check the docker logs and copy-and-paste the validation token from it
