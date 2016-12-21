//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
/* ========================== Helper Functions */


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

/* 1) a- */
function makeStudent (name, age, education, nationality){
	return {
		name: name,
		age: age,
		education: education,
		nationality: nationality
	}
}

var Montaser = makeStudent ("Montaser", 23, "Software Engineer", "Syrian");
var Moath = makeStudent ("Moath", 24, "IT", "Jordanian");

/* 1) b- */
function showFriend (student){
	var display = "";
	display = display + student.name + " with the age of " + student.age + " and with " + student.education + " education. :)";
	return display;
}

/* 1) c- */
var studentClass = [Montaser, Moath];
function averageStudents (studentClass){
	var totalAge, averageAge;
	totalAge = 0;
	studentClass.each (function (element, i){
		totalAge += element.age;
	})
	averageAge = totalAge / studentClass.length;
	return averageAge;
}



/*
 2-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...

/* 2) */

function rangeSquared (start, end){
	var arrSquaredEven = [];
	if ( !end ){
		if (start % 2 === 0){
			arrSquaredEven.push(square ( start ));
		}
		else {
			return null;
		}
	}
	else {
		for ( var i = start; i <= end; i++ ){
			if (i % 2 === 0){
				arrSquaredEven.push(square( i ));
			}
		}
	}
	return arrSquaredEven;
}

function square (num) {
	return num * num;
}
/* 3- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
/* 3) */
function findLeaders (array){
	var newArr = [];
	for (var i = 0; i < array.length; i++){
		if ( array [ i ] > array [ i+1 ]){
			newArr.push(array [i] );
		}
		else if (i === array.length - 1){
			newArr.push ( array [ array.length - 1 ])
		}
	}
	return newArr;
}
