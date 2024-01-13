var imge = document.getElementById("img")
var h4  = document.getElementById("name")
var h5 = document.getElementById("role")
var rightButton = document.getElementById("right")
var leftButton = document.getElementById("left")
var para = document.getElementById("para")

var user = [{
    imge : "women3.jpg",
    h4  : "Meena",
    h5  : "FULL-STACKDEVELOPER",
    para :"It is a great app and I depend so much on it in my studies, but in the last updates why did you remove offline access to the row (media, files, music..) which appears in the chats, channels and groups."
}
,{
    imge : "bs3.jpg",
    h4  : "Akash",
    h5 : "FRONDEND-DEVELOPER",
    para : "Apparently the updates broke the ability to use the system back button. Super annoying. You're forced to use the app's back button at the top of the screen. This is not convenient because it forces."
},
{
    imge :"Bussnesman.jpg",
    h4 : "Nantha",
    h5 : "WEB-DEVELOPER",
    para :"I finally out how to connect with message, but for some reason you bury it with more clicks. Same with this new Analytics Change.There's more than enough space in the sidebar to view all without the extra clicks."
},
{
    imge :"bs6.jpg",
    h4 : "Vasanth",
    h5 :"BACKEND-DEVELOPER",
    para :"Very recently, (last three months) and with growing increasity, the app will not load anything after clicking a video. This has now spread to just 1 or 2 refreshes and the failure to load prompt lands at the bottom of my screen"
}]


var index = 0 

rightButton.addEventListener("click",()=>{
    index++
    if(index == user.length){
        index = 0
    }
    console.log(index,user[index])
    imge.src = user[index].imge;
    h4.innerHTML = user[index].h4
    h5.innerHTML = user[index].h5
    para.innerHTML = user[index].para
})

leftButton.addEventListener("click",()=>{
  
   if(index > 0)
   {
    index--
   console.log( index)
   }
   else if(index ==0)
   {
    index = user.length
     index --
    console.log( index )
   }

   imge.src = user[index].imge
   h4.innerHTML = user[index].h4
   h5.innerHTML = user[index].h5
   para.innerHTML = user[index].para
})