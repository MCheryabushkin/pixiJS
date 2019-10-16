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

graphic.lineStyle(5, 0x00ff00);
graphic.beginFill(0xff0000);
// graphic.drawCircle(0, 0, 100);
graphic.drawRect(0, 0, 100, 200);
graphic.endFill();

app.ticker.add(animate);

function animate() {
    
}