function fnMove() {
   var a= document.getElementById("x").value;
   var b=document.getElementById("y").value;
   var c=document.getElementsByTagName("circle");
   var d=c[0].setAttribute('cx',a);
   var e=c[0].setAttribute('cy',b);
}