// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42){
        return distance - 42;
    } else if (distance < 42) {
        return 42 - distance;
    }
};

function distanceFromHqInFeet(num) {
    let blockNumber = distanceFromHqInBlocks(num);
    return blockNumber * 264;
};

function distanceTravelledInFeet(start, destination){
    if (destination > start) {
    return (destination - start) * 264;
    } else if (start > destination) {
        return (start - destination) * 264;
    }
};

function calculatesFarePrice(start, end) {
    let feetDistance = distanceTravelledInFeet(start,end);
    if (feetDistance <= 400) {
        return 0;
    } else if (feetDistance > 400 && feetDistance <= 2000){
        return (feetDistance-400) * 0.02;
    } else if (feetDistance > 2000 && feetDistance <= 2500){
        return 25;
    } else { 
        return 'cannot travel that far';
    }
};
