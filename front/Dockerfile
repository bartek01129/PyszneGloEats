# Etap 1: Budowanie aplikacji frontendowej
FROM node:20 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Etap 2: Serwowanie aplikacji za pomocą nginx
FROM nginx:alpine

# Kopiowanie zbudowanej aplikacji
COPY --from=build /app/dist /usr/share/nginx/html

# Kopiowanie niestandardowej konfiguracji nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
