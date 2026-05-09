import httpProxy from 'http-proxy';
import http from 'http';
import 'dotenv/config';

const proxy = httpProxy.createProxyServer()

const servers = [
  'http://auth-server-1:3001',
  'http://auth-server-2:3002',
  'http://auth-server-3:3003'
]

let current = 0

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')

    const target = servers[current % servers.length]
    current++
    proxy.web(req, res, { target })
}).listen(process.env.PORT)