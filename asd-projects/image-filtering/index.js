// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applySmudge(smudge)
applyFilterNoBackground(reddify)
applyFilterNoBackground(decreaseBlue) 
applyFilterNoBackground(increaseGreenByBlue) 


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var a = 0; a < image.length; a++){
  for(var b = 0; b < image[a].length; b++){
    var rgbString = image[a][b]
    var rgbNumbers = rgbStringToArray(rgbString)
    filterFunction(rgbNumbers)
    rgbString = rgbArrayToString(rgbNumbers)
    image[a][b] = rgbString
  }
}
}
// make image more red

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = "rgb(150, 150, 150)"
  for(var a = 0; a < image.length; a++){
    for(var b = 0; b < image[a].length; b++){
      var rgbString = image[a][b]
      if(image[a][b] !== backgroundColor){
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
        image[a][b] = rgbString
      }
      
    }
  }
  }

// TODO 5: Create the keepInBounds function
function keepInBounds(colorValue){
return colorValue < 0 ? 0 
: colorValue > 255 ? 255
: colorValue
}

// TODO 3: Create reddify function
function reddify(pixelSet){
  pixelSet[RED] = 200
  }

// TODO 6: Create more filter functions

// Makes image less blue
function decreaseBlue(pixelSet){
  pixelSet[BLUE] = keepInBounds(pixelSet[BLUE] - 50)
}
// increases green(based on amount of blue) 
function increaseGreenByBlue(pixelSet){
  pixelSet[GREEN] = keepInBounds(pixelSet[BLUE] + pixelSet[GREEN])
}

// CHALLENGE code goes below here
function applySmudge(filterFunction){
  for(var a = 0; a < image.length; a++){
    for(var b = 0; b < image[a].length; b++){
      if(a + 1 <= image.length && b + 1 < image[a].length){
        var rgbString1 = image[a][b]
        var rgbString2 = image[a][b + 1]
        var rgbNumbers1 = rgbStringToArray(rgbString1)
        var rgbNumbers2 = rgbStringToArray(rgbString2)
        filterFunction(rgbNumbers1, rgbNumbers2)
        rgbString1 = rgbArrayToString(rgbNumbers1)
        rgbString2 = rgbArrayToString(rgbNumbers2)
        image[a][b] = rgbString1
        image[a][b + 1] = rgbString2
      }
       
    }
  }
}


function smudge(pixel, nextPixel){
pixel[RED] = nextPixel[RED]
pixel[GREEN] = nextPixel[GREEN]

}