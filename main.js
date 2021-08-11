color_value="";

function preload() {

}

function setup () {
    canvas=createCanvas(400,350);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(600,600);
    webcam.hide();
}

function draw() {
    image(webcam,0,0,400,350);
color_value=document.getElementById("color_selector").value;
console.log(color_value);
document.getElementById("color_display").innerHTML="Color value is "+ color_value;
tint(color_value);
}

function save_selfie() {
    save('image.png')
}