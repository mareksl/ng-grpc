FROM node:12.8-alpine AS install
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install \
  && npm cache clean --force

FROM install AS dev
ENV NODE_ENV=development
EXPOSE 4200
CMD ["npm", "start"]

FROM install AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build -- --prod

FROM nginx:stable-alpine AS prod
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/ng-grpc .
