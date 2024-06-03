var heart = document.getElementById("heart-1");
const favorite_show = document.getElementById("favorite");
var heart_count =1;
heart.addEventListener("click",function(){
        heart_count +=1;
        let txt="";
        txt+=`
        <p >${heart_count}</p>    `
    favorite_show.innerHTML = txt;
})