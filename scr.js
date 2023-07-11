let p = document.getElementById('key')
let bu = document.getElementsByClassName('butt')
const arr = ['a','b','c','d','e','f','g','h','i','j'];
let currentKeyIndex=0;
document.addEventListener('keydown',function(event){
    if(currentKeyIndex===8){
        currentKeyIndex = 0
        p.innerText = `${arr[currentKeyIndex]}`
    }
    console.log(arr[currentKeyIndex],event.key,arr[currentKeyIndex]===event.key);
    if(event.key===arr[currentKeyIndex]){
        currentKeyIndex++
        p.innerText = `${arr[currentKeyIndex]}`
    }else{
        PNotify.alert({
            text: "Error!",
            type: "error",
            styling: "brighttheme",
        });
    }
})
document.addEventListener('click',function(){
    currentKeyIndex=0;
    p.innerText = `${arr[currentKeyIndex]}`
})