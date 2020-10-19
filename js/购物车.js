window.onload=function(){
    var plus_sign=document.getElementsByClassName("plus_sign");
    var minus_sign=document.getElementsByClassName("minus_sign");
    var text_value=document.getElementsByClassName("text_value");
    var amounts=document.getElementsByName("amounts");
    var check=document.getElementsByName("check");
    var all_check=document.getElementById("all");
    var price=document.getElementsByName("price");
  var goods=0;//商品计数
  all_check.onclick=function(){
      if ( all_check.checked==true) {//全选的勾选状态
          for (let i = 0; i < check.length; i++) {
              check[i].checked=true;
          }
          goods=check.length;
      }else{
          for (let i = 0; i < check.length; i++) {
              check[i].checked=false;
          }
          goods=0;
      }
      calc();
  }
  for (let i = 0; i < check.length; i++) {
  
      check[i].onclick=function(){//复选框的遍历
         if (check[i].checked) {//勾选状态
             goods++;        
         }else{
            goods--;
             }
             if (goods==check.length) {//判断商品是否等于复选框数量
                 all_check.checked=true;
             }else{
                 all_check.checked=false;
             }
             calc();
         }   
      //获取+号单击事件
         plus_sign[i].onclick=function(){
         var num =parseInt(text_value[i].value);
             num++;
             text_value[i].value=num; 
             calc();  
     }
     //获取-号单击事件
             minus_sign[i].onclick=function(){
             var num =parseInt(text_value[i].value);
             if (num >=2) {
                 num--;
                 text_value[i].value=num;
                 calc(); 
             }else{
                 text_value[i].value=1;
                 calc();
             } 
     }
         text_value[i].onblur=function(){
             var val=text_value[i].value;
             if ((val>1)&&(!isNaN(val))) {
                 val=parseInt(val);
                 text_value[i].value=val;
                 calc();
             }else{
                 text_value[i].value=1;
                 calc();
             }
          }       
 }
         function calc(){
             var totalvalue=0.00;//合计变量
             // var amounted;
             for (var i = 0; i <text_value.length; i++) {
            //获取数量输入框的值，加一后的值赋值给输入框
             var prc;
             var money=price[i].childNodes;
             //获取第i个商品的单价
             for (let j = 0; j < money.length; j++) {
                 if (money[j].nodeName=="EM") {
                     prc=parseFloat(money[j].firstChild.nodeValue);
                     console.log("第"+i+"个商品"+"单价"+prc);
                 } 
          }
          var num=text_value[i].value;
          var amountss;
          var amount=amounts[i].childNodes;
            //获取金额=数量*单价
          for (let j = 0; j < amount.length; j++) {
             if (amount[j].nodeName=="EM") {
                 amountss=(num*prc).toFixed(2);
                 amount[j].firstChild.nodeValue=amountss;
                 // amounted=amount[j].firstChild.nodeValue;
                 console.log(amount[j].firstChild.nodeValue);
             }      
         }    
         if (check[i].checked) {
             amountss=parseFloat(amountss);
             totalvalue+=amountss;
             console.log("商品金额:"+totalvalue);
         }
     }
     document.getElementById("total_sum").getElementsByTagName("em")[0].firstChild.nodeValue=totalvalue.toFixed(2);  
     return totalvalue;
 }
 var settle_accounts=document.getElementById("settle_accounts");
 settle_accounts.onclick=function(){
     alert("您消费了:"+calc()+"元！");  
 }
 //删除
 var good=document.getElementById("body");
 var delgoods=document.getElementById("del");
 delgoods.onclick=function(){
     var arr=[];
     for (let i = 0; i < check.length; i++) {
      if (check[i].checked) {
          var delg=check[i].parentElement.parentElement;
          arr.push(delg);
          }  
     }
     for (let i = 0; i < arr.length; i++) {
         good.removeChild(arr[i]);
     }
     all_check.checked=false;
     goods=0;
     document.getElementById("total_sum").getElementsByTagName("em")[0].firstChild.nodeValue=0.00.toFixed(2);
 }
 var spa=document.getElementsByTagName("span");
 spa[1].onclick=function(){
    window.location.href="../期末作业/注册.html";
}
}      

 