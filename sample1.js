function result(){
var x=parseInt(document.getElementById("pr").value);
var hi=document.getElementById("h").value;
// var w=document.getElementById("w")
// var e=document.getElementById("e")
	if(hi==="w"){
		var l=x/1000
		var gm=prompt("enter how many gm customer need ?")
		var sol=l*gm
		document.getElementById("sol1").innerHTML=sol+"ruppes"



	}
	else if(hi==="e"){
		var tt=1000/x
		var ki=prompt("enter how many price customer give")
		var solu=tt*ki
		document.getElementById("sol1").innerHTML=solu+" "+"kg"

	}
	else{
		alert("error")
	}
}