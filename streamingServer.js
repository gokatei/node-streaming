const ffmpeg = require('fluent-ffmpeg')
const HLSServer = require('hls-server')
const http = require('http')

// host, port and path to the RTMP stream
const host = 'localhost'
const port = '1935'
const path = '/live/test'

const server = http.createServer((req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req)})
const hls = new HLSServer(server, {
path: '/streams',     // Base URI to output HLS streams
dir: 'public/videos'  // Directory that input files are stored
})
server.listen(8001)

ffmpeg('rtmp://'+host+':'+port+path, { timeout: 432000 }).addOptions([
    '-c:v libx264',
    '-c:a aac',
    '-ac 1',
    '-strict -2',
    '-crf 18',
    '-profile:v baseline',
    '-maxrate 400k',
    '-bufsize 1835k',
    '-pix_fmt yuv420p',
    '-hls_time 10',
    '-hls_list_size 6',
    '-start_number 1'
    ]).output('public/videos/output.m3u8').on('end', () => {
        console.log('end')
    }).run()