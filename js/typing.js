$(function() {


var adventureMapStr = 'Adventure Map: Digital Ocean' ;
var submarineStr = 'Submarine: Ubuntu' ;
var deepPadZero = '0000000000' ;
var sinkingStr = 'Sinking Deep:  '+deepPadZero+' m';
var loadingTime = 3000 ;
var loadingInterval = 500 ;
var printInterval = 35 ;
var deep = 0 ;

// begin and loading...
setInterval(function() {
  if($("#loading").text().length > 4) {
    $("#loading").text('.');
  } else {
    $("#loading").append('.');
  }
}, loadingInterval);
// loding done then print message
setTimeout(function() {
   clearInterval(loading);
   $("#loading").hide();
   printMap(0);
}, loadingTime);

function printMap(i) {
  $("#adventureMap").addClass("cursor").text(adventureMapStr.substring(0, i));

  if(i < adventureMapStr.length) {
    setTimeout(function() {
      printMap(i + 1);
    }, printInterval);
  // printMap done
  } else {
    $("#adventureMap").removeClass("cursor");
    printSubmarine(0);
  }
}
function printSubmarine(i) {
  $("#submarine").addClass("cursor").text(submarineStr.substring(0, i));

  if(i < submarineStr.length) {
    setTimeout(function() {
      printSubmarine(i + 1);
    }, printInterval);
  // printSubmarine done
  } else {
    $("#submarine").removeClass("cursor");
    printSinking(0);
  }
}
function printSinking(i) {
  $("#sinking").addClass("cursor").text(sinkingStr.substring(0, i));

  if(i < sinkingStr.length) {
    setTimeout(function() {
      printSinking(i + 1);
    }, printInterval);
  // printSubmarine done
  } else {
    $("#sinking").removeClass("cursor");
    printSinkMeter();
  }
}

function printSinkMeter() {
  

  setInterval(function() {
    updateSinkMeter();
  }, 500);
}
function updateSinkMeter() {
  deep = deep + 1 ;
  deepPadZero = padZero(deep, 10);

  sinkingStr = 'Sinking Deep:  '+deepPadZero+' m';
  $("#sinking").text(sinkingStr);

  if(deep > 9999999999) {
    deep = 0 ;
  }
}


// padding 0 to deep
function padZero(num, size) {
  var s = "000000000" + num ;
  return s.substr(s.length-size);
}

});