FROM ubuntu:20.04

RUN apt update && DEBIAN_FRONTEND=noninteractive apt install -y squid

COPY squid.conf /etc/squid/squid.conf

CMD ["squid", "-N", "-d", "1"]

