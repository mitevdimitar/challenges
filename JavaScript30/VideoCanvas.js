const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = async() => {
    const localMediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = localMediaStream;
    video.play();
}

const paintToCanvas = () => {
    const height = video.videoHeight;    ;
    const width = video.videoWidth;
    canvas.height = height;
    canvas.width = width;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, height, width);
    }, 16);
}

const takePhoto = () => {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'me');
    link.innerHTML = `<img src=${data} alt="me" />`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
