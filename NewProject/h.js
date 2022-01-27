function endPointD(path,callBack){
    const request = new XMLHttpRequest();
    request.open("GET",path);
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        // console.log(data);
        callBack(data);
    }
    request.send();
}
endPointD("ingre.json",bindData);

function frontEnd(title,img){
    return`<div class="col-lg-3">
    <a href="#"> <img src="${img} " style="height:250px;width:250px"></a>
    <a href="" style="color:white; font-size:20px">${title}</a></div>`
}

 document.getElementById("latestMeals").innerHTML+=frontEnd();

// function bindData(data){
//     for(let i in data.meals){
//         var title=data.meals[i].strMeal;
//         var img = data.meals[i].strMealThumb;
//         document.getElementById("latestMeals").innerHTML+=frontEnd(title,img);
     
//     }
// }

function bindData(){
    for(let i in data.meals){
        var title=meals[i].strMeal;
        var img=meals[i].strMealThumb;
        document.getElementById("latestMeals").innerHTML+=frontEnd(title,img);
    }
}
