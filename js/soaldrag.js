function cekicek() {
    var a = document.querySelectorAll('.keandakaan .keandakaansoal');
    var c = document.querySelectorAll('.keandakaan');
    var i = 0;
    console.log(a.length);
    if(a.length == 4){
        for (var b = 0; b<a.length;b++){

            console.log(a[b].attributes[2].nodeValue);
            if(a[0].attributes[2].nodeValue==-45){
                console.log('benar');
                if(c[0].className.indexOf('benar')== -1){
                    c[0].className += " benar";
                }
                c[0].className = c[0].className.replace('salah','benar');
            i+=1;
            }
            else{
                console.log('salah');
                if(c[0].className.indexOf('salah')== -1){
                c[0].className += " salah";
            }
            c[0].className = c[0].className.replace('benar','salah');
            i+=1;
            }

            if(a[1].attributes[2].nodeValue==-34){
                console.log('benar');
                if(c[1].className.indexOf('benar')== -1){
                    c[1].className += " benar";
                }
                c[1].className = c[1].className.replace('salah','benar');
                i+=1;
            }else{
                console.log('salah');
                if(c[1].className.indexOf('salah')== -1){
                c[1].className += " salah";
            }
            c[1].className = c[1].className.replace('benar','salah');
            i+=1;    
        }

            if(a[2].attributes[2].nodeValue==23){
                console.log('benar');
                if(c[2].className.indexOf('benar')== -1){
                    c[2].className += " benar";
                }
                i+=1;
                c[2].className = c[2].className.replace('salah','benar');
            }else{
                console.log('salah');
                if(c[2].className.indexOf('salah')== -1){
                c[2].className += " salah";
            }
            c[2].className = c[2].className.replace('benar','salah');
            }

            if(a[3].attributes[2].nodeValue==324){
                console.log('benar');
                if(c[3].className.indexOf('benar')== -1){
                    c[3].className += " benar";
                }
                i+=1;
                c[3].className = c[3].className.replace('salah','benar');
            }else{
                console.log('salah');
                if(c[3].className.indexOf('salah')== -1){
                c[3].className += " salah";
            }
            c[3].className = c[3].className.replace('benar','salah');
            }

            
        }
    }else{
        window.alert("jawaban anda belum lengkap")
        
    }
    console.log(i);
    if(i==16){
        document.getElementById("ja").innerText = "jawaban anda tepat";

    }else{document.getElementById("ja").innerText = "jawaban anda belum tepat";

    }
}


var container = document.getElementById("a2");  
var content = container.innerHTML;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var evtarget=ev.target;
      if (evtarget=="[object HTMLImageElement]"){
           evtarget = evtarget.parentNode;
      }
      else {
      ev.target.appendChild(document.getElementById(data));
      }
}

function reset(){
    var container = document.getElementById("a2");
    container.innerHTML= html;
    
}                
var html;
window.onload = function reset(){
	html = document.getElementById('a2').innerHTML;
};         