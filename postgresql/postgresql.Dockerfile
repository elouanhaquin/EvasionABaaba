FROM postgres:15.6-alpine

LABEL author="Elouan"
LABEL description="Postgres Image for Skazy"
LABEL version="1.0"

COPY *.sql /docker-entrypoint-initdb.d/

# Exposing server port
EXPOSE 5432
