FROM node:14

WORKDIR /usr/src/app

#copy dependency file and lock to current dir in container
COPY package*.json ./

#install dependencies
RUN npm install

#copy rest of files
COPY . .

EXPOSE 3000

CMD [ "node", "index.js"]