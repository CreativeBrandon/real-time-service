# Real-time Service
Simple real-time microservice app via websockets

## Requirements
* Node.js 8
* Typescript
* Docker
* Google Cloud SDK

## Usage
`npm install`

## Development
`npm start`

## Build
`npm run build`

## Deployment

### Docker
1.) Build Image: `docker build -t node-docker .`
2.) Test locally `docker run -it --rm -p 3000:3000 --name node-app node-docker` (`-d` detached mode)

### Kubernetes & Google Cloud 
1.) Configure Cloud
2.) Create Cluster
3.) Run Container
