$(document).ready(init);
var blockIsSelected = false;
var towersClass;
var selectedBlock;
var blocksClass;
var selectedTower;
function init(){
  console.log("ready");
}
// div.classlist

$('.block').on('click', function selectABlock(e){
  e.stopPropagation();
  e.preventDefault();
  if (blockIsSelected === false){
    selectedBlock = this;
    blocksClass = $(this).attr('class');
    $(this).css('background-color', 'grey');
    blockIsSelected = true;
    console.log("blocksClass:", $(".tower:first-child"));

    return
  }else if(selectedBlock === this){
    $(selectedBlock).removeAttr('style');
    blockIsSelected = false;
    return
  }
});


$('.tower ').on('click', function selectATower(){
  towersClass = $(this).attr('class');
  blocksClass = $(".tower:first-child")
  console.log(blocksClass);
  console.log("T:", towersClass)
  towersFirstChildClass = $(this).attr('class')
          var smallerBlock = false;

          if ( towersClass < blocksClass || $(this).children().length === 0 ){
            smallerBlock = true;
            console.log("number:", towersFirstChildClass)
          }

          if (blockIsSelected === true && smallerBlock === true){
            selectedTower = this
            $(selectedTower).prepend(selectedBlock);
            console.log("children:", $(this).children().length);
            blockIsSelected = false
            $(selectedBlock).removeAttr('style');
          }

      });
