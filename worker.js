const ports = [];
onconnect = (evt) => {
    const port = evt.ports[0];
    ports.push(port);

    port.postMessage({id: 'id', new_id: ports.length - 1})

    port.onmessage = (message) => {
        ports.forEach((p, index) => {
            p.postMessage({
                id: 'position',
                pos: message.data
            });    
        });
    }
}