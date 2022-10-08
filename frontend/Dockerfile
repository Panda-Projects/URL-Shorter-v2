FROM node:18
WORKDIR /usr/src/app

COPY . .

RUN npm i
RUN npm run build

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Running the app
CMD [ "npm", "start" ]