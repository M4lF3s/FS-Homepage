#FROM wordpress:cli-php7.3
FROM wordpress:latest

RUN apt-get update
RUN apt-get install -y curl mysql-client
WORKDIR /tmp
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
RUN chmod +x wp-cli.phar
RUN mv wp-cli.phar /usr/local/bin/wp


COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY default-ssl.conf /etc/apache2/sites-available/default-ssl.conf

WORKDIR /etc/apache2/sites-enabled/
RUN ln -s ../sites-available/default-ssl.conf ./

WORKDIR /etc/apache2/mods-enabled/
RUN ln -s ../mods-available/socache_shmcb.load ./

RUN a2enmod rewrite expires
#RUN a2enmod ssl

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait

WORKDIR /var/www/html

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["apache2-foreground"]

EXPOSE 443