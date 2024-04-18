FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000