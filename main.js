var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var face;
var myface = 'https://www.pngkit.com/png/detail/794-7948465_blank-face-png-photo-blank-face-template.png';
var mask;
var mymask = 'cloth mask.png';
var maskx = 130;
var masky = 90;
var maskw = 350;
var maskh = 350;
function add() {
  face = new Image();
  face.onload = uploadFace;
  face.src = myface;

  mask = new Image();
  mask.onload = uploadMask;
  mask.src = mymask;
}
function uploadFace() {
    ctx.drawImage(face, 0, 0, 600, 450);
}
function uploadMask() {
     ctx.drawImage(mask, maskx, masky, maskw, maskh);
    }
function xchange() {
     maskx = document.getElementById('x').value;
     uploadFace();
     uploadMask();
    }
function ychange() {
        masky = document.getElementById('y').value;
        uploadFace();
        uploadMask();
       }

function wchange() {
        maskw = document.getElementById('w').value;
        uploadFace();
        uploadMask();
       }
function hchange() {
           maskh = document.getElementById('h').value;
           uploadFace();
           uploadMask();
          }
function changemask() {
            mymask = document.getElementById('mask').value;
            console.log(mymask);
           add();
           }
function changeface() {
            myface = document.getElementById('face').value;
            console.log(myface);
           add();
           uploadFace();
        uploadMask();
           }
 