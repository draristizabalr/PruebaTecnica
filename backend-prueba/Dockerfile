FROM node:20.10-alpine
WORKDIR /app/node-app
COPY package*.json /app/node-app/
RUN npm install
COPY . .
CMD ["npm", "start"]