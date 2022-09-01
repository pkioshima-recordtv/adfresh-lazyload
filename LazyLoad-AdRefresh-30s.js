window.googletag = window.googletag || {cmd: []};

googletag.cmd.push(function() {
  
  googletag.pubads().enableLazyLoad({
    fetchMarginPercent: 300, // <---- Editar esse valor para alterar a distância em viewports em que o ad request ocorre.
    renderMarginPercent: 100, // <---- Editar esse valor para alterar a distância em viewports em que o ad é renderizado.
    mobileScaling: 1.0 // <--- Escala para mobile.
  });

  googletag.enableServices();
  googletag.pubads().addEventListener('impressionViewable', function(event) {      
    var slotR = event.slot
    var divId = slotR.getSlotElementId()
    var div = document.getElementById(divId)
    
    if(div.id.includes('7542')){

      var time = 0
      var refreshInterval = setInterval(function() {
        if (div.getBoundingClientRect().y > 0 && div.getBoundingClientRect().y <= window.innerHeight) { 
          //console.log(slotR.getSlotElementId() + ' is visible by ' + time + ' seconds'); // Debug do timer
          time = time + 1;
          if (time >= 30) { // <---- Editar esse valor para alterar o tempo de refresh
            //console.log('Refreshed: ' + slotR.getSlotElementId()); // refresher debug
            googletag.pubads().refresh([slotR]);
            time = 0;
            clearInterval(refreshInterval)
          }
        }
      } , 1000);        
    }
  });
});
