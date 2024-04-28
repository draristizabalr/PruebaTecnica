FROM node:lts
WORKDIR /app
COPY package*.json /app
RUN npm install --production
RUN npm uninstall bcrypt
RUN npm install bcrypt
COPY . .
EXPOSE 3000
CMD ["npm", "start"]