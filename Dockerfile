FROM node:18-alpine
RUN yarn install
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json yarn.lock tsconfig.json .
RUN yarn install

COPY . .
EXPOSE 3000
CMD [ "yarn", "start:prod"]
