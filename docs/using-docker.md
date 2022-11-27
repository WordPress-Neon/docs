---
description: How to use WPN within a Docker container
pagination_label: Docker Support
---

# Docker Support

## Introduction

The WordPress Neon framework is best suited to a Docker environment.

If you're familiar with Docker then you can simply use this `docker-compose.yml` template to compose a container.

Once you have started the container WordPress will be available at `https://localhost` for the URLs of other services,
see the [#URLs](#urls) section

:::caution

The current setup for a Docker WordPress environment creates the WordPress core files in the root directory where the
`docker-compose.yml` file is.

When starting a project you should first create and run the Docker container and then create your theme in the `themes`
directory of `wp-content`.

:::


## Docker Compose File

```yaml title="docker-compose.yml"
version: '3'

services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - '${FORWARD_DB_PORT:-3306}:3306'
    restart: 'no'
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: pass
      MYSQL_ROOT_PASSWORD: pass
      MYSQL_ALLOW_EMPTY_PASSWORD: 1
    networks:
      - wordpress

  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: 'no'
    ports:
      - '8081:80'
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: pass
      UPLOAD_LIMIT: 500M
    networks:
      - wordpress

  mailhog:
    image: mailhog/mailhog:latest
    ports:
      - '1025:1025'
      - '8025:8025'
    networks:
      - wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:5.9-php8.1
    ports:
      - '80:80'
    restart: 'no'
    volumes:
      - ./:/var/www/html
      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: pass
      WORDPRESS_DEBUG: 1
    networks:
      - wordpress

networks:
  wordpress:

volumes:
  db_data:
```

## URLs

| Service         | URL                                               |
|-----------------|---------------------------------------------------|
| **WordPress**   | [http://localhost](http://localhost)              |
| **PhpMyAdmin**  | [https://localhost:8081](https://localhost:8081)  |
| **Mailhog**     | [http://localhost:8025](http://localhost:8025)    |