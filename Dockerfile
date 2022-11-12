# node (builder)
FROM node:16-alpine AS builder
WORKDIR /usr/astro
# For cache package and not npm install everytime
COPY ./package* ./
RUN npm install

COPY ./ ./
RUN npm run build

# nginx
FROM nginx:1.23.2-alpine
COPY --from=builder /usr/astro/dist/ /usr/share/nginx/html
EXPOSE 80