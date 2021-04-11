//Make an api GET request to fetch countries details

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all");
request.send();
request.onload = () =>{
  console.log(request);
  if(request.status === 200){
    var details = JSON.parse(request.response)
    console.log(details);
  }
  else{
    console.log(`error ${request.status} ${request.status}`);
  }
}
    