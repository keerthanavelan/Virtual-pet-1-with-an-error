var dogImg, happyDog, database, foodS, foodStock, dog;
// 
function preload()
{
  dogImg = loadImage('Dog.png');
  happyDog = loadImage('happydog.png');
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250)
  dog.addImage(dogImg)
  dog.scale = 0.3
  database = firebase.database;
  console.log("Is there a problem in sketch.js:16?")
  foodStock = database.ref('pet/food');
  console.log("NP");
  foodStock.on("value", readStock)
  
}

function draw() {  
  background(64, 224, 208)
  drawSprites();
  //add styles here
  if (keyWentUp(UP_ARROW)){
    //writeStock(foodS);
    dog.addImage(happyDog);

  }
  readStock();
  writeStock();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
   x=0; 
  }
  else{
   x=x-1; 
  }
  database.ref('/').update({
    Food : x
  })
}
