window.onload = myDisplay();

function myDisplay()
{
    //alert("inside myDisplay Function");
    var cvs = document.getElementById('mycanvas');
    if(cvs.getContext)
    {
        var ctx = cvs.getContext('2d');

        var img = new Image();
        img.onload = function()
        {
            ctx.drawImage(img, 10, 10, 620, 290);
        }

        img.src = 'images/download.jpg';
        ctx.fillStyle ="lightblue";
        ctx.fillRect(0,0,640,480);

        ctx.moveTo(0, 0);
        ctx.lineTo(320, 240);
        ctx.stroke();
    }
}