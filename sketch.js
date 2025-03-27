let button1, button2, button3, button4;
let sprite1, sprite2, sprite3, sprite4;
let sprite1Index = 0, sprite2Index = 0, sprite3Index = 0, sprite4Index = 0;
let sprite1Frames = [], sprite2Frames = [], sprite3Frames = [], sprite4Frames = [];
let sprite1Timer = 0, sprite2Timer = 0, sprite3Timer = 0, sprite4Timer = 0;
let isHoveringButton1 = false, isHoveringButton2 = false, isHoveringButton3 = false, isHoveringButton4 = false;
let iframe;

function preload() {
sprite1 = loadImage('1_all.png');
sprite2 = loadImage('2_all.png');
sprite3 = loadImage('3_all.png');
sprite4 = loadImage('4_all.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);

// 切割 sprite1 (10 張，每張 57x54)
for (let i = 0; i < 10; i++) {
sprite1Frames.push(sprite1.get(i * 56, 0, 56, 54));
}

// 切割 sprite2 (7 張，每張 44x46)
for (let i = 0; i < 7; i++) {
sprite2Frames.push(sprite2.get(i * 44.285, 0, 44.285, 46));
}

// 切割 sprite3 (12 張，每張 64x45)
for (let i = 0; i < 12; i++) {
sprite3Frames.push(sprite3.get(i * 64.583, 0, 64.583, 45));
}

// 切割 sprite4 (8 張，每張 47.375x34)
for (let i = 0; i < 8; i++) {
sprite4Frames.push(sprite4.get(i * 47.375, 0, 47.375, 34));
}

// 按鈕1：自我介紹
button1 = createButton('自我介紹');
button1.position(150, 50);
button1.size(100, 50);
button1.style('font-size', '20px');
button1.mouseOver(() => isHoveringButton1 = true);
button1.mouseOut(() => isHoveringButton1 = false);
button1.mousePressed(() => createIframe('https://www.et.tku.edu.tw/'));

// 按鈕2：作品簡介
button2 = createButton('作品簡介');
button2.position(280, 50);
button2.size(100, 50);
button2.style('font-size', '20px');
button2.mouseOver(() => isHoveringButton2 = true);
button2.mouseOut(() => isHoveringButton2 = false);
button2.mousePressed(() => createIframe('https://wither0858.github.io/20250310/'));

// 按鈕3：筆記說明
button3 = createButton('筆記說明');
button3.position(410, 50);
button3.size(100, 50);
button3.style('font-size', '20px');
button3.mouseOver(() => isHoveringButton3 = true);
button3.mouseOut(() => isHoveringButton3 = false);
button3.mousePressed(() => createIframe('https://hackmd.io/@yljBsqXlRrKGO44yTylRTg/B1J4TmMTJe'));

// 按鈕4：測驗題
button4 = createButton('測驗題');
button4.position(540, 50);
button4.size(100, 50);
button4.style('font-size', '20px');
button4.mouseOver(() => isHoveringButton4 = true);
button4.mouseOut(() => isHoveringButton4 = false);
button4.mousePressed(() => createIframe('https://wither0858.github.io/20250310/')); // 測驗題的連結
}

function draw() {
background(220);

// 顯示按鈕1動畫
if (isHoveringButton1) {
if (millis() - sprite1Timer > 300) {
sprite1Index = (sprite1Index + 1) % sprite1Frames.length;
sprite1Timer = millis();
}
image(sprite1Frames[sprite1Index], 50, 50);
}

// 顯示按鈕2動畫
if (isHoveringButton2) {
if (millis() - sprite2Timer > 300) {
sprite2Index = (sprite2Index + 1) % sprite2Frames.length;
sprite2Timer = millis();
}
image(sprite2Frames[sprite2Index], 50, 50);
}

// 顯示按鈕3動畫
if (isHoveringButton3) {
if (millis() - sprite3Timer > 300) {
sprite3Index = (sprite3Index + 1) % sprite3Frames.length;
sprite3Timer = millis();
}
image(sprite3Frames[sprite3Index], 50, 50);
}

// 顯示按鈕4動畫
if (isHoveringButton4) {
if (millis() - sprite4Timer > 300) {
sprite4Index = (sprite4Index + 1) % sprite4Frames.length;
sprite4Timer = millis();
}
image(sprite4Frames[sprite4Index], 50, 50);
}
}

function createIframe(url) {
if (iframe) iframe.remove();
iframe = createElement('iframe');
iframe.attribute('src', url);
iframe.size(windowWidth - 100, windowHeight - 200);
iframe.position(50, 150);
}

