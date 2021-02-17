function shadow(opt){
  var target = document.querySelectorAll("target");
  
  var targetpx;
  
  if (opt){
    targetpx = `${opt}px`
  }
  
  target.forEach(targets => {
    targets.style.boxShadow = `10px 10px ${targetpx} 1px rgba(0,0,0,12)`
  })
}

module.exports.shadow = shadow;