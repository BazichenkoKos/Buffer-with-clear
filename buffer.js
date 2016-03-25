function makeCounter() {
  var currentCount ="";
  function pusher(value){
	  if(value === undefined){
  	   return currentCount;
  }
  return currentCount += " " + value;
  };
  pusher.clear = function(){
  	return currentCount = "" ;
  	};   
  return pusher;
}
var counter = makeCounter();
counter("I");
counter("made");
console.log(counter());
counter("all");
counter("right");
console.log(counter());
counter.clear();
console.log(counter());
