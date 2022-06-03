FROM node:14.17.6-stretch-slim
WORKDIR /app
COPY . .
RUN npm i

EXPOSE 8088
CMD ['nodemon', 'app.js']