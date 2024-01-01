# Stage 1: Build TypeScript code
FROM node:14-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the TypeScript source code
COPY . .

# Build TypeScript code
RUN npm run build

# Stage 2: Create the final image
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy only necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/build ./build

# Install only production dependencies
RUN npm install --production

# Expose the port that your Express app is listening on

EXPOSE 5001

# Start the application
CMD ["node", "build/index.js"]