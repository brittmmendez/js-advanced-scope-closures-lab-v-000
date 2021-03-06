function produceDrivingRange(range){
  return function(start, end){
    let totalDistance = parseInt(end) - parseInt(start);
    if (totalDistance<range){
      let inRange = range - totalDistance;
      return `within range by ${inRange}`
    }else{
      let outOfRange = totalDistance - range;
      return `${outOfRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return percentage * fare;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
