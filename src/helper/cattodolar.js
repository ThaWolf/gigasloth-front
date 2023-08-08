function getDollarValue() {
    var cusd = 0
    fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(function(response) {
    if (!response.ok) {
        throw Error(response.status);
    }  
    return response.json();
    }).then(function(response) {
        console.log(response)
        cusd = round(response.blue.value_sell - ((response.blue.value_sell * 10) / 100));
        return cusd				
    }).catch(function(error) {
    alert(error);
    });
    }
    function round(v){
    return Math.ceil(v / 10) * 10;
  }

  export default getDollarValue