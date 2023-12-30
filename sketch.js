let columbia;
let fountain;
let sun;  
let student;
let cloud; 
let man; 
let bin;
let bottle;

// setup() is called once at page-load
function setup() {
    columbia = loadImage('https://i.imgur.com/9RHo2gE.png');
    fountain = loadImage('https://i.imgur.com/oSbsiGc.png');
    sun = loadImage('https://i.imgur.com/Yrtd0eT.png');
    student = loadImage('https://i.imgur.com/9218pvQ.png');
    cloud = loadImage('https://i.imgur.com/BAy9tc2.png');
    man = loadImage('https://i.imgur.com/zff2gmc.png');
    bin = loadImage('https://i.imgur.com/fGFcTZn.png');
    bottle = loadImage('https://i.imgur.com/rScR9ER.png');
    createCanvas(window.innerWidth,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    if (sec === 0){
        console.log(min);
    }

    background(255);
    noStroke()

    fill('#c0ebfc');
    rect(0, 0, window.innerWidth, 250);

    fill('#faf0e6');
    rect(0, 250, window.innerWidth, 350);

    image(columbia, window.innerWidth/2-450/2, 50, 450, 450);

    image(man, 150, 320, 100, 100);
    image(student, 65 + ((window.innerWidth - 350) * min/60), 400, 120, 120);
    
    image(fountain, 50, 400, 175, 175);
    image(fountain, window.innerWidth-235, 400, 175, 175);

    image(cloud, 200 + window.innerWidth * 0.1 + (window.innerWidth * 0.8*(hr/24)) - 300, 0, 200, 200)
    image(sun, window.innerWidth-200, 5, 150, 150);

    image(bin, 10, 340, 80, 80);
    
    image(bottle, sec < 30 ? (30 + 130 * (sec/30)) : 160 - (30-(60-sec))/30 * 130, 322.5 - (Math.abs(15-(Math.abs(15-(sec%30))))*2), 30, 30);
}