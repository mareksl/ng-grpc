FROM node:12.8-alpine as install
ENV NODE_ENV=production
EXPOSE 50051
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only-production \
    && npm cache clean --force

FROM install AS dev
ENV NODE_ENV=development
RUN npm install --only-development
CMD ["npm", "start"]

FROM install AS build
COPY . .
RUN npm build

FROM install AS prod
COPY --from=build /usr/src/app/dist .
CMD ["node", "main.js"]