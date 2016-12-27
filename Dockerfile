# Docker image version
FROM node:6.9.2-wheezy

# Mount point of source folder in container
ADD ./src /src

# Define workdir for docker
WORKDIR /src

# Run command at workdir
RUN npm install

# Port Forwording
EXPOSE 3000

# Define command to run
CMD [ "npm", "start" ]
