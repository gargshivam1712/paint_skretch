window.addEventListener('load',()=>{
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    // variables
    let painting = false;
    const start_canvas_x = 50
    const start_canvas_y = 90

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishPosition() {
    	painting = false
    	ctx.beginPath();
    	changeColor()
    }

    const green_color = document.querySelector('#green_color')
    const yellow_color = document.querySelector('#yellow_color')
    const red_color  = document.querySelector('#red_color')
    const black_color = document.querySelector('#black_color')

    green_color.addEventListener('click',()=>{
        ctx.strokeStyle = 'green'
    })

    yellow_color.addEventListener('click',()=>{
        ctx.strokeStyle = 'yellow'
    })

    red_color.addEventListener('click',()=>{
        ctx.strokeStyle = 'red'
    })

    black_color.addEventListener('click',()=>{
        ctx.strokeStyle = 'black'
    })

    function draw(e) {
    	if(!painting) return ;
    	ctx.lineWidth = 5;
        ctx.lineCap = 'round';
    	ctx.lineTo(e.clientX-start_canvas_x,e.clientY-start_canvas_y);
    	ctx.stroke();
    	ctx.beginPath();
    	ctx.moveTo(e.clientX-start_canvas_x,e.clientY-start_canvas_y)	
    }
    // EventListeners
    canvas.addEventListener('mousedown',startPosition);
    canvas.addEventListener('mouseup',finishPosition);
    canvas.addEventListener('mousemove',draw);
    
    const download = document.querySelector('#menu')
    download.addEventListener('click',function(){

        html2canvas($("#canvas"), {
            onrendered: function(canvas) {         
                var imgData = canvas.toDataURL(
                    'image/png');              
                var doc = new jsPDF('p', 'mm');
                doc.addImage(imgData, 'PNG',10,10);
                doc.save('download.pdf');
            }
        });
    });
});

