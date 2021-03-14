//Computer speed test in Javascript


  let primeList = new Array();
  const PRIMES_LESS_THAN = 2000000;
  let startTime, finishTime, elapsedTime;

  //Record start time
  let startDate = new Date();
  startTime = startDate.getTime();

  //Start prime finding algorithm
  primeList.push(2);
  primeList.push(3);
  primeList.push(5);
  primeList.push(7);
  
  let candidate = 11
  
  while (candidate <= PRIMES_LESS_THAN) {
    if (isPrime(candidate)) {
      primeList.push(candidate);
    }
    candidate += 2;
  }

//Record finish time and find elapsed time.
  let finishDate = new Date();
  finishTime = finishDate.getTime();
  elapsedTime = finishTime - startTime;

  output(elapsedTime, primeList.length, PRIMES_LESS_THAN);


  function isPrime(num) {

    let maxDivisor = Math.floor(Math.sqrt(num));
    
    //Test each candidate against known primes
      let index = 0;
      let prime = primeList[index];
      while (prime <= maxDivisor) {
        if ( num%prime === 0 ) {
          return false;
        } else {
          index++;
          prime = primeList[index];
        }
      }
      return true;
    }
  

function output(time, numOfPrimes, upToMax) {
  //Output
  let message = `Your computer took ${time} milliseconds to find `;
  message += `all ${numOfPrimes} primes less than ${upToMax}.`;
  let testResult = document.querySelector("#testResult");
  testResult.innerHTML = message;

  //Set hidden fields
  let field2=document.querySelector("#computer_time")
  field2.value = time;
}
