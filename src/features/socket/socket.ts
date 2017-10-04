import { Express } from 'express'
import * as http from 'http'
import * as url from 'url'
import * as WebSocket from 'ws'
import config from '../../config'

let socket: WebSocket

const error = (err: Error) => {
    console.log('error connecting')
}

const sendMessage = () => {
    let i = 0
    const interval = setInterval(() => {
        i++
        
        const msg = JSON.stringify({
            data: `${i} message sent`
        })
        
        socket.send(msg)
        
        if(i === 10) clearInterval(interval)
    }, 2000)
}

const message = (message: WebSocket.Data) => {
    console.log('WS message received: %s', message)
    sendMessage()
}

const connection = (ws: WebSocket, req: http.IncomingMessage) => {
    console.log('websocket connected')
    ws.on('message', message)
    socket = ws
}

export const init = (server: http.Server) => {
    const wss = new WebSocket.Server({ server })

    wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => connection(ws, req))
    wss.on('error', error)
}
