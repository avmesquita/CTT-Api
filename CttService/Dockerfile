FROM node:16
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY CTTPortugal.db3 ./
RUN npm install
COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 10000
CMD [ "node", "server.js" ]