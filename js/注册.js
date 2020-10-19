window.onload=function(){
    var dod=document.getElementsByClassName("gouwuche")[0];
    dod.onclick=function(){
        window.location.href="../期末作业/购物车.html";
    }
    var xtxt=document.getElementById("txt");
    var xp=document.getElementById("pp");
    var xbut=document.getElementById("but");
    xbut.onclick=function(){
        if ((xtxt.value.length==0)||(xtxt.value.length<11)) {
            xp.innerHTML="您输入的错误！";
        }
        else if(xtxt.value.length==11){
            xp.innerHTML="";
        }
    }












}