FROM oven/bun:1.1.37-alpine AS base

WORKDIR /app

#------------------#

FROM base AS build  

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Generate Prisma Client
COPY ./prisma ./prisma
RUN bun db:generate

# Copy the rest of the application
COPY . .
# Build the application
RUN bun run build

#------------------#

FROM base AS release

USER bun

# Copy the build output from the build stage
COPY --from=build --chown=bun /app/public ./public
COPY --from=build --chown=bun /app/.next/standalone ./
COPY --from=build --chown=bun /app/.next/static ./.next/static

EXPOSE 3000

CMD ["bun", "./server.js"]