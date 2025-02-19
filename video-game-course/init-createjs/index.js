/*
 * TODO 4: Create a modularized index.js,
 * pass in window and createjs
 */
(function (window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);
  console.log(stage);
  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;
  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */

  // INIT CREATEJS //

  const container = new createjs.Container();

  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("#5F0")
    .drawRect(0, 0, canvas.Width, canvas.height);
  // CREATE A CIRCLE //
  const circle = new createjs.Shape();

  circle.graphics.beginFill("blue").drawCircle(0, 0, 40);

  container.x = canvas.width * 0.5;

  const rect = new createjs.Shape();
  rect.graphics.beginFill("red").drawRect(-50, 50, 120, 10);

  // ADD DISPLAY OBJECTS TO STAGE //
  container.addChild(circle, rect);
  stage.addChild(background, container);

  stage.update();

  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick);
  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    update(event);
  }
  /*
   * TODO 10: Implement an update Function, after making
   * changes to assets, it must call stage.update();
   */
  const maxScale = 5;
  let scaleSpeed = 0.005;

  function update(event) {
    //circle.x++;
    //container.y++;
    if (circle.scaleX === maxScale) {
      circle.scaleX += scaleSpeed;
    }

    stage.update();
  }
})(window, window.createjs);
