# Docker image version
FROM node:6.9.2-wheezy

# Mount point of source folder in container
ADD ./src /var/www/election

# Define workdir for docker
WORKDIR /var/www/election

# Run command at workdir
RUN npm install

# Port Forwording
EXPOSE 80

# Define command to run
CMD [ "npm", "start" ]
