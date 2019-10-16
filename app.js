const canvas = document.getElementById("myCanvas");

let _w = window.innerWidth;
let _h = window.innerHeight;

const app = new PIXI.Application({
    view: canvas,
    width: _w,
    height: _h
});

let graphic = new PIXI.Graphics();
graphic.x = app.renderer.width / 2;
graphic.y = app.renderer.height / 2;
app.stage.addChild(graphic);

let radius = 50;

graphic.beginFill(0xff0000);
graphic.arc(0, 0, radius, 0, Math.PI * 2);
graphic.endFill();

app.ticker.add(animate);

let delta = 0;
function animate() {
    delta += 0.04;
    radius = 50 + Math.sin(delta) * 25;

    graphic.clear();
    graphic.beginFill(0xff0000);
    graphic.arc(0, 0, radius, 0, Math.PI * 2);
    graphic.endFill();
}