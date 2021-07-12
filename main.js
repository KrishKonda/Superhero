var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keyPressed=e.keyCode;
if (e.shiftKey==true && keyPressed=='80'){
  console.log("shift and p are pressed together");
  block_image_width=block_image_width+10;
  block_image_height=block_image_height+10;
  document.getElementById("current_width").innerHTML=block_image_width;
  document.getElementById("current_height").innerHTML=block_image_height;
}
if (e.shiftKey==true && keyPressed=='77'){
  console.log("shift and m are pressed together");
  block_image_width=block_image_width-10;
  block_image_height=block_image_height-10;
  document.getElementById("current_width").innerHTML=block_image_width;
  document.getElementById("current_height").innerHTML=block_image_height;
}
if (keyPressed=='37') {
  console.log("left");
  left();
}
if (keyPressed=='38') {
  console.log("up");
  up();
}
if (keyPressed=='39') {
  console.log("right");
  right();
}
if (keyPressed=='40') {
  console.log("down");
  down();
}
if (keyPressed=='66') {
  console.log("B");
  new_image("ironman_body.png");
}
if (keyPressed=='70') {
  console.log("F");
  new_image("spiderman_face.png");
}
if (keyPressed=='82') {
  console.log("R");
  new_image("ironman_right_hand.png");
}
if (keyPressed=='72') {
  console.log("H");
  new_image("hulk_left_hand.png");
}
if (keyPressed=='76') {
  console.log("L");
  new_image("spiderman_legs.png");
}
}
function up(){
  if (player_y>=0) {
    player_y=player_y-block_image_height;
    console.log("block_image_height is:"+ block_image_height);
    console.log("when up arrow is pressed x="+player_x+", y="+player_y);
    canvas.remove(player_object);
    player_update();

  }
}
function down(){
  if (player_y<=650) {
    player_y=player_y+block_image_height;
    console.log("block_image_height is:"+ block_image_height);
    console.log("when down arrow is pressed x="+player_x+", y="+player_y);
    canvas.remove(player_object);
    player_update();

  }
}
function left(){
  if (player_x>=0) {
    player_x=player_x-block_image_width;
    console.log("block_image_width is:"+ block_image_width);
    console.log("when left arrow is pressed x="+player_x+", y="+player_y);
    canvas.remove(player_object);
    player_update();

  }
}
function right(){
  if (player_x<=800) {
    player_x=player_x+block_image_width;
    console.log("block_image_width is:"+ block_image_width);
    console.log("when right arrow is pressed x="+player_x+", y="+player_y);
    canvas.remove(player_object);
    player_update();

  }
}