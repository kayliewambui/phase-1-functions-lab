// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    //This function calculates the number of blocks away a pickup location is from Scuber's headquarters on 42nd Street.
  
    //Args:
        //pickupLocation: An integer representing the block number of the pickup location.
  
    //Returns:
        //An integer representing the number of blocks away the pickup location is from Scuber's headquarters.
    const distance = Math.abs(pickupLocation - 42);
    return distance;
}

const pickupLocation = 50;
console.log(distance);


function distanceFromHqInFeet(pickupLocation) {
    // 1. Call the distanceFromHqInBlocks function to get the distance in blocks
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  
    // 2. Convert blocks to feet using the known block length
    const distanceInFeet = distanceInBlocks * 264;
  
    // 3. Return the calculated distance in feet
    return distanceInFeet;
  }
  
const distanceInFeet = distanceFromHqInFeet(pickupLocation);
console.log(distanceInFeet);


function distanceTravelledInFeet(startBlock, endBlock) {
    //returns the number of feet traveled
    const distanceInBlocks = Math.abs(endBlock - startBlock);

  // Convert the distance in blocks to feet using the known block length
  const distanceInFeet = distanceInBlocks * 264;

  return distanceInFeet;
}


function calculatesFarePrice(startBlock, endBlock) {
    //This function calculates the fare for a Scuber ride based on the distance travelled.
  
    //Args:
        //startBlock: An integer representing the starting block number.
        //endBlock: An integer representing the ending block number.
  
    //Returns:
        //A string representing the fare amount or 'cannot travel that far' if the distance exceeds the limit.
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    // Check for distance exceeding limit
    if (distanceInFeet > 2500) {
      return "cannot travel that far";
    }
  
    // Free for the first 400 feet
    if (distanceInFeet <= 400) {
      return 0;
    }
  
    // Calculate fare for distances between 400 and 2000 feet (excluding 400)
    if (distanceInFeet <= 2000) {
      const chargeableDistance = distanceInFeet - 400;
      const fareInCents = chargeableDistance * 2;
      const fareInDollars = fareInCents / 100;
      return fareInDollars;
    }
  
    // Flat fare for distances between 2000 and 2500 feet
    return 25;
  }
  