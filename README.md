# Real-time Service
Simple real-time microservice app using WebSockets.

## Requirements
* Node.js 8
* Typescript
* Docker
* Google Cloud SDK

## Usage
`npm install`

## Development
`npm start`
View Demo - `npm run client`

## Build
`npm run build`

## Docker Image
Push image to Docker hub
* Tag image `docker tag node DOCKER_HUB_USERNAME/node:version0.0.1`
* Push image `docker push DOCKER_HUB_USERNAME/node`

## Deployment

### Docker
1.) Build Image: `docker build -t node-docker .`
2.) Test locally `docker run -it --rm -p 3000:3000 --name node-app node-docker` (`-d` detached mode)

### Kubernetes & Google Cloud 
1.) Configure Cloud
2.) Create Cluster
3.) Run Container

