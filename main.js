// main.js
// Copyright 2016 Paalon
//

'use strict';

let PIXI = require('pixi.js/bin/pixi.js');

// デフォルトのスケールモードを最近傍法にする
//PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

// rendererの設定
let renderer = PIXI.autoDetectRenderer(
  300, 300, {
    backgroundColor: 0x444444,
    resolution: 1,
    antialias: true
  },
  false
);

// pixiview要素に描写する
document.getElementById("pixiview").appendChild(renderer.view);

// renderのroot
let stage = new PIXI.Container();



let onAssetsLoaded = () => {
  animate();
};

// フレームの更新
let animate = () => {
  update();
  requestAnimationFrame(animate);
};

// 描画関数
let update = () => {
  renderer.render(stage);
};

onAssetsLoaded();
