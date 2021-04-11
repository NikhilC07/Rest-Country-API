//Print the array of first currency symbols from currencies of the country.

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all");
request.send();
request.onload = () =>{
  console.log(request);
  if(request.status === 200){
    var details = JSON.parse(request.response)
    let array=[]
    for( var i=0; i<details.length; i++){
      array.push(details[i].currencies[0].symbol)
    }
    console.log(array);
  }
  else{
    console.log(`error ${request.status} ${request.status}`);
  }
}
