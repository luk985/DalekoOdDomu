var angleImageMin = -7;
var angleImageMax = 7;
var numberOfImages = 10;


function RunJS()
{
	for(var i=1; i<=10; i++)
	{
		document.getElementById("imageCity"+i.toString()).getElementsByTagName("img")[0].onmouseover = function() {TakeALookAtTheCity(this)};
		document.getElementById("imageCity"+i.toString()).getElementsByTagName("img")[0].onmouseout = function() {ExitFromTheCityPreview(this)};
		
	}
	
	//document.getElementById("imageCity").getElementsByTagName("img")[0].onmouseover = function() {TakeALookAtTheCity(this)};
	//document.getElementById("imageCity").addEventListener("onmouseover", TakeALookAtTheCity(this));
	//document.getElementById("imageCity").addEventListener("onmouseout", ExitFromTheCityPreview(this));
	//document.getElementById("imageCity").onmouseover = function() {TakeALookAtTheCity(this)};
	//document.getElementById("imageCity").onmouseout = function() {ExitFromTheCityPreview(this)};
	//document.getElementById("imageCity1").getElementsByTagName("img")[0].onmouseover = function() {TakeALookAtTheCity(this)};
	//document.getElementById("imageCity1").getElementsByTagName("img")[0].onmouseout = function() {ExitFromTheCityPreview(this)};
	console.log(numberOfImages);
}



function TakeALookAtTheCity(x)
{
	x.style.transform="rotate(0deg)";
	console.log("OPEN");
}

function ExitFromTheCityPreview(x)
{
	console.log("CLOSE");
	x.style.transform="rotate(" + randomAngle() +"deg)";
	
}

function randomAngle()
{
	return Math.floor(Math.random()*(angleImageMax-angleImageMin+1)+angleImageMin);
}


function loadDoc() {
	console.log("Program uruchomiony przyciskiem");
	let xhr = new XMLHttpRequest();
	//console.log(xhr);
	
	xhr.open("GET","127.0.0.1:1388",true);
	
	xhr.send();
	console.log(xhr.response);
	
}

/*
function loadDoc() {
	console.log("Program uruchomiony przyciskiem");
	let xhr = new XMLHttpRequest();
	console.log(xhr);
	var xhttp = new XMLHttpRequest();
	console.log(xhttp);
	xhttp.onreadystatechange = function(){
		console.log("Ready State: " + this.readyState);
		console.log("Status: "+ this.status);
		if (this.readyState == 4 && this.status == 200) //200=Wszystko ok, połączenie zakończyło się sukcesem
		{
			var newp = document.createElement("p");
			newp.setAttribute("id","demo");
			document.getElementById("logoText").appendChild(newp);
			document.getElementById("demo").innerHTML=this.responseText;
		}
	};
	xhttp.open("GET","demo_get.asp",true);
	xhttp.send();
}
*/