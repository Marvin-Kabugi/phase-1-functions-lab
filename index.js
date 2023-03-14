let scuberBlock = 42;

function distanceFromHqInBlocks(location){
    return (Math.abs(scuberBlock - Number.parseInt(location)));
}

function distanceFromHqInFeet(location){
    let distanceInBlocks = distanceFromHqInBlocks(location);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    let distanceInblock = (Math.abs(Number.parseInt(destination) - Number.parseInt(start)));
    let distanceInFeet = distanceInblock * 264;
    return distanceInFeet;

}

function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet > 2500){
        return "cannot travel that far";
    }
    if (distanceInFeet < 400){
        return 0;
    }
    else if (distanceInFeet >= 400 && distanceInFeet <=2000){
        return ((distanceInFeet - 400) * 0.02)
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }

}