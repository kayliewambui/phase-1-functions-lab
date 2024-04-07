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

function distanceFromHqInFeet(distanceInBlocks) {
    distanceFromHqInBlocks(distance);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

