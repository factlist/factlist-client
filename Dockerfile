FROM node:8.9.4
RUN mkdir /factlist-ui
WORKDIR /factlist-ui

COPY . .

RUN yarn install && yarn build

RUN npm install -g serve
CMD serve -s build
EXPOSE 3000