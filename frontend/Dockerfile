# Stage 1: Build the application
FROM node:18-alpine AS build

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite application
RUN npm run build

# Stage 2: Serve the built app using a lightweight web server (nginx)
FROM nginx:alpine

# Copy the built files from the previous stage to the nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
