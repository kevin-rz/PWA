
var url='https://www.themealdb.com/api/json/v1/1/random.php'
let cache=[]

function getDataFromNetwork(url){
var req = new Request(url)

      fetch(url)
    .then(Response => Response.json() )
    .then(data => {
        cache=data
        let random=document.getElementById('random')
        random.innerHTML=`
        <div>
          <h2>${data.meals[0].strMeal}</h2>
          <p>${data.meals[0].strCategory}</p>
          <img src="${data.meals[0].strMealThumb}"  style="height:200px;">
          <p>${data.meals[0].strInstructions}</p>
          <div style="padding: 10px;"><a href="${data.meals[0].strYoutube}" style="border-style: outset;" >Watch Youtube video Instructions</a></div>
        </div>`
    })
    .catch(err => console.log(err))
}


function getDataFromCache(){
  if (!('caches' in window)) {
    return null;
  }
 
  return caches.match(url)
      .then((response) => {
        if (response) {
          console.log(response)
          return response.json();
        }
        return null;
      })
      .catch((err) => {
        console.error('Error getting data from cache', err);
        return null;
      });
}

getDataFromCache()
getDataFromNetwork(url)

