//This tests the speed of a computer by finding all the prime numbers under a 
//certain value. It is designed to use multiple threads
//It tests every odd integer (evenes are not prime) up to a maximum value
//For each candidate it finds the square root and then tests every odd number
//less than the square root

//Set prime count to 4 because 2,3,5 and 7 are prime.
//Start prime finding algorithm at 9
let primeCount1 = 4;
const START = 9;
const MAX = 2000000;
//The next two values, thread count and problem sections, have to be set together.
//They specify the number of threads and how the work is divided
const threadCount = 4;
//Make array to specify which range of values each thread is reponsible for
const problemSections = [START, 740001, 1220001, 1640001, MAX];
//Add flag to array when threads reach the end of their loops
let threadDone = [];
let startDate = new Date();
let startTime = startDate.getTime();




// Build a worker from an anonymous function body
var blobURL = URL.createObjectURL( new Blob([ '(',
  function(){
    onmessage = function(event){
        //Extract parameters from JSON message
      let range = JSON.parse(event.data);
      let min1 = range[0];
      let max1 = range[1];
      let startTime1 = range[2];
      // console.log("thread launch" + max1);
      let results1 = primeCounter(min1, max1, startTime1);
      
      //Send results back to main thread
      postMessage(JSON.stringify(results1));
    }

    function primeCounter(min, max, startTime) {
      //Range is set by parameters
      //In loop, test each number in a given range to see if it is prime
      //Don't need to test evens so ensure minimum value is odd
      //then increment by 2
      if (min%2 == 0) {
        min+=1;
      }
      let primeCount2 = 0;
      for (let i = min; i<=max; i+=2) {
        let candidate = i;

        //Find square root for each number in range
        let sqrt = Math.sqrt(i);
        let isPrime = true;
        //Test for prime by dividing candidate by every odd integer 
        //less than the square root

        for (let j=3; j<=sqrt; j+=2) {

          //Move to next if candidate divisible
          if (candidate%j === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime == true) {
          primeCount2++;
        }
      }
      //Make and return results array with number of primes and runtime
      let threadRunTime = new Date().getTime() - startTime;
      let results = [primeCount2, threadRunTime];
      //Send thread runtimes to console to aid thread balancing
      console.log(`${min} to ${max} took ${threadRunTime}`);
      return results;
    }
}.toString(),
')()' ], { type: 'application/javascript' } ) );




//Make workers (Javascript threads) in loop
const myWorker = [];
let message = [];
for (let i=0; i<threadCount; i++) {

  myWorker[i] = new Worker(blobURL);
  let range = [problemSections[i], problemSections[i+1], startTime];
  myWorker[i].postMessage(JSON.stringify(range) );

  myWorker[i].onmessage = function(event) {
    //Receive message from thread and extract results
    let results = JSON.parse(event.data);
    let primeCount = results[0];
    let runtime = results[1];

    primeCount1 += primeCount;
    threadDone.push(true);

    if (threadDone.length === threadCount) {
      //Record finish time
      let finishTime = new Date().getTime();
      let runtime = (finishTime - startTime);  

      output(threadCount, MAX, primeCount1, runtime);
    }
  }
}


//Writes results to webpage
function output(threadCount2, upToMax, primeCount2, runtime2) {
  //Output
  let message = threadCount2 + " threads counting all primes under " + upToMax;
  message += " found " + primeCount2 + " primes in " + runtime2 + " milliseconds.";
  let testResult = document.querySelector("#testResult");
  testResult.innerHTML = message;
}


