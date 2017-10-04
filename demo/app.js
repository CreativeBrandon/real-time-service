/* global fetch, WebSocket, location */
(() => {
    const messages = document.querySelector('#messages')
    const wsButton = document.querySelector('#wsButton')
    const closeConnectionsButton = document.querySelector('#closeConnections')
    const clearMessagesButton = document.querySelector('#clearMessagesButton')
    const apiButton = document.querySelector('#apiButton')
    const feedButton = document.querySelector('#feedButton')
    const config = {
        host: `http://${location.hostname}:3000`,
        hostname: location.hostname,
        port: 3000
    }
    let ws;

    const serverMessage = (messageEvent) => {
        showMessage('Incoming message from server:' + messageEvent.data)
    }

    const onOpen = () => {
        showMessage('WebSocket connection established')
    }

    const showMessage = (message) => {
        messages.textContent += `\n${message}`
        messages.scrollTop = messages.scrollHeight
    }

    const handleResponse = (response) => {
        return response.ok ?
            response.json().then((data) => JSON.stringify(data, null, 2)) :
            Promise.reject(new Error('Unexpected response'))
    }

    clearMessagesButton.onclick = () => {
        messages.innerHTML = ''
    }

    closeConnectionsButton.onclick = () => {
        if (this.ws) this.ws.close()
        this.ws = null
    }

    feedButton.onclick = () => {
        if (this.ws) {
            const msg = 'feed me'
            showMessage(`sent server this msg: ${msg}`)
            this.ws.send(msg)
        } else {
            showMessage('start a connection first')
        }
    }

    apiButton.onclick = () => {
        fetch(`${config.host}`, {
                method: 'GET'
            })
            .then(handleResponse)
            .then(showMessage)
            .catch((err) => showMessage(err.message))
    }

    wsButton.onclick = () => {
        if (this.ws) {
            // ws.onerror = ws.onopen = ws.onclose = ws.onmessage = null;
            // ws.close()
            // this.ws
        }

        ws = new WebSocket(`ws://${config.hostname}:${config.port}`)
        ws.onerror = () => showMessage('WebSocket error')
        ws.onopen = (socket, messageEvent) => onOpen()
        ws.onclose = () => showMessage('WebSocket connection closed')
        ws.onmessage = (event) => serverMessage(event)
        this.ws = ws
    }
})();