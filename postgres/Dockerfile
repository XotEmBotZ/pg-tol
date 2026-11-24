FROM postgres:19

# Install pgaudit for PostgreSQL 16
RUN apt-get update && \
    apt-get install -y --no-install-recommends postgresql-16-pgaudit && \
    rm -rf /var/lib/apt/lists/*

# Create dedicated log directory with proper postgres ownership
RUN mkdir -p /var/log/postgresql && \
    chown -R postgres:postgres /var/log/postgresql && \
    chmod 755 /var/log/postgresql

# Copy PostgreSQL configuration files
COPY postgresql.conf /etc/postgresql/postgresql.conf
COPY pg_hba.conf /etc/postgresql/pg_hba.conf

# Launch PostgreSQL with custom config file and hba file
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf", "-c", "hba_file=/etc/postgresql/pg_hba.conf"]
