//Print the array of all country names which falls in the region of 'Europe'.

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all");
request.send();
request.onload = () =>{
  console.log(request);
  if(request.status === 200){
    var details = JSON.parse(request.response)
    let array=[]
    for(var i=0;i<details.length;i++){
        if(details[i].region === "Europe"){
          array.push(details[i].name)
        }
    }

    console.log(array);
  }
  else{
    console.log(`error ${request.status} ${request.status}`);
  }
}
