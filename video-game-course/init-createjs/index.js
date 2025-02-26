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
  const circleContainer = new createjs.Container();

  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("#5F0")
    .drawRect(0, 0, canvas.Width, canvas.height);
  // CREATE A CIRCLE //
  const circle = new createjs.Shape();

  circle.graphics.beginFill("blue").drawCircle(0, 0, 40);

  const circle2 = new createjs.Shape();

  circle2.graphics.beginFill("blue").drawCircle(80, 0, 40);


  container.x = canvas.width * 0.5;

  const rect = new createjs.Shape();
  rect.graphics.beginFill("red").drawRect(-10, 50, 120, 10);
  

  // ADD DISPLAY OBJECTS TO STAGE //
  circleContainer.addChild(circle, circle2)
  container.addChild(circleContainer, rect);
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
  const maxScale = 1.25;
  const minScale = 0.25;
  let scaleSpeed = 0.05;
  let containerSpeed

  function update(event) {
    
    if(container.y >= canvas.height - 60){
      containerSpeed = -3;
    }

    if(container.y <= 0){
      containerSpeed = 3
    }

    container.y += containerSpeed
    
   if(circleContainer.scaleY <= minScale){
    scaleSpeed = 0.03
   }
   if(circleContainer.scaleY >= maxScale){
    scaleSpeed = -0.03
   }
    circleContainer.scaleY += scaleSpeed
   console.log(scaleSpeed)
   console.log(circleContainer.scaleY)
    stage.update();
  }
})(window, window.createjs);
