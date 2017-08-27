# Mailtrap 0.3.0

This Docker image will listen on port 435, and do nothing else than responding to SMTP
traffic in a valid way, and piping incoming emails to stdout.

Certificate is generate when started.

Based on [michielbdejong/mailtrap](https://github.com/michielbdejong/mailtrap)

## Environment variables available for customization:

```bash
ENV CERT_COUNTRY US
ENV CERT_STATE Denial
ENV CERT_LOCATION Unknown
ENV CERT_ORGANISATION Dis
ENV CERT_FQDN smtp.foo.com
ENV SMTP_USERNAME foo@bar.com
ENV SMTP_PASSWORD foopass
```

### example configuration for gitlab:

```ruby
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = 'smtp.foo.com'
gitlab_rails['smtp_port'] = 435
gitlab_rails['smtp_user_name'] = 'foo@bar.com'
gitlab_rails['smtp_password'] = 'foopass'
gitlab_rails['smtp_domain'] = 'foo.com'
gitlab_rails['smtp_authentication'] = 'login'
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['smtp_openssl_verify_mode'] = 'none'
```