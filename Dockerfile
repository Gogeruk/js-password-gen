# get node
FROM node:current-slim

# set the working dir in the container
WORKDIR /app

# cp package.json and package-lock.json first to leverage Docker's caching
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# cp the rest of the application files
COPY . .

# expose the application port
EXPOSE 8080

# set the entry point to run the JS app
# keep alive!
CMD ["sh", "-c", "node index.js && tail -f /dev/null"]