FROM node:10.15.3
RUN mkdir /factlist-ui
WORKDIR /factlist-ui

ARG PORT=3000
ARG NODE_PATH_ARG=src/
ARG REACT_APP_API_ENDPOINT_ARG=http://alpha.factlist.com:81/api/v1

ENV PORT=$PORT
ENV NODE_PATH=$NODE_PATH_ARG
ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT_ARG

COPY . .

RUN npm install && npm run build

RUN npm install -g serve
CMD serve -s build
EXPOSE 3000
