# Use an official Node.js runtime as a parent image
FROM node:18-alpine3.17

# Set the working directory inside the container
WORKDIR /index

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies inside the container
RUN npm install

# Copy the rest of the app files
COPY . .

# Make the container's port 3001 available to the outside
EXPOSE 3001

# Run the app
CMD [ "npm", "start" ]