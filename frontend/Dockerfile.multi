FROM node:12.8-alpine AS install
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install && npm cache clean --force
COPY . .

FROM install AS dev
EXPOSE 4200
CMD ["npm", "start"]

FROM install AS build
RUN npm build --prod

FROM nginx:stable-alpine AS prod
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/ng-grpc .
