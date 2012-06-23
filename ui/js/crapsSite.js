//READY
$().ready(function () {
    var ctx, lineWidth = 8;
    ctx = document.getElementById('canvas').getContext('2d');
    update();

    function update() {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(ctx, lineWidth);
    }


    $("#btnDecrease").click(function () {
        if (lineWidth >= 3) {
            lineWidth = lineWidth - 2;
            update();
        }
    });

    $("#btnIncrease").click(function () {
        lineWidth = lineWidth + 2;
        update();
    });
})

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
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#333";
    ctx.fillStyle = "#99B";

//RECTANGLE

    rectangleFilled(
        {
            ctx:ctx,
            x:100,
            y:50,
            w:100,
            h:100
        }
    );

    rectangleFilled(
        {
            ctx:ctx,
            x:220,
            y:50,
            w:100,
            h:100
        }
    );

//ARC UP
    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,0)";
    ctx.arc(210, 50 - lineWidth / 2, 10, Math.PI, 0, false);
    ctx.stroke();

//ARC DOWN
    ctx.beginPath();
    ctx.strokeStyle = "rgb(200,0,0)";
    ctx.arc(210, 150 + lineWidth / 2, 110, 0, Math.PI, false);
    ctx.stroke();

}




