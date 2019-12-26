//Computer speed test in Javascript

document.addEventListener("DOMContentLoaded", function() {

  var list = new Array();
  var PRIMES_LESS_THAN = 20000;
  var startTime, finishTime, elapsedTime;

  //Record start time
  var startDate = new Date();
  startTime = startDate.getTime();

  //Start prime finding algorithm
  list.push(3);
  list.push(7);
  var decade = 1;
  var counter = (PRIMES_LESS_THAN/10) -1;
  
  while (counter > 0) {
    primeFinder(decade);
    decade++;
    counter--;
  }

//Record finish time and find elapsed time.
  var finishDate = new Date();
  finishTime = finishDate.getTime();
  elapsedTime = finishTime - startTime;

//Add 2 to list size to get correct number of primes to allow for 2 and 5.
  var lastPrimeIndex = list.length - 1;

//Output
//DEBUG
console.log(elapsedTime);

  var testResult = document.querySelector("#testResult");
  testResult.innerHTML = `Your computer took ${elapsedTime} milliseconds to find all ${list.length + 2} primes less than ${PRIMES_LESS_THAN}.`;
  
//Set hidden fields
  var field1 = document.querySelector("#computer_userAgentString");
  field1.value = navigator.userAgent;
  var field2=document.querySelector("#computer_time")
  // var field2 = document.forms[0].computer[time];
  field2.value = elapsedTime;

  function primeFinder(decade) {

    //Generate candidates, don't bother with even numbers
    // or anything ending in 5.
    var candidates = new Array(4);
    candidates[0] = decade*10 + 1;
    candidates[1] = decade*10 + 3;
    candidates[2] = decade*10 + 7;
    candidates[3] = decade*10 + 9;
    
    //Test each candidate against known primes excluding 2 and 5.
    for (i=0; i<4; i++) {
      var candidate = candidates[i];
      var listSize = list.length;
      var index = 0;
      
      while (listSize > 0) {
        var prime = list[index];
        if (candidate%prime == 0){
          break;
        }else if(listSize == 1) {
          list.push(candidate);
        }
        ++index;
        --listSize;
      }
    }
  }
});
