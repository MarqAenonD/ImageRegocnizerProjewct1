img1 = "";
img2 = "";
img3 = "";
img4 = "";
page = 0;

stats = "";
objects = [];

function preload() {
    img1 = loadImage("dog_cat.jpg")
    img2 = loadImage("table_setup.jpg")
    img3 = loadImage("living_room.jpg")
    img4 = loadImage("tv_stand.jpg")
}

function modelLoaded() {
    console.log("model loaded");
    stats = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function draw() {
    if (page == 0) {
        image(img1, 0, 0, 640, 420);
        if (stats != "") {

        }
        
        /*fill("#FF0000");
        text("Dog", 45, 75);
        noFill();
        stroke("#FF0000");
        rect(30, 40, 450, 350);

        fill("#FF0000");
        text("Cat", 320, 120);
        noFill();
        stroke("#FF0000");
        rect(300, 90, 270, 320);
        */
    } if (page == 1) {
        image(img2, 0, 0, 640, 420);
        if (stats != "") {

        }

    } if (page == 2) {
        image(img3, 0, 0, 640, 420);
        if (stats != "") {

        }

    } if (page == 3) {
        image(img4, 0, 0, 640, 420);
        if (stats != "") {

        }

    }
}

function movePage() {
    page = page + 1
    console.log("Image changed!")
    if (page == 3) {
        page = 0
        console.log("Image reset!")
    } 
}