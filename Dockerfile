FROM node:0.10-onbuild

RUN npm install simplesmtp

EXPOSE 25
