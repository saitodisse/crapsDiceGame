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

(function(){
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.lineWidth = 2;
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
  ctx.arc(200, 150, 50, 0, Math.PI, false);
  ctx.stroke();
}());
