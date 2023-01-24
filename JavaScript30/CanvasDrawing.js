const canv = document.querySelector("#draw");
  const ctx = canv.getContext("2d");
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;

  ctx.strokeStyle = "#BADA55";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 10;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;

  const draw = (e) => {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    //start from
    ctx.moveTo(lastX, lastY);
    //move to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
  }
  
  canv.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY; 
  });

  canv.addEventListener('mousemove', draw);
  canv.addEventListener('mouseup', () => {isDrawing = false});
  canv.addEventListener('mouseout', () => isDrawing = false);
