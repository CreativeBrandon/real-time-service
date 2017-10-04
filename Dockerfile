FROM node:latest
MAINTAINER cre8tivebreed@gmail.com

ENV APP_PORT="3000"
ENV APP_DIR="/src/app"
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Install all dependencies of the current project.
COPY package.json .
COPY package-lock.json .
RUN npm install

# Bundle app source
COPY . ${APP_DIR}

# Build
RUN npm run build --production

EXPOSE ${APP_PORT} 443
CMD ["npm", "run", "serve"]
