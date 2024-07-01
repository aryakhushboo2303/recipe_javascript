const searchform=document.getElementById("searchform");
const searchbar=document.getElementById("searchbar");
const searchres=document.getElementById("searchres");
searchform.addEventListener('submit',function(e){
    e.preventDefault();
    let searchquery=searchbar.value;
    console.log(searchquery);
    fetchAPI();
    

});
function fetchAPI(){
    //get the element where we want to show our output in the form of cards
    //let searchresult=document.getElementById('searchresult');
    //by using fetch we are requesting the server andd returns the data in the form of JSON or XML format and if fetch is successful then convert the response from JSON to Javascript object and data thus converted is in the form of array
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchbar.value}`)
    .then(response => response.json())
    .then(data => {
        //data is object and data.meals is an array which is collection of objects key:value pair
        console.log(data);
        console.log(data.meals);
        let html = "";
        
        if(data.meals!=null){
            data.meals.forEach(meal => {
                html += ` <div class="col">
                <div class="card shadow-sm">
                  <img src="${meal.strMealThumb}" width:"100%" height:"225">
                  <div class="card-body">
                    <p class="card-text">${meal.strMeal}</p>
                      <div class="d-flex justify-content-between align-items-center">
                      
                      <a class="view" href="https://www.themealdb.com/meal.php?c=${meal.idMeal} " target="_blank" class="viewbtn">View Recpie</a>
                      
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>`;
            });
            
        } else{
            html = `<p>Sorry,Nothing to show</p>`
            
        }

        searchres.innerHTML = html;
    
    });
}
