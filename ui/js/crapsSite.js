function rectangleFilled(model) {
  ctx = model.ctx;
  x = model.x;
  y = model.y;
  w = model.w;
  h = model.h;

//RECTANGLE FILLED
  ctx.strokeRect(x, y, w, h);

  var xFill = x + ctx.lineWidth / 2;
  var yFill = y + ctx.lineWidth / 2;
  var wFill = w - ctx.lineWidth;
  var hFill = h - ctx.lineWidth;

  ctx.fillRect(xFill, yFill, wFill, hFill);
}

function draw(ctx, lineWidth) {
  lineWidth = lineWidth || 8;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "#333";
  ctx.fillStyle = "#99B";

//RECTANGLE
  ctx.strokeRect(100, 50, 100, 100);

  rectangleFilled(
    {
      ctx:ctx,
      x:220,
      y:50,
      w:100,
      h:100
    }
  );

//ARC
  ctx.beginPath();
  ctx.strokeStyle = "rgb(200,0,0)";
  ctx.arc(210, 150 + ctx.lineWidth / 2, 110, 0, Math.PI, false);
  ctx.stroke();

//ARC
  ctx.beginPath();
  ctx.strokeStyle = "rgb(200,0,0)";
  ctx.arc(210, 50 - ctx.lineWidth / 2, 10, Math.PI, 0, false);
  ctx.stroke();
}


//READY
(function(){
  var ctx, lineWidth;
  ctx = document.getElementById('canvas').getContext('2d');

  function update() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx, lineWidth);
  }

  lineWidth = 8;
  update();

  document.getElementById("btnDecrease").onclick = function(){
    lineWidth = --lineWidth;
    update();
  }

  document.getElementById("btnIncrease").onclick = function(){
    lineWidth = ++lineWidth;
    update();
  }

}());
