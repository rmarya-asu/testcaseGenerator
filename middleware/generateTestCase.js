var {Tournament,Player,golfParser} = require('./golfScoreboard');

var generateRandom = function(n){
  return Math.floor((Math.random()*100)%n);
}

var generateInvalidName = function(){
  var arr = [null,0,undefined,"/n",""," "];
  return arr[generateRandom(arr.length)];
}

var generateValidYear = function(){
  var arr = [1998,1999,2000,2001,2002,2003];
  return arr[generateRandom(arr.length)];
}

var generateInvalidNumber = function(){
  var arr=["asdf","","\n","_123","12q"];
  return arr[generateRandom(arr.length)];
}

var generateNewName = function(){
  //return a random string
  var arr = ["test","test_name","test name","123Name","test123","!@#%%^"];
  return arr[generateRandom(arr.length)];
}

var generateLastName = function(){
  var arr=["Montgomerie","Fulke","Jones","Chris","Stone","King","Redmond","David","George","Paul","Quincy","Victor"];
  return arr[generateRandom(arr.length)];
}

var generateFirstInitial = function(){
  var arr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return arr[generateRandom(arr.length)];
}

var generateRound = function(){
  return generateRandom(4)+1;
}

var generateHole = function(){
  var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,"finished"];
  //increasing the frequency of "finished"?
  return arr[generateRandom(arr.length)];
}

var generateScore = function(){
  var arr = [-9,-8,-7,-6,-5,-4,-3,-2,1,0,1,2,3,4,5,6];
  return arr[generateRandom(arr.length)];
}

var generatePar = function(){
  var arr = [60,61,62,63,64,65,66,67,68,69,70,71,72,73];
  return arr[generateRandom(arr.length)];
}

var generateNewPlayer = function(){
  var players = new Array();
  for(var i=0;i<4;i++){
    if(i==3){
      players.push(new Player(generateLastName(),generateFirstInitial(),generateScore(),"finished"));

    }else{
      players.push(new Player(generateLastName(),generateFirstInitial(),generateScore(),generateHole()));
    }
  }
  return players;
}

var generateInvalidPlayers = function(){
  var players = new Array();
  for(var i=0;i<4;i++){
    players.push(new Player(generateInvalidName(),generateInvalidName(),generateInvalidNumber(),generateInvalidNumber()));
  }
  return players;
}

var generateAward = function(){
  var arr = [10000,100000,1000,200000,50000];
  return arr[generateRandom(arr.length)];
}

var generateTestCase = (req, res, next) => {
    //first initialize players
    console.log("made it here 1");
    var award = 840000;
    var yardage = 6905;
    var tour= new Tournament(generateNewName(),generateValidYear(),generateAward(),yardage,generatePar(),generateRound(),generateNewPlayer());
    next(tour);
    //console.log(newRandomTournament);
    //return json.stringify(newRandomTournament);
}


var generateFailCase = (req,res,next) =>{
  var award = 840000;
  var yardage = 6905;
  var tour= new Tournament(generateInvalidName(),generateInvalidNumber(),generateInvalidNumber(),yardage,generateInvalidNumber(),generateInvalidNumber(),generateInvalidPlayers());
  next(tour);
}


module.exports = { generateTestCase,generateFailCase};
