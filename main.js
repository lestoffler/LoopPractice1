$(document).ready(function(){
	
	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// 	for(var i=0; i<animals.length; i++) {
// 		console.log(animals[i]);
// 	};
// });

//remove an object from the end of the array
	// animals.pop();
	// for(var i=0; i<animals.length; i++) {
	// 	console.log(animals[i]);
	// }

//remove the first and third object from the array
// for ( var i = 0; i < animals.length; i = i + 2 ) {
// 	console.log(animals[i]);
// }


//log the array in backwards order
// for(var i=4; i<=animals.length i--) {
// 		console.log(animals[i]);
// 	}

//log array with 0 once, 3 twice and 4 once

var acceptableValues = {
   rat : null,
   ocelot : null,
}

for ( var i = 0; i < animals.length; i++ ) {
   if ( animals[i] in acceptableValues ) {
       console.log(animals[i])
   }
   else {

       console.log(animals[i])
       console.log(animals[i])
   }
};
});

