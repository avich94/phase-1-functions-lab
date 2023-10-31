const hq = 42
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - hq);
}
console.log(distanceFromHqInBlocks(50));


function distanceFromHqInFeet(blocks) {
        const distanceInBlocks = distanceFromHqInBlocks(blocks);
        const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInFeet(43));


function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination-start)
    const feetPerBlock = 264;
return distanceInBlocks * feetPerBlock;

}
console.log(distanceTravelledInFeet(43, 44));

function calculatesFarePrice(start, destination) {
    const distanceInBlocks = Math.abs(destination-start)
    const feetPerBlock = 264;
    const distanceInFeet = distanceInBlocks * feetPerBlock;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}
    console.log(calculatesFarePrice(43, 44));