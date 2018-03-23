function produceDrivingRange(range){
  return function(start, end){
    let totalDistance = parseInt(end) - parseInt(start);
    if (totalDistance<range){
      return `within range by ${totalDistance}`
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
