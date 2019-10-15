const canvas = document.getElementById("myCanvas");

let _w = window.innerWidth;
let _h = window.innerHeight;

const app = new PIXI.Application({
    view: canvas,
    width: _w,
    height: _h
});

console.log(PIXI.utils.TextureCache);

let loader = PIXI.Loader.shared;
loader.onComplete.add(handleLoaderComplete);
loader.onLoad.add(handleLoadAsset);
loader.onError.add(handleLoadError);
loader.onProgress.add(handleLoadProgress);

loader.add("zombie", "zombie.png")
    .on("progress", handleLoadProgress)
    .on("load", handleLoadAsset)
    .on("error", handleLoadError)
    .load();

let img;

function handleLoadProgress(loader, resource) {
    console.log(loader.progress + "% loaded");
}
function handleLoadAsset(loader,resource) {
    console.log("asset loaded " + resource.name);
}
function handleLoadError() {
    console.log("load error");
}
function handleLoaderComplete() {
    let texture = loader.resources.zombie.texture;
    img = new PIXI.Sprite(texture);
    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    app.stage.addChild(img);

    app.ticker.add(animate);
}

function animate() {
    img .x = app.renderer.screen.width / 2;
    img.y = app.renderer.screen.height / 2;
    img.rotation += 0.04;
}