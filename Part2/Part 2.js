//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
// map
function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

// filter
function filter(coll, predicate) { //works for both arrays and objs
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {}; 
    each(coll, function(element, key) {
    if (predicate(element, key)) {
    acc[key] = element;
    }
  })
  }
    else {
     each(coll, function(element, i) {
      if (predicate(element, i)) {
          acc.push(element);
      }
     });
  }
  return acc;
}


// each
function each(coll, func) {
      if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
          func(coll[i], i);
        }
      } else {
        for (var key in coll) {
          func(coll[key], key);
        }
      }
    }


//reduce
function reduce(coll, f, acc) {
  var arrObj=[];
  if(!Array.isArray(coll)){
    arrObj={};
    if (acc === undefined) {
      acc = coll[Object.keys(coll)[0]];
      delete coll[Object.keys(coll)[0]];
  }
  }
  if (acc === undefined) {
    acc = coll[0];
    coll = coll.slice(1);
  }
  each (coll, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
/*
  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")
*/

function Player (name){
	var playerObj = {};
	playerObj.name = name;
	playerObj.addInfo = addInfo;
	playerObj.increaseLevel = increaseLevel;
	playerObj.checkAvailability = checkAvailability;
	playerObj.decreaseLevel = decreaseLevel;
	playerObj.sortPlayerBy = sortPlayerBy;

	return playerObj;
}



/*
  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );
*/
// var player1 = Player("Johnny")
// player1.addInfo (23, "LF", 1, "Available")
// player1.increaseLevel(4)

var addInfo = function (age, position, level, availability){

	this.addInfo["age"] = age;
	this.addInfo["position"] = position;
	this.addInfo["level"] = level;
	this.addInfo["availability"] = availability;
}


/*
	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 
*/
var increaseLevel = function (newLevel){
	this.addInfo.level = newLevel;
}
/*
	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false
*/

var checkAvailability = function (){
	if (this.addInfo.availability === "Available"){
		return true;
	}
	return false;
}


/*
	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers
*/
var arrayOfPlayers = [];

var player1 = Player("Johnny");
player1.addInfo (23, "LF", 1, "Available");
player1.increaseLevel(4);
player1.checkAvailability();
arrayOfPlayers.push(player1);

var player2 = Player("Tony");
player2.addInfo (26, "CF", 4, "Available");
arrayOfPlayers.push(player2);

var player3 = Player("Charlie");
player3.addInfo (29, "GK", 5, "Available");
arrayOfPlayers.push(player3);

var player4 = Player("Klose");
player4.addInfo (31, "MF", 5, "Available");
arrayOfPlayers.push(player4);

/*
	f - write function to iterate over the all players to decrease the level for the player if age larger the 30
*/

var decreaseLevel = function (array){
	var name;
	name = "";
	each (array, function (element, i){
		if (element.addInfo.age > 30){
			element.addInfo.level = element.addInfo.level - 1;
			name += element.name + "\n";
		}
	});
	return "We decreased the level of the player with name: " + name + " by 1 point because he/she is older than 30 years old."

}

/*
  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */



//writ your code here .....
var sortPlayerBy = function (array, condition){
	if (condition === "name"){
		return arrayOfPlayers.sort(function( a , b ){
			return (a[condition] > b[condition]);
		})
	}
	else {
		return arrayOfPlayers.sort(function( a , b ){
			return (a.addInfo[condition] - b.addInfo[condition]);
		})
	}
}
