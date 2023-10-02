# What Is This
nodejs live streaming server
## Support format
Check the library used: [node-media-server](https://www.npmjs.com/package/node-media-server)

# How To Use
## Streaming on OBS
**Service:** `custom`<br>
**Server:** `rtmp://[ServerIp]/live`<br>
**StreamKey:** `[anykey]`
## Access from hls
**Example to html**
```html
<div class="main">
    <h1>倉庫監視カメラ</h1>
    <h2>ノートパソコンカメラ</h2>
    <div class="video">
        <video id="video_smaple" controls ></video>
    </div>
</div>
<script>
    if(Hls.isSupported()) {
    var video = document.getElementById('video_smaple');
    var hls = new Hls();
    hls.loadSource('http://[ServerIp]/live/[anykey]/index.m3u8');
    hls.attachMedia(video);
    }
</script>
```