FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
ENV key=value
RUN npm install

COPY . .

CMD ["node", "app.js"]