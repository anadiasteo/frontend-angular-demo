FROM registry.access.redhat.com/ubi9/nodejs-20 AS build

WORKDIR /opt/app-root/src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM registry.access.redhat.com/ubi9/httpd-24

COPY --from=build /opt/app-root/src/dist/angular-frontend/browser/ /var/www/html/