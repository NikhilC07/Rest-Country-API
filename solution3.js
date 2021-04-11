// Print an array of country names which have India(IND) or China(CHN) as their borders.


let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all");
request.send();
request.onload = () =>{
  console.log(request);
  if(request.status === 200){
    var details = JSON.parse(request.response)
    let array=[]
    for(var i=0;i<details.length;i++){
      for(var j=0;j<(details[i].borders).length;j++){
        if(details[i].borders[j]==="IND" || details[i].borders[j]==="CHN"){
          array.push(details[i].name)
        }
        
      }
    }

    console.log(array);
  }
  else{
    console.log(`error ${request.status} ${request.status}`);
  }
}
