FROM postgres
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=konecta
COPY db.sql /docker-entrypoint-initdb.d/
# The Dockerfile for the PostgreSQL image is a bit different from the one for the Node.js image. The PostgreSQL image is based on the official PostgreSQL image, and it sets some environment variables to configure the database. It also copies the db.sql file to the /docker-entrypoint-initdb.d/ directory, which is a directory that the official PostgreSQL image uses to initialize the database. Finally, it exposes port 5432 and runs the postgres command to start the database server.

