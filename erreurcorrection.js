document.getElementById("birth").addEventListener(function(){

});
var error =document.querySelector("error");
birth.addEventListener("input",function(e){
    console.log(birth);
    var reg =/^\d{2}-/d{2}-(19|20)/d{2}$/;
    if (reg.test (birth.value)){
        error.style.display="none"
    }else{
        error.style.display="block"
    }
});