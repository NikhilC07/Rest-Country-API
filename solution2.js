//Print the country name with the highest population
//(NOTE:If more than one country has the same population then print which comes first in order).

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all");
request.send();
request.onload = () =>{
  console.log(request);
  if(request.status === 200){
    var details = JSON.parse(request.response)
    var i 
    var max_population=0
    var country_name
    for(i=0; i<details.length; i++){
      if((details[i].population) > max_population){
      max_population = details[i].population
      country_name = details[i].name
    }
    }
    console.log(country_name);
  }
  else{
    console.log(`error ${request.status} ${request.status}`);
  }
}
