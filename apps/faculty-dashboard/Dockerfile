FROM oven/bun:1 AS base

WORKDIR /app

# Copy dependency definitions
COPY package.json ./

# Install dependencies with bun
RUN bun install

# Copy application source
COPY . .

EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=development

CMD ["bun", "run", "dev"]
