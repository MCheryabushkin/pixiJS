const canvas = document.getElementById("myCanvas");

let _w = window.innerWidth;
let _h = window.innerHeight;

const app = new PIXI.Application({
    view: canvas,
    width: _w,
    height: _h
});

const texture = PIXI.Texture.from("sprite.png");
const texture2 = PIXI.Texture.from("sprite2.png");

let sprite1,
    sprite2,
    sprite3;

img = new PIXI.Sprite(texture2);
img.x = app.renderer.screen.width / 2;
img.y = app.renderer.screen.height / 2;
img.anchor.x = 0.5;
img.anchor.y = 0.5;
app.stage.addChild(img);

let container = new PIXI.Container()
app.stage.addChild(container);


let sprites = [];

// sprite1 = new PIXI.Sprite(texture);
// sprite1.position.set(app.renderer.width / 2, app.renderer.height / 2);
// sprite1.anchor.set(0.5);
// container.addChild(sprite1);

// sprite2 = new PIXI.Sprite(texture);
// sprite2.position.set(app.renderer.width / 2, app.renderer.height / 2);
// sprite2.anchor.set(0.5); 
// sprite2.tint = 0xff0000;
// container.addChild(sprite2);

// sprite3 = new PIXI.Sprite(texture);
// sprite3.position.set(200, 100);
// sprite3.anchor.set(0.5);
// sprite3.pivot.set(100, 100);
// container.addChild(sprite3);

addSprites();
app.ticker.add(animate);

function addSprites() {
    for (let i = 0; i < 10; i++) {
        let sprite = new PIXI.Sprite(texture);
        sprite.x = Math.random() * app.renderer.screen.width;
        sprite.y = Math.random() * app.renderer.screen.height;
        sprite.tint = Math.random() * 0xff0000;
        sprite.anchor.set(0.5);
    
        container.addChild(sprite);
        sprites.push(sprite);
    }
}

let delta = 0;

function animate() {
    delta += 0.1;

    container.y = Math.sin(delta) * 10;

    // sprite2.y -= Math.sin(delta) * 10;
    // sprite1.y -= Math.sin(delta / 2) * 10;
    // sprite3.y -= Math.sin(delta / 3) * 10;
}