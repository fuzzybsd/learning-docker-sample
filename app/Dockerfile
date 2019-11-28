FROM node:8.16.2-alpine

WORKDIR /app

COPY app.js .
# COPY node_modules/ ./
COPY package-lock.json .
COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["node", "/app/app.js"]