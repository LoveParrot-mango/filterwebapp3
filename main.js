magentalip_stats = true;
magenta_lip_x = 0;
magenta_lip_y = 0;
redlip_stats = true;
red_lip_x = 0;
red_lip_y = 0;
pinklip_stats = true;
pink_lip_x = 0;
pink_lip_y = 0;

function preload() {
    magenta_lip = loadImage("https://i.postimg.cc/MKPVp1zk/magenta.png");
    red_lip = loadImage("https://i.postimg.cc/XJc0g37d/red.png");
    pink_lip = loadImage("https://i.postimg.cc/T3LM4n3R/pink.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(500, 500);
    video = createCapture(VIDEO);
    video.size(700, 850);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    if(magentalip_stats == true) {
        image(magenta_lip, magenta_lip_x, magenta_lip_y, 50, 30)
    } else if (redlip_stats = true) {
        image(red_lip, red_lip_x, red_lip_y, 50, 30);
    } else if (pinklip_stats = true) {
        image(pink_lip, pink_lip_x, pink_lip_x, 50, 30);
    }
}

function magenta() {
    redlip_stats = false;
    magentalip_stats = true;
    pinklip_stats = false;
}

function brightred() {
    redlip_stats = true;
    magentalip_stats = false;
    pinklip_stats = false;
}

function pink() {
    pinklip_stats = true;
    redlip_stats = false;
    magentalip_stats = false;
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        magenta_lip_x = results[0].pose.nose.x;
        magenta_lip_y = results[0].pose.nose.y;
        red_lip_x = results[0].pose.nose.x;
        red_lip_y = results[0].pose.nose.x;
        pink_lip_x = results[0].pose.nose.x;
        pink_lip_y = results[0].pose.nose.x;
            
    }
}


function take_snapshot() {
    save('snaptown_pic.png')
}