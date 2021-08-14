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
  face.src = myface;
  mask = new Image();
  mask.onload = uploadMaskandface;
  mask.src = mymask;
}

function uploadMaskandface() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     ctx.drawImage(face, 0, 0, 600, 450);
     ctx.drawImage(mask, maskx, masky, maskw, maskh);
    }
function xchange() {
     maskx = document.getElementById('x').value;
     uploadMaskandface();
    }
function ychange() {
        masky = document.getElementById('y').value;
        uploadMaskandface();
       }

function wchange() {
        maskw = document.getElementById('w').value;
        uploadMaskandface();
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
           document.getElementById('mask').value = "";
           }
function changeface() {
            myface = document.getElementById('face').value;
            console.log(myface);
           add();
           document.getElementById('face').value = "";
           }
          
 