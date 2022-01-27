function getEndPointData(endPointURL, callBackFunction){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
         
        
        callBackFunction(data);
  
    }
    xhr.send();
  }
  
  getEndPointData("ingre.json", bindingData);
 


function generateCell(title,img) {
  return`<div class="col-lg-3">
  <a href="#"> <img src="${img} " style="height:250px;width:250px"></a>
  <a href="" style="color:white; font-size:20px">${title}</a>
   </div>`;
}

function bindingData(data) {
    
    for(let i in data.meals){
        var title=data.meals[i].strMeal;
        var img = data.meals[i].strMealThumb;
        document.getElementById("latestMeals").innerHTML+=generateCell(title,img);
     
    }
}

getEndPointData("meal.json", bindingData1);
function bindingData1(data) {
    
    for(let i in data.categories){
        var title=data.categories[i].strCategory;
        var img = data.categories[i].strCategoryThumb;
        document.getElementById("popular").innerHTML+=generateCell(title,img);
     
    }
}

getEndPointData("random.json", bindingData2);
function bindingData2(data) {
    
    for(let i in data.meals){
        var title=data.meals[i].strMeal;
        var img = data.meals[i].strMealThumb;
        document.getElementById("random").innerHTML+=generateCell(title,img);
     
    }
}

getEndPointData("https://www.themealdb.com/api/json/v1/1/search.php?f=a", bindingData3);
function bindingData3(data) {
    
    for(let i in data.meals){
        var title=data.meals[i].strMeal;
        var img = data.meals[i].strMealThumb;
        document.getElementById("meals").innerHTML+=generateCell(title,img);
     
    }
}

getEndPointData("country.json", bindingData4);
function bindingData4(data) {
    
    for(let i in data.country){
        var img = data.country[i].cunFlagThumb;
        document.getElementById("country").innerHTML+=country(img);
     
    }
}

function country(img) {
    return`<div class="col-lg-1">
    <a href="#"> <img src="${img}"/></a>
     </div>`;
  } 