// "use strict";
//
// $(document).ready(init);
// function init() {
//   $('.tower').click(towerClicked)
// }
// function towerClicked(){
//   console.log($('.selected').length)
//   if($('.selected').length) {  //have a selection
//     if($(this).find(".selected").length){// selected piece is here (unselect)
//       $('.selected').removeClass('selected');
//     }else{// selected piece not here (move)
//       var selectedSize = $(".selected").data('size');
//       var targetSize = $(this).find('.disk').first().data('size') || Infinity;
// //check legality
//       if(selectedSize < targetSize){
//         //move
//         var $piece = $('.selected').detach();
//         $(this).children().prepend($piece);
//         $('.selected').removeClass('selected');
//         checkWin();
//       }
//     }
//   }else {  // we dont have a selection
//     $(this).find('.disk').first().addClass('selected');
//   }
// }
// function checkWin(){
// if($('.tower').slice(0,2).find('.disk').length === 0){
//   alert('WIN')
// }
// }
//
//
//
// // Number
// // parseInt
// // parseFloat

var $towers:

$(document).ready(init);
function init() {
$towers = $('.tower');
$towers.click(towerClicked);

  // $('.tower').click(towerClicked)
  // $('.start').click(startGame)
}

function startGame(){
  $('.disk').remove();

  var quantity = $('#quantity').val();

  for(var i = 1; i <= quantity; i++){
    var $disk = $('<div>').addClass('disk').data('size', i +1);
    var width = 20 + widthDiff * i;
    $disc.css('width',width + %);
    disks.push($disk);
    }
$('.tower').first().children().append(discs);
}






function towerClicked(){
  console.log($('.selected').length)
  if($('.selected').length) {  //have a selection
    if($(this).find(".selected").length){// selected piece is here (unselect)
      $('.selected').removeClass('selected');
    }else{// selected piece not here (move)
      var selectedSize = $(".selected").data('size');
      var targetSize = $(this).find('.disk').first().data('size') || Infinity;
//check legality
      if(selectedSize < targetSize){
        //move
        var $piece = $('.selected').detach();
        $(this).children().prepend($piece);
        $('.selected').removeClass('selected');
        checkWin();
      }
    }
  }else {  // we dont have a selection
    $(this).find('.disk').first().addClass('selected');
  }
}
function checkWin(){
if($('.tower').slice(0,2).find('.disk').length === 0){
  alert('WIN')
}
}
